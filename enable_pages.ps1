$headers = @{
    'Authorization' = 'token YOUR_GITHUB_TOKEN'
    'Content-Type' = 'application/json'
    'Accept' = 'application/vnd.github+json'
}

$body = @{
    source = @{
        branch = 'main'
        path = '/'
    }
} | ConvertTo-Json

try {
    $response = Invoke-RestMethod -Uri 'https://api.github.com/repos/ablcy/health/pages' -Method Post -Headers $headers -Body $body
    $response | ConvertTo-Json
    Write-Host "GitHub Pages enabled successfully"
} catch {
    Write-Host "Error enabling GitHub Pages: $_"
    Write-Host "Response: $($_.Exception.Response)"
}