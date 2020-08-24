Object.prototype.toJson = function () { // 将 Object 或 Array 等转为 JSON 字符串
	return JSON.stringify(this);
};
String.prototype.parseJson = function () { // 将 JSON 字符串转为 Object 或 Array 等
	return JSON.parse(this);
};