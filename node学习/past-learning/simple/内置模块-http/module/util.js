function renderStatus(url){
    let a =['/home','/list']
    return a.includes(url)?200:404
}
function renderHtml(url){
    switch(url){
        case '/home': 
        return`<html>
                 <b>home</b>
                </html>`
        default: return `<html>
                            <b>404 not found</b>
                        </html>`
        }
}
exports.renderHtml = renderHtml
exports.renderStatus = renderStatus