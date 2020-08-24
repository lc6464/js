Object.prototype.isArray = function () { // 判断对象是否是 Array
	if (typeof this !== 'object' || this === null) return false; // 如果不是对象（如 undefined）或者是 null 则直接返回 false
	if (typeof Array.isArray === 'function') return Array.isArray(this); // 如果支持原生 Array.isArray 函数
	return Object.prototype.toString.call(this) === '[object Array]'; // 如果不支持 Array.isArray 函数
};