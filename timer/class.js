class Timer { // class 版本
	constructor(time) { this.base = new Date(time ?? Date.now()); } // 实例化对象时生成 this.base，若传参将参数转为 Date 对象，不传参为实例化时刻的 Date 对象
	reset(time) { return this.base = new Date(time ?? Date.now()); } // 类似于重新实例化的方法，但可以直接修改 this.base，返回重设后的 Date 对象
	timing(time) { // 计时，返回 this.base 与 this.time 的时间间隔
		this.time = new Date(time ?? Date.now()); // 生成 this.time
		const isCountdown = this.time < this.base,
			ms = isCountdown ? this.base - this.time : this.time - this.base, sec = ms / 1000, min = sec / 60, hour = min / 60, day = hour / 24; // 处理时间间隔
		return {
			days: Math.floor(day),
			hours: Math.floor(hour % 24),
			minutes: Math.floor(min % 60),
			seconds: Math.floor(sec % 60),
			milliseconds: ms % 1000,
			isCountdown
		};
	}
}