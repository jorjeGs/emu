#!/usr/bin/env bash
set -euo pipefail
BASE="https://raw.githubusercontent.com/nbarkhina/N64Wasm/master/dist"
OUT="$(dirname "$0")/../core"
mkdir -p "$OUT"
for f in n64wasm.js n64wasm.wasm assets.zip input_controller.js script.js settings.js index.html; do
  echo "Descargando $f ..."
  curl -fL "$BASE/$f" -o "$OUT/$f"
done
echo "OK core en $OUT"
ls -lh "$OUT"
