var response, responseHeaders;

function reGetResponseHeaders() {
    var req = new XMLHttpRequest();
    req.open('GET', location, false);
    req.send();
    response = req;
    var headers = req.getAllResponseHeaders(),
        arr = headers.trim().split(/[\r\n]{1,2}/),
        headerMap = {};
    arr.forEach(function(line) {
        var parts = line.split(': '),
            header = parts.shift(),
            value = parts.join(': ');
        headerMap[header] = value;
    });
    responseHeaders = headerMap;
    return headerMap;
}

reGetResponseHeaders();

function getResponseHeaders() {
    return responseHeaders;
}

function getResponseHeader(key) {
    return response.getResponseHeader(key);
}
