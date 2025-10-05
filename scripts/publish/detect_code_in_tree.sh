#!/usr/bin/env bash
set -euo pipefail

ROOT="${1:-_oss/repo}"
ALLOWFILE="$(dirname "$0")/public_extensions.allowlist"

if [[ ! -d "$ROOT" ]]; then
  echo "ERROR: export tree '$ROOT' not found"; exit 2
fi

mapfile -t ALLOWED < "$ALLOWFILE"
failed=0

while IFS= read -r -d '' f; do
  ext="${f##*.}"
  base="$(basename "$f")"

  # Skip git metadata if any
  [[ "$f" == *"/.git/"* ]] && continue

  # If file has no ext, treat as forbidden (e.g., Dockerfile, Makefile)
  if [[ "$base" != *.* ]]; then
    echo "::error file=$f::File has no extension and is not allowed in public export"
    failed=1
    continue
  fi

  ok=0
  for a in "${ALLOWED[@]}"; do
    if [[ ".$ext" == "$a" ]]; then ok=1; break; fi
  done

  if [[ $ok -eq 0 ]]; then
    echo "::error file=$f::Forbidden extension '.$ext' for NO-CODE public repo"
    failed=1
  fi

done < <(find "$ROOT" -type f -print0)

if [[ $failed -ne 0 ]]; then
  echo "NO-CODE safety check failed"; exit 3
fi

echo "NO-CODE safety check passed"
