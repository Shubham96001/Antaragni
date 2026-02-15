$textExtensions = @("*.js", "*.jsx", "*.ts", "*.tsx", "*.css", "*.scss", "*.json", "*.html", "*.md", "*.mjs")
$imageExtensions = @(".png", ".jpg", ".jpeg", ".svg", ".webp", ".gif", ".ico", ".avif")

Write-Host "Gathering text files to search in..."
# Get files from src and public. Also include root files.
$searchPaths = @("src", "public")
$filesToSearch = Get-ChildItem -Path $searchPaths -Recurse -Include $textExtensions -File -ErrorAction SilentlyContinue
$rootFiles = Get-ChildItem -Path . -MaxDepth 0 -Include $textExtensions -File -ErrorAction SilentlyContinue
$allTextFiles = $filesToSearch + $rootFiles

Write-Host "Found $($allTextFiles.Count) text files."

Write-Host "Gathering image files..."
$images = Get-ChildItem -Path "src", "public" -Recurse | Where-Object { $imageExtensions -contains $_.Extension }
Write-Host "Found $($images.Count) images."

$unused = @()

foreach ($img in $images) {
    $name = $img.Name
    # Write-Host "Checking $name..."
    
    # Search for the exact filename
    # We use SimpleMatch to avoid regex issues, but we successfully escaped it before.
    # Note: Select-String on a file object reads the file.
    
    $hit = $allTextFiles | Select-String -Pattern $name -SimpleMatch -List | Select-Object -First 1
    
    if (-not $hit) {
        # Try searching for URL encoded version if it has spaces?
        # e.g. "foo bar.png" -> "foo%20bar.png"
        if ($name -match " ") {
            $encoded = $name -replace " ", "%20"
            $hit = $allTextFiles | Select-String -Pattern $encoded -SimpleMatch -List | Select-Object -First 1
        }
    }

    if (-not $hit) {
        $unused += $img.FullName
    }
}

$unused | Out-File "unused_images_report.txt" -Encoding UTF8
Write-Host "Found $($unused.Count) unused images."
Write-Host "Done."
