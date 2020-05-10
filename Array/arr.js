function isFn(fun) {
	return typeof fun === "function"
}

function isArray(obj) {
	if (typeof obj !== "object" || obj === null) {
		return false;
	}
	if (isFn(Array.isArray)) {
		return Array.isArray(obj);
	} else {
		return Object.prototype.toString.call(obj) === "[object Array]";
	}
}

Array.append = function(arr, value) {
	if (!isArray(arr)) {
		return arr;
	}
	arr[arr.length] = value;
	return arr;
}
