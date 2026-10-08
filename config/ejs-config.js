// Config compartida EmulatorJS (inspirada en rec0ded88, adaptada a 2 juegos propios).
// Uso: EJS_buildConfig({ gameUrl, gameName, cover }) -> define window.EJS_* y carga loader.js
// Por defecto usa CDN estable de EmulatorJS. Para self-host total, descarga data/
// con scripts/fetch-ejs.* y cambia EJS_pathtodata a 'ejs-data/'.

var EJS_CDN_DATA = "https://cdn.emulatorjs.org/stable/data/";

var EJS_N64_VIRTUAL_GAMEPAD = [
  { type: "button", text: "B", id: "b", location: "right", left: -30, top: 15, input_value: 1, bold: true },
  { type: "button", text: "A", id: "a", location: "right", left: 10, top: 55, input_value: 0, bold: true },
  { type: "dpad", location: "left", left: "50%", top: "30%", joystickInput: false, inputValues: [4, 5, 6, 7] },
  { type: "zone", location: "center", left: "50%", top: "5%", joystickInput: true, inputValues: [16, 17, 18, 19] },
  { type: "button", text: "Start", id: "start", location: "center", left: 30, top: -100, fontSize: 15, block: true, input_value: 3 },
  { type: "button", text: "L", id: "l", block: true, location: "top", left: 10, top: -40, bold: true, input_value: 10 },
  { type: "button", text: "R", id: "r", block: true, location: "top", right: 10, top: -40, bold: true, input_value: 11 },
  { type: "button", text: "Z", id: "z", block: true, location: "top", left: 10, bold: true, input_value: 12 },
  { fontSize: 20, type: "button", text: "CU", id: "cu", location: "right", left: 50, top: -65, input_value: 23 },
  { fontSize: 20, type: "button", text: "CD", id: "cd", location: "right", left: 50, top: 15, input_value: 22 },
  { fontSize: 20, type: "button", text: "CL", id: "cl", location: "right", left: 10, top: -25, input_value: 21 },
  { fontSize: 20, type: "button", text: "CR", id: "cr", location: "right", left: 90, top: -25, input_value: 20 }
];

function EJS_buildConfig(opts) {
  window.EJS_player = "#game";
  window.EJS_gameName = opts.gameName;
  window.EJS_gameUrl = opts.gameUrl;
  window.EJS_core = "n64";
  window.EJS_pathtodata = opts.dataPath || EJS_CDN_DATA;
  window.EJS_Language = navigator.language || "es-ES";
  window.EJS_startButtonName = "- Jugar -";
  window.EJS_fullscreenOnLoaded = true;
  window.EJS_backgroundBlur = true;
  if (opts.cover) window.EJS_backgroundImage = opts.cover;
  window.EJS_VirtualGamepadSettings = EJS_N64_VIRTUAL_GAMEPAD;
  // Netplay apagado por defecto. Para activarlo, pon tu propio servidor:
  // window.EJS_netplayServer = "https://tu-servidor-netplay";
}

function EJS_load(dataPath) {
  return new Promise(function (resolve, reject) {
    var s = document.createElement("script");
    s.src = (dataPath || EJS_CDN_DATA) + "loader.js";
    s.onload = resolve;
    s.onerror = function () { reject(new Error("No se pudo cargar EmulatorJS loader.js")); };
    document.body.appendChild(s);
  });
}
