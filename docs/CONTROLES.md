# Controles — GameSir T4N Lite + Ocarina / Banjo

## 1. Conectar

1. Por cable USB-C directo al laptop, o dongle 2.4G al USB.
2. Debe quedar **LED1+LED4 fijos** = XInput. Es el modo correcto para navegador.
3. Si ves LED1+LED3 = DInput. Mantén **Home 5 segundos** para cambiar.
4. Abre Chrome/Edge, entra a tu servidor, pulsa cualquier botón: el recuadro debe decir `Conectado`.

> No instales drivers. Chrome lo reconoce como `Xbox 360 Controller (XINPUT)`.

## 2. Mapeo base (el que ya trae N64Wasm + nuestro preset)

| T4N Lite | N64 | Ocarina | Banjo |
|---|---|---|---|
| Stick izq | Stick N64 | Caminar / apuntar | Caminar preciso, nadar, volar |
| D-pad | D-pad | Menús | Menús |
| A | A | Acción / hablar / coger | Salto (pluma) |
| B | B | Espada | Picotazo / rodar |
| LT (=Z) | Z | **Fijar objetivo (clave)** | Agacharse / garra |
| RB/RT | R | Escudo / apuntar | Vista / disparar huevos |
| LB | L | - | - |
| Stick der | C-arriba/abajo/izq/der | Cámara + ocarina | Cámara (muy usado) |
| X/Y | C-izq/C-arriba extra | Notas ocarina | - |
| Menu | Start | Pausa / mapa | Pausa / mochila |

Deadzone recomendada: `0.15`. Banjo se vuelve loco con 0.05 en pendientes.

## 3. Ajuste fino en N64Wasm

`Remap Buttons` -> toca el botón N64 en pantalla -> pulsa el botón físico del T4N.
Guarda: queda en localStorage del navegador de ella.

Mínimo a remapear:
- `Z = LT (button 6)`
- `R = RT (button 7)`
- `C-Up/Down/Left/Right = stick derecho (axes 2/3)` o `Y/X/A/B` si prefiere botones.

## 4. Teclado respaldo (si el control se queda sin pila)

- Flechas = stick, `D=A, S=B, A=Z, Q=L, E=R, I/K/J/L=C, Enter=Start`
- `Ctrl+1` guardar estado, `Ctrl+2` cargar, `Ctrl+3` mute, `Ctrl+F` fullscreen

## 5. Problemas típicos T4N Lite

- **No lo detecta:** prueba otro puerto USB, cable de datos (no solo carga), o dongle. Reinicia con Home.
- **Deriva el stick (drift):** sube deadzone a 0.20 en settings del emulador.
- **LT no hace Z:** estabas en DInput. Cambia a XInput (LED1+LED4).
- **Vibración no va:** normal, la web no expone rumble en este core. No afecta saves.
- **Botones M1-M4:** no mapear, son macros. Déjalos sin usar.
