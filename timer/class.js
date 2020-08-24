class Timer { // ES2015 class 版本
	constructor(time) { this.start = new Date(time == null ? Date.now() : time); } // 实例化对象时生成 this.start，若传参将参数转为 Date 对象，不传参为实例化时刻的 Date 对象
	reset(time) { return this.start = new Date(time == null ? Date.now() : time); } // 类似于重新实例化的方法，但可以直接修改 this.start，返回重设后的 Date 对象
	timing(time) { // 计时，返回 this.start 与 this.time 的时间间隔
		this.time = new Date(time == null ? Date.now() : time); // 生成 this.time
		var ms = this.time - this.start, sec = ms / 1000, min = sec / 60, hour = min / 60, day = hour / 24; // 处理时间间隔
		return [Math.floor(day), Math.floor(hour % 24), Math.floor(min % 60), Math.floor(sec % 60), ms % 1000]; // 返回时间间隔： [日,时,分,秒,毫秒]
	}
}