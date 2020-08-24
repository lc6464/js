Object.prototype.toJson = function () {
	return JSON.stringify(this);
};
String.prototype.parseJson = function () {
	return JSON.parse(this);
};