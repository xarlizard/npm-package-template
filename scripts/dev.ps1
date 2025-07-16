# PowerShell script for local development and testing

param(
    [Parameter(Mandatory = $false)]
    [ValidateSet("test", "build", "lint", "typecheck", "all")]
    [string]$Task = "all"
)

Write-Host "🔧 Running development tasks..." -ForegroundColor Green

function Run-Task {
    param([string]$TaskName, [string]$Command)
    
    Write-Host "Running $TaskName..." -ForegroundColor Yellow
    Invoke-Expression $Command
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ $TaskName failed" -ForegroundColor Red
        exit 1
    }
    Write-Host "✅ $TaskName completed" -ForegroundColor Green
}

try {
    switch ($Task) {
        "test" { Run-Task "tests" "npm run test" }
        "build" { Run-Task "build" "npm run build" }
        "lint" { Run-Task "linting" "npm run lint" }
        "typecheck" { Run-Task "type checking" "npm run typecheck" }
        "all" {
            Run-Task "linting" "npm run lint"
            Run-Task "type checking" "npm run typecheck"
            Run-Task "tests" "npm run test"
            Run-Task "build" "npm run build"
        }
    }
    
    Write-Host "🎉 All tasks completed successfully!" -ForegroundColor Green
    
}
catch {
    Write-Host "❌ Task failed: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}
