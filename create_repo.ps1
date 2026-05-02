$headers = @{
    'Authorization' = 'token YOUR_GITHUB_TOKEN'
    'Content-Type' = 'application/json'
}

$body = @{
    name = 'health'
    description = '健康顾问 - 基于国际权威机构标准的个性化健康建议网站'
    homepage = 'https://'
    public = $true
} | ConvertTo-Json

$response = Invoke-RestMethod -Uri 'https://api.github.com/user/repos' -Method Post -Headers $headers -Body $body
$response | ConvertTo-Json