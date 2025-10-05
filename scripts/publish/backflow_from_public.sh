#!/usr/bin/env bash
set -euo pipefail

MANIFEST=".oss.publish.yml"
PUB_DIR="_pub/public"
PUB_REPO_URL="${1:-https://github.com/airnub/agentic-delivery-framework.git}"

# deps
command -v git-filter-repo >/dev/null || { echo "Install git-filter-repo"; exit 2; }
command -v yq >/dev/null || { echo "Install yq v4"; exit 2; }

rm -rf _pub && mkdir -p "$PUB_DIR"
git clone --no-tags --single-branch --branch main "$PUB_REPO_URL" "$PUB_DIR"

# Safety check on public tree (should already be no-code)
scripts/publish/detect_code_in_tree.sh "$PUB_DIR"

# Build include list from allow + strip any denies after copy
mapfile -t ALLOW < <(yq -r '.allow[]?' "$MANIFEST")
mapfile -t DENY  < <(yq -r '.deny[]?' "$MANIFEST")

# Stage changes from public into internal working tree
tmp_stage="_pub/stage"
rm -rf "$tmp_stage" && mkdir -p "$tmp_stage"
(
  cd "$PUB_DIR"
  for g in "${ALLOW[@]}"; do
    # copy matching files if they exist
    shopt -s globstar nullglob
    for f in $g; do
      if [[ -f "$f" ]]; then
        mkdir -p "$tmp_stage/$(dirname "$f")"
        cp "$f" "$tmp_stage/$f"
      fi
    done
  done
)

# Apply deny rules to stage (remove anything matching denies)
(
  cd "$tmp_stage"
  for g in "${DENY[@]}"; do
    shopt -s globstar nullglob
    for f in $g; do
      rm -rf "$f"
    done
  done
)

# Sync staged files into repo, delete removed ones within allowed scope
rsync -a --delete "$tmp_stage"/ ./ 2>/dev/null || true

# Create a branch & commit
git checkout -B chore/backflow-public
git add -A
if ! git diff --cached --quiet; then
  git commit -m "Backflow: sync public changes (allowlist only)"
  echo "Backflow changes staged. Push and open a PR."
else
  echo "No changes from public."
fi
