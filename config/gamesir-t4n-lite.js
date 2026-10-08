// Mapeo recomendado GameSir T4N Lite en modo XInput (LED1+LED4)
// Gamepad API standard: buttons[0..16], axes[0..3]
// No tocar si no sabes: este es el layout Xbox 360 que Chrome expone.

var GAMESIR_T4N_LITE = {
  modo: "XInput por USB-C o 2.4G, LED1+LED4 fijos. Si ves LED1+LED3 es DInput: manten Home 5s.",
  gamepad_standard: {
    buttons: {
      0: "A (N64: A)",
      1: "B (N64: B)",
      2: "X (N64: C-izq o cámara Banjo)",
      3: "Y (N64: C-arriba / melodías Ocarina)",
      4: "LB (N64: L)",
      5: "RB (N64: R)",
      6: "LT (N64: Z — fijar objetivo Ocarina / agacharse Banjo)",
      7: "RT (N64: R alternativo)",
      8: "Back/View (N64: -)",
      9: "Start/Menu (N64: Start)",
      10: "L3 (N64: -)",
      11: "R3 (N64: -)",
      12: "D-Up (N64: D-Up)",
      13: "D-Down (N64: D-Down)",
      14: "D-Left (N64: D-Left)",
      15: "D-Right (N64: D-Right)",
      16: "Home (sistema)"
    },
    axes: {
      0: "Stick izq X = stick N64 X",
      1: "Stick izq Y = stick N64 Y (deadzone 0.15 para Banjo)",
      2: "Stick der X = C-izq/C-der (cámara)",
      3: "Stick der Y = C-arriba/C-abajo"
    }
  },
  ocarina: {
    mover: "Stick izq",
    fijar_objetivo: "LT (Z)",
    espada: "B",
    accion: "A",
    escudo: "R (RB/RT)",
    ocarina_canciones: "C-buttons = stick der o Y/X + extras (remapear en N64Wasm)",
    start: "Menu"
  },
  banjo: {
    mover_preciso: "Stick izq con toques suaves (deadzone 0.15)",
    saltar: "A",
    picotazo_rodar: "B",
    agacharse_garra: "LT (Z)",
    camara: "C-buttons = stick der",
    start: "Menu"
  }
};
