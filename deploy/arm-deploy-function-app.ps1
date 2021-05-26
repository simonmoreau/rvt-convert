# Get parameters
try {
    $scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
 }
 catch {
    $scriptDir = 'C:\Users\Simon\Github\Forge\rvt-convert\deploy'
 }

$settingsFile  = Join-Path -Path $scriptDir -ChildPath \parameters.json
$settings = Get-Content -Raw -Path $settingsFile | ConvertFrom-Json

$parametersFile  = Join-Path -Path $scriptDir -ChildPath \parameters.json
$parameters = Get-Content -Raw -Path $parametersFile | ConvertFrom-Json

# create a resource group
$appName = $parameters.parameters.appName.value
Write-Output $appName
$resourceGroup = $appName.ToLower()
Write-Output $resourceGroup
$location = "westeurope"

az group create -n $resourceGroup -l $location

# to check our deployement app
az deployment group what-if -g $resourceGroup --template-file deploy\azuredeploy.json --debug `
--parameters deploy\parameters.json

# to deploy our function app
az deployment group create -g $resourceGroup --template-file deploy\azuredeploy.json `
--parameters deploy\parameters.json

# to get the default host url of the static web app
$defaultHostUrl = az staticwebapp show -n $appName --query 'defaultHostname'

# to update the DNS reccord with the app url
cfcli edit rvt-convert $defaultHostUrl

# see what's in the resource group we just created
az resource list -g $resourceGroup -o table

$functionName = ($functionAppName + "Function")

# check the app settings were configured correctly
az functionapp config appsettings list `
    -n $functionName -g $resourceGroup -o table

# to clean up when we're done
az group delete -n $resourceGroup --no-wait -y
