#!/bin/sh
set -eu
SITE_DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
if command -v hugo >/dev/null 2>&1; then
  HUGO_BIN=$(command -v hugo)
elif [ -x "$SITE_DIR/../../work/bin/hugo" ]; then
  HUGO_BIN="$SITE_DIR/../../work/bin/hugo"
else
  echo 'Install Hugo first: brew install hugo' >&2
  exit 1
fi
exec "$HUGO_BIN" server --baseURL http://localhost:1313/ --buildDrafts --source "$SITE_DIR" --bind 127.0.0.1 --port 1313 --disableFastRender
