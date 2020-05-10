function getResponseHeaders() {
    var req = new XMLHttpRequest();
    req.open('GET', document.location, false);
    req.send();
    var headers = req.getAllResponseHeaders(),
        arr = headers.trim().split(/[\r\n]{1,2}/),
        headerMap = {};
    arr.forEach(function(line) {
        var parts = line.split(': '),
            header = parts.shift(),
            value = parts.join(': ');
        headerMap[header] = value;
    });
    return headerMap;
}
function getResponseHeader(key) {
    return getResponseHeaders()[key.toLowerCase()];
}
