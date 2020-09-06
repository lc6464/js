if (!Date.now) { Date.now = function () { return +new Date; }; } // ECMA-262 第五版标准中的 Date.now polyfill
function Timer(time) { this.base = new Date(time == null ? Date.now() : time); } // 构造函数版本，相关注释请见 class 版本
Timer.prototype.reset = function (time) { return this.base = new Date(time == null ? Date.now() : time); };
Timer.prototype.timing = function (time) {
	this.time = new Date(time == null ? Date.now() : time);
	var ms = Math.max(this.time, this.base) - Math.min(this.time, this.base), sec = ms / 1000, min = sec / 60, hour = min / 60, day = hour / 24;
	return [Math.floor(day), Math.floor(hour % 24), Math.floor(min % 60), Math.floor(sec % 60), ms % 1000];
};