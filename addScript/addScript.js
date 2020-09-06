function createScript(src, success, error, abort) { // 创建 script 元素
	var element = document.createElement('script'); // 创建元素
	element.src = src; // js 文件地址
	element.onload = success; // 加载成功回调函数
	element.onerror = error; // 加载失败回调函数
	element.onabort = abort; // 取消加载回调函数
	return element; // 返回创建好的 script 元素
}
function addScript(src, success, error, abort) { // 创建或获取 script 元素并添加到 head 中
	var element = (src instanceof HTMLElement && src.tagName == 'SCRIPT') ? src : createScript(src, success, error, abort); // 创建或获取元素
	document.head.appendChild(element); // 添加到 head
	return element; // 返回创建元素
}