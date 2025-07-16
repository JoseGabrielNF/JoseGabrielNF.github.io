# PowerShell script to download all required logos for the Seminario website
# Run this script from the public/assets/logos directory

Write-Host "Downloading logos for Seminario website..." -ForegroundColor Green

# Create array of logo downloads
$logos = @(
    @{
        Name = "UFMS Logo (Regular)"
        Url = "https://cdn.ufms.br/logos/ufms_logo_positivo_rgb.png"
        FileName = "ufms-logo.png"
    },
    @{
        Name = "UFMS Logo (White)"
        Url = "https://cdn.ufms.br/logos/ufms_logo_negativo_rgb.png"
        FileName = "ufms-logo-white.png"
    },
    @{
        Name = "APAE Logo"
        Url = "https://images.seeklogo.com/logo-png/23/1/apae-logo-png_seeklogo-233552.png"
        FileName = "apae-logo.png"
    },
    @{
        Name = "MCTI Logo"
        Url = "https://upload.wikimedia.org/wikipedia/commons/3/34/MCTIAssinatura.png"
        FileName = "mcti-logo.png"
    },
    @{
        Name = "AHIMSA Logo"
        Url = "https://yata-apix-e0d32791-6728-4310-9335-2981e976b4d3.s3-object.locaweb.com.br/7103e3c16f5d49e7b6387d7badf7f25e.png"
        FileName = "ahimsa-logo.png"
    }
)

# Download each logo
foreach ($logo in $logos) {
    Write-Host "Downloading $($logo.Name)..." -ForegroundColor Yellow

    try {
        Invoke-WebRequest -Uri $logo.Url -OutFile $logo.FileName -ErrorAction Stop
        Write-Host "Successfully downloaded $($logo.FileName)" -ForegroundColor Green
    }
    catch {
        Write-Host "Failed to download $($logo.Name): $($_.Exception.Message)" -ForegroundColor Red
        Write-Host "Please manually download from: $($logo.Url)" -ForegroundColor Yellow
    }
}

Write-Host "Download process completed!" -ForegroundColor Green
Write-Host "Please verify that all logo files are present and properly sized." -ForegroundColor Cyan

# List downloaded files
Write-Host "Files in current directory:" -ForegroundColor Cyan
Get-ChildItem -Filter "*.png" | ForEach-Object {
    $size = [math]::Round($_.Length / 1KB, 2)
    Write-Host "$($_.Name) - $size KB" -ForegroundColor White
}
