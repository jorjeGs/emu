# Análisis — rec0ded88.com/play-nintendo-64-games (Banjo-Kazooie)

Fecha: 2026-10-08. Solo se analizó HTML/JS público visible, sin descargar ROMs.

## Stack real

- No es N64Wasm directo: es **EmulatorJS** (`EJS_core='n64'`, `loader.js` en `/wp-content/emu/data/`).
- Patrón por juego: `play-n64-games.html?gameName=Banjo-Kazooie.zip&gameID=2148`
  - `EJS_gameUrl = /wp-content/emu/games/n64/<gameName>` (zip con ROM dentro)
  - `EJS_pathtodata = /wp-content/emu/data/`
  - `EJS_cheatPath = /wp-content/emu/cheats/`
  - `EJS_netplayServer = https://netplay.rec0ded88.com` + STUN/TURN (coturn propio + Google + expressturn)
- Portada: fetch a worker `igdb-proxy.r88workers.workers.dev/<gameID>` -> `images.igdb.com/.../t_cover_big`, guardada en `localStorage.coverImageUrl`, usada como `EJS_backgroundImage` con `EJS_backgroundBlur:true`.
- `EJS_fullscreenOnLoaded:true`, botón `- Play Now -`, `EJS_DEBUG_XX:true`.
- Gamepad: USB plug-n-play (Gamepad API estándar, igual que nuestro T4N Lite). Además **VirtualGamepadSettings N64 completo**: A/B, D-pad, stick zona central como joystick, Start, L/R/Z arriba, C-up/down/left/right (input_value 20-23) a la derecha. Lo replicamos en `config/ejs-config.js`.
- Aviso móvil: por tamaño de ROMs N64, algunos juegos no cargan en móvil -> recomiendan desktop/laptop. Aplica igual a Ocarina/Banjo.

## Qué nos llevamos al emu (aplicado)

1. `ejs.html` como segunda vía además de `core/` N64Wasm: mismo `roms/`, `EJS_core='n64'`, fullscreen auto, fondo con blur, gamepad virtual N64 calcado.
2. ROMs en `.zip` o `.z64` directo: EmulatorJS acepta ambos; nosotros seguimos con `.z64` propios (más simple, sin recomprimir).
3. Netplay apagado por defecto (su coturn lleva credenciales públicas en el HTML, no las reusamos). Si algún día quieres co-op, se configura propio.
4. Controles Banjo de su tabla (stick=A? no: stick mover, A salto, B ataque, C moves/cámara, Z agacharse, Start pausa) coinciden con `docs/CONTROLES.md`; no hubo que cambiar mapeo T4N Lite.
5. Idea portada: fondo por juego opcional sin IGDB (para no depender de worker externo ni subir carátulas con copyright; usamos CSS simple).

## Qué NO copiamos

- ROMs, cheats, saves ajenos, credenciales TURN, proxy IGDB, analytics/ads, CSS/tema WordPress.
- Su catálogo de 100+ juegos: nosotros solo Ocarina + Banjo, UI mínima accesible.
