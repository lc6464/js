function createScript(src, success, error, abort) {
    var element = document.createElement('script');
    element.src = src;
    element.onload = success;
    element.onerror = error;
    element.onabort = abort;
    return element;
}

function addScript(src, success, error, abort) {
    var element = createScript(src, success, error, abort);
    document.head.appendChild(element);
    return element;
}
