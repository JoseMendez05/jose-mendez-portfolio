<#
Usage:
- Start your backend server (node server.js) in one terminal.
- Start your frontend (if desired) with `cd client; npm run dev` in another terminal.
- Then run this script from the repo root in PowerShell to save API responses to `docs/screenshots`:

    cd "d:\@@Luminate\Fall 2025\Web Dev\Assigment 2\MyPortfolio"
    .\scripts\save_api_responses.ps1

The script will create `docs/screenshots` and write JSON/text files you can open/take screenshots of.
#>

$outDir = Join-Path -Path (Get-Location) -ChildPath "docs\screenshots"
New-Item -ItemType Directory -Path $outDir -Force | Out-Null

Write-Host "Saving API responses to: $outDir"

$base = 'http://localhost:3000/api'
try {
    Write-Host "GET $base/contacts"
    Invoke-RestMethod -Uri "$base/contacts" -Method GET -ErrorAction Stop | ConvertTo-Json -Depth 5 | Out-File -FilePath (Join-Path $outDir 'contacts.json') -Force
} catch {
    Write-Host "Failed to call contacts: $($_.Exception.Message)"
}

try {
    Write-Host "GET $base/projects"
    Invoke-RestMethod -Uri "$base/projects" -Method GET -ErrorAction Stop | ConvertTo-Json -Depth 5 | Out-File -FilePath (Join-Path $outDir 'projects.json') -Force
} catch {
    Write-Host "Failed to call projects: $($_.Exception.Message)"
}

try {
    Write-Host "GET $base/qualifications"
    Invoke-RestMethod -Uri "$base/qualifications" -Method GET -ErrorAction Stop | ConvertTo-Json -Depth 5 | Out-File -FilePath (Join-Path $outDir 'qualifications.json') -Force
} catch {
    Write-Host "Failed to call qualifications: $($_.Exception.Message)"
}

try {
    Write-Host "GET $base/users"
    Invoke-RestMethod -Uri "$base/users" -Method GET -ErrorAction Stop | ConvertTo-Json -Depth 5 | Out-File -FilePath (Join-Path $outDir 'users.json') -Force
} catch {
    Write-Host "Failed to call users: $($_.Exception.Message)"
}

try {
    Write-Host "GET http://localhost:3000/"
    Invoke-RestMethod -Uri 'http://localhost:3000/' -Method GET -ErrorAction Stop | Out-File -FilePath (Join-Path $outDir 'backend_root.txt') -Force
} catch {
    Write-Host "Failed to call backend root: $($_.Exception.Message)"
}

try {
    Write-Host "GET frontend index (http://localhost:5173/jose-mendez-portfolio/)"
    # This will save the HTML returned by Vite (if running)
    Invoke-WebRequest -Uri 'http://localhost:5173/jose-mendez-portfolio/' -UseBasicParsing -ErrorAction Stop | Select-Object -ExpandProperty Content | Out-File -FilePath (Join-Path $outDir 'frontend_index.html') -Force
} catch {
    Write-Host "Failed to fetch frontend index: $($_.Exception.Message)"
}

Write-Host "Saved files (if calls succeeded):"
Get-ChildItem -Path $outDir | ForEach-Object { Write-Host " - $($_.Name)" }

Write-Host "You can now open the files in $outDir and take screenshots (or open the endpoints in browser/Postman)."
