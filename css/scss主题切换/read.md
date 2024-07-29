scss vscode 转 css 配置
// setting.json
{
"files.associations": {
"\*.css": "scss"
},
"easysass.compileAfterSave": true,
"easysass.excludeRegex": "\_",
"easysass.formats": [
{
"format": "compact",
"extension": ".css"
},
{
"format": "compressed",
"extension": ".min.css"
}
]
}
