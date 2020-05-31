function createScript(src){
	var element = document.createElement('script');
	element.src = src;
	return element;
}

function addScript(src){
	var element = createScript(src);
	document.head.appendChild(element);
	return element;
}
