#!/usr/bin/env bash
set -euo pipefail

MANIFEST="${1:-.oss.publish.yml}"
WORKDIR="${2:-_oss/repo}"

# deps: git-filter-repo, yq (v4)
if ! command -v git-filter-repo >/dev/null; then
  echo "Install git-filter-repo (pipx install git-filter-repo)"; exit 2
fi
if ! command -v yq >/dev/null; then
  echo "Install yq v4"; exit 2
fi

rm -rf _oss && mkdir -p "$(dirname "$WORKDIR")"
git clone --no-hardlinks . "$WORKDIR"
pushd "$WORKDIR" >/dev/null

# Build args from manifest
ALLOW_ARGS=()
while IFS= read -r p; do
  [[ -z "$p" ]] && continue
  ALLOW_ARGS+=( --path-glob "$p" )
done < <(yq -r '.allow[]?' "../$MANIFEST")

DENY_ARGS=()
while IFS= read -r p; do
  [[ -z "$p" ]] && continue
  DENY_ARGS+=( --path-glob "$p" )
done < <(yq -r '.deny[]?' "../$MANIFEST")

# Pass 1: keep only allowed
if ((${#ALLOW_ARGS[@]})); then
  git filter-repo "${ALLOW_ARGS[@]}" --force
fi

# Pass 2: drop any denied
if ((${#DENY_ARGS[@]})); then
  git filter-repo --invert-paths "${DENY_ARGS[@]}" --force
fi

popd >/dev/null

# NO-CODE safety check
scripts/publish/detect_code_in_tree.sh "$WORKDIR"
