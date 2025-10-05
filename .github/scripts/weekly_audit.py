#!/usr/bin/env python3
"""Helper utilities for the weekly audit workflow."""

from __future__ import annotations

import argparse
import json
import os
import re
from pathlib import Path
from typing import Any, Dict

import yaml


def render_template(template: str, context: Dict[str, Any]) -> str:
    pattern = re.compile(r"{{\s*([^}]+)\s*}}")
    return pattern.sub(lambda match: str(context[match.group(1)]), template)


def render_payload(prompt_path: Path, inputs_path: Path, output_path: Path, default_model: str) -> None:
    prompt_data = yaml.safe_load(prompt_path.read_text(encoding="utf-8"))
    inputs = yaml.safe_load(inputs_path.read_text(encoding="utf-8"))

    model = prompt_data.get("model") or os.environ.get("MODEL", default_model)
    payload: Dict[str, Any] = {
        "model": model,
        "messages": [
            {"role": "system", "content": prompt_data["system"]},
            {"role": "user", "content": render_template(prompt_data["prompt"], inputs)},
        ],
    }

    for optional_key in ("temperature", "max_tokens"):
        if optional_key in prompt_data:
            payload[optional_key] = prompt_data[optional_key]

    output_path.write_text(json.dumps(payload, ensure_ascii=False), encoding="utf-8")


def extract_audit(response_path: Path, output_path: Path) -> None:
    data = json.loads(response_path.read_text(encoding="utf-8"))

    if "error" in data:
        raise SystemExit(f"Model API error: {data['error']}")

    try:
        content = data["choices"][0]["message"]["content"]
    except (KeyError, IndexError) as exc:
        raise SystemExit(f"Model response missing content: {data}") from exc

    output_path.write_text(content, encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser(description="Weekly audit workflow helpers")
    subparsers = parser.add_subparsers(dest="command", required=True)

    render = subparsers.add_parser("render-payload", help="Render the model payload")
    render.add_argument("--prompt", type=Path, required=True)
    render.add_argument("--inputs", type=Path, required=True)
    render.add_argument("--output", type=Path, required=True)
    render.add_argument("--default-model", default="openai/gpt-5")

    extract = subparsers.add_parser("extract-audit", help="Extract the audit markdown")
    extract.add_argument("--response", type=Path, required=True)
    extract.add_argument("--output", type=Path, required=True)

    args = parser.parse_args()

    if args.command == "render-payload":
        render_payload(args.prompt, args.inputs, args.output, args.default_model)
    elif args.command == "extract-audit":
        extract_audit(args.response, args.output)
    else:
        parser.error("Unknown command")


if __name__ == "__main__":
    main()
