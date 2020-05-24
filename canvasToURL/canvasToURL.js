function canvasToBlob(canvasElement, type, outputVariableName) {
    var types = ['webp', 'png', 'jpeg'],
        t = types.indexOf(type),
        url;
    if (t >= 0) {
        type = 'image/' + type;
    } else {
        type = 'image/webp';
    }
    canvasElement.toBlob(b = > {
        url = URL.createObjectURL(b);
        if (typeof outputVariableName !== 'string') {
            outputVariableName = 'BlobURL';
        }
        eval(outputVariableName + ' = "' + url + '";');
    }, type, 1);
}

function canvasToDataURL(canvasElement, type) {
    var types = ['webp', 'png', 'jpeg'],
        t = types.indexOf(type);
    if (t >= 0) {
        type = 'image/' + type;
    } else {
        type = 'image/webp';
    }
    return canvasElement.toDataURL(type, 1);
}

function download(url, fileName) {
    if (url == undefined || url === "") {
        return false;
    }
    if (fileName == undefined) {
        fileName = "";
    }
    var a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    return a;
}
