# emu — N64 ligero para 2 juegos

Emulador web ligero N64 (Ocarina of Time + Banjo-Kazooie) para jugar en laptop con control genérico.

- Núcleo: `N64Wasm` de `nbarkhina` (MIT, port de ParaLLEl N64 a WASM). No se vende, solo se hospeda.
- El servidor solo sirve archivos estáticos. La emulación corre en la laptop (WebGL2 + WASM).
- Control: GameSir T4N Lite en modo **XInput (LED1+LED4)** por cable USB-C o dongle 2.4G. Chrome/Edge lo ve como Xbox 360 standard vía Gamepad API, sin drivers.

## Estructura

```
emu/
  index.html              -> launcher simple en español (2 tarjetas grandes)
  ejs.html                -> vía EmulatorJS estilo rec0ded88 (n64, gamepad virtual N64, fullscreen)
  config/romlist.js       -> lista de ROMs en roms/
  config/ejs-config.js    -> config EJS compartida (virtual gamepad, CDN/self-host)
  config/gamesir-t4n-lite.js -> mapeo recomendado
  roms/                   -> aquí van TUS dumps propios .z64 (no se suben a git)
  core/                   -> n64wasm.js/.wasm/assets.zip etc (MIT, se descarga con script)
  ejs-data/ (opcional)    -> data/ EmulatorJS self-host (scripts/fetch-ejs.*)
  Dockerfile, docker-compose.yml, nginx.conf
  docs/CONTROLES.md
  docs/ANALISIS-rec0ded88.md -> qué copiamos de rec0ded88 (solo config, sin ROMs)
```

## Puesta en marcha (5 min)

1. Descargar el núcleo MIT:

```powershell
powershell -ExecutionPolicy Bypass -File scripts/fetch-core.ps1
# o en linux: bash scripts/fetch-core.sh
```

2. Poner tus dumps **propios** (USA `.z64` recomendado):

```
roms/ocarina.z64
roms/banjo.z64
```

> Legal: solo usa ROMs de cartuchos que poseas. Este repo no incluye ni enlaza ROMs con copyright. Sin dumps, la página muestra modo "cargar archivo local" para probar con homebrew.

3. Probar local:

```powershell
python -m http.server 8000
# abrir http://localhost:8000
```

4. Desplegar en VPS:

```bash
docker compose up -d --build
# sirve en :8080, ponlo detrás de HTTPS (Caddy/Nginx + Let's Encrypt)
```

## GameSir T4N Lite

- Conectar por cable USB-C o dongle 2.4G.
- Verificar `LED1+LED4` fijos = XInput. Si ves `LED1+LED3` es DInput: mantén Home 5s para cambiar.
- En la página, el recuadro "Control" debe decir `Conectado: Xbox 360 Controller (XINPUT)`.
- Pulsa cualquier botón una vez en la página para activar audio (política de Chrome).
- Mapeo completo en `docs/CONTROLES.md`.

## Saves

- Ocarina = SRAM 256Kbit, Banjo = EEPROM 4Kbit. N64Wasm los guarda en el navegador automáticamente.
- Además usa Save States (ranuras del emulador) como respaldo antes de apagar.
- Exporta saves desde el menú del emulador si vas a cambiar de laptop.

## Compatibilidad esperada

- Ocarina of Time (USA): jugable full-speed en PC media. Probado por upstream.
- Banjo-Kazooie (USA): jugable con ParaLLEl/auto. No uses plugin GlideN64 si te da opción: los save-states de Banjo se cuelgan ahí. Deja `auto`.
- Si un juego queda en pantalla negra: 99% es mal dump (PAL corrupto, .zip sin descomprimir) o falta WebGL2.

## Créditos

- `nbarkhina/N64Wasm` (MIT) — núcleo y `input_controller.js`, `script.js` original.
- `lrusso/Nintendo64` — idea de UI mínima `embedNintendo64`.
- `wayjake/web64` — notas de integración Vite/TS y pitfalls Emscripten.
