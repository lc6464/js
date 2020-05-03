function isFn(f) {
    return typeof f === "function"
}

function isArray(o) {
    if (typeof o !== "object" || o === null) {
        return false;
    }
    if (isFn(Array.isArray)) {
        return Array.isArray(o);
    } else {
        return Object.prototype.toString.call(o) === "[object Array]";
    }
}

Array.append = function(a, v) {
    if (!isArray(a)) {
        return a;
    }
    a[a.length] = v;
    return a;
}
