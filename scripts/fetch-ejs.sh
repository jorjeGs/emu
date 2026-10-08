#!/usr/bin/env bash
set -euo pipefail
VER="4.2.3"
URL="https://cdn.jsdelivr.net/npm/@emulatorjs/emulatorjs@$VER/data.7z"
OUT="$(dirname "$0")/../ejs-data"
mkdir -p "$OUT"
TMP="$(mktemp --suffix=.7z)"
echo "Descargando $URL ..."
curl -fL "$URL" -o "$TMP"
echo "Descomprime con: 7z x $TMP -o$OUT"
echo "Luego usa EJS_pathtodata='ejs-data/' en config/ejs-config.js"
