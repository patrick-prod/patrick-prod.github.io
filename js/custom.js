//http://image.innoweb.cn/2020-01-31-favicon.ico
//<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
window.onload = function() {
    var link = document.createElement("link")
    link.rel = "shortcut icon"
    link.href = "https://patrick-prod.github.io/favicon.ico" 
    link.type = "image/x-icon"
    var head = document.getElementsByTagName("head")[0]
    head.appendChild(link)
}