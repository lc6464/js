// need jquery
function getQueryString(k) {
	var l0 = location.search;
	if (l0 === "" || l0 === "?" || k === null) {
		return undefined;
	} else if (k === undefined) {
		return l0.substring(1);
	}
	var k0 = [],
		v = [],
		item, l = l0.substring(1).split("&"),
		result = null;
	for (var i = 0; i < l.length; i++) {
		item = l[i].split("=");
		k0[i] = item[0].toLowerCase();
		v[i] = (item[1] == undefined) ? (null) : (item[1]);
	}
	k = encodeURIComponent(k).toLowerCase();
	result = v[$.inArray(k, k0)];
	return (result === null || result === undefined) ? (result) : (decodeURIComponent(result));
}

function addQueryString(k, v) {
	if (k == undefined) {
		return null;
	} else {
		k = encodeURIComponent(k);
		var q = getQueryString(),
			rt;
		if (v == undefined) {
			if (q === undefined) {
				rt = "?" + k;
			} else {
				rt = "&" + k;
			}
		} else {
			v = encodeURIComponent(v);
			if (q === undefined) {
				rt = "?" + k + "=" + v;
			} else {
				rt = "&" + k + "=" + v;
			}
		}
		location.search += rt;
		return rt;
	}
}

function delQueryString(k) {
	if (k === null || k === "") {
		return null;
	} else if (k === undefined) {
		location.search = "";
	}
	var v = getQueryString(k),
		s = getQueryString();
	if (v === undefined) {
		return v;
	} else if (v === null) {
		if (s.indexOf('&' + k) > -1) {
			location.search = s.replace('&' + k, "");
		} else {
			location.search = s.replace(k, "");
		}
	} else {
		if (s.indexOf('&' + k + "=" + encodeURIComponent(v)) > -1) {
			location.search = s.replace('&' + k + "=" + encodeURIComponent(v), "");
		} else {
			location.search = s.replace(k + "=" + encodeURIComponent(v), "");
		}
	}
}
