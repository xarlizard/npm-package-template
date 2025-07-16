# PowerShell script for publishing to both NPM and GitHub Packages

param(
    [Parameter(Mandatory = $false)]
    [ValidateSet("patch", "minor", "major")]
    [string]$VersionType = "patch",
    
    [Parameter(Mandatory = $false)]
    [switch]$SkipTests,
    
    [Parameter(Mandatory = $false)]
    [switch]$DryRun
)

Write-Host "🚀 Starting $VersionType release..." -ForegroundColor Green

try {
    # Check if we're in the right directory
    if (!(Test-Path "package.json")) {
        throw "package.json not found. Please run this script from the project root."
    }

    # Pre-publish checks
    if (!$SkipTests) {
        Write-Host "🔍 Running pre-publish checks..." -ForegroundColor Yellow
        
        Write-Host "Linting..." -ForegroundColor Gray
        npm run lint
        if ($LASTEXITCODE -ne 0) { throw "Linting failed" }
        
        Write-Host "Type checking..." -ForegroundColor Gray
        npm run typecheck
        if ($LASTEXITCODE -ne 0) { throw "Type checking failed" }
        
        Write-Host "Running tests..." -ForegroundColor Gray
        npm run test
        if ($LASTEXITCODE -ne 0) { throw "Tests failed" }
    }

    Write-Host "Building package..." -ForegroundColor Gray
    npm run build
    if ($LASTEXITCODE -ne 0) { throw "Build failed" }

    if ($DryRun) {
        Write-Host "🧪 Dry run - would bump $VersionType version" -ForegroundColor Yellow
        npm version $VersionType --no-git-tag-version
        $packageJson = Get-Content "package.json" | ConvertFrom-Json
        $newVersion = $packageJson.version
        Write-Host "New version would be: $newVersion" -ForegroundColor Cyan
        
        # Restore original version
        git checkout package.json
        return
    }

    # Bump version
    Write-Host "📈 Bumping $VersionType version..." -ForegroundColor Yellow
    npm version $VersionType
    if ($LASTEXITCODE -ne 0) { throw "Version bump failed" }

    # Get the new version
    $packageJson = Get-Content "package.json" | ConvertFrom-Json
    $newVersion = $packageJson.version

    Write-Host "✅ Release $newVersion is ready!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Cyan
    Write-Host "1. Push the changes: git push && git push --tags" -ForegroundColor White
    Write-Host "2. Create a GitHub release to trigger automated publishing" -ForegroundColor White
    Write-Host "3. Or publish manually with: npm publish" -ForegroundColor White
    Write-Host ""
    Write-Host "To publish to GitHub Packages manually:" -ForegroundColor Cyan
    Write-Host "npm config set @xarlizard:registry https://npm.pkg.github.com" -ForegroundColor White
    Write-Host "npm config set //npm.pkg.github.com/:_authToken YOUR_GITHUB_TOKEN" -ForegroundColor White

}
catch {
    Write-Host "❌ Release failed: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}
