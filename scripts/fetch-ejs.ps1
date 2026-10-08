#Requires -Version 5.1
# Descarga EmulatorJS estable para self-host en ./ejs-data/ (opcional; por defecto ejs.html usa CDN)
$ErrorActionPreference = "Stop"
$ver = "4.2.3"
$url = "https://cdn.jsdelivr.net/npm/@emulatorjs/emulatorjs@$ver/data.7z"
$outDir = Join-Path $PSScriptRoot "..\ejs-data"
New-Item -ItemType Directory -Path $outDir -Force | Out-Null
$tmp = Join-Path ([IO.Path]::GetTempPath()) "ejs-data.7z"
Write-Host "Descargando $url ..."
Invoke-WebRequest -Uri $url -OutFile $tmp
Write-Host "Descomprime $tmp en $outDir con 7-Zip (no incluido): 7z x $tmp -o$outDir"
Write-Host "Luego usa EJS_pathtodata='ejs-data/' en config/ejs-config.js"
