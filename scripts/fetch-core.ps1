#Requires -Version 5.1
# Descarga el núcleo MIT N64Wasm (nbarkhina) a ./core/
$ErrorActionPreference = "Stop"
$base = "https://raw.githubusercontent.com/nbarkhina/N64Wasm/master/dist"
$files = @("n64wasm.js","n64wasm.wasm","assets.zip","input_controller.js","script.js","settings.js","index.html")
$outDir = Join-Path $PSScriptRoot "..\\core"
New-Item -ItemType Directory -Path $outDir -Force | Out-Null
foreach ($f in $files) {
  $url = "$base/$f"
  $dst = Join-Path $outDir $f
  Write-Host "Descargando $f ..."
  Invoke-WebRequest -Uri $url -OutFile $dst
}
Write-Host "OK core en $outDir"
Get-ChildItem $outDir | Format-Table Name, Length
