# addScript
- `createScript: function`
  - 参数：`src` `success` `error` `abort`
  - 返回：带有 `src` 和四个事件的 `script` 元素
- `addScript: function`
  - 参数：`src` `success` `error` `abort`
  - 作用：将元素 `script` 元素插入 `head`
    - 如果传入的 `src` 是一个 `script` 元素，则忽略剩下三个参数
    - 否则创建带有 `src` 和四个事件的 `script` 元素
  - 返回：传入或创建元素

# canvasToURL
- 等待优化

# cookie
- 等待优化

# isArray
- `Object.prototype.isArray: method`
  - 判断对象是否是 `Array`
  - 返回：若调用的对象（`this`）是 `Array`，则 `true` ，否则 `false`

# json
- `Object.prototype.toJson: method`
  - 将对象（`this`）转为 JSON 字符串
  - 返回：转换后的结果（字符串）
- `String.prototype.parseJson: method`
  - 将 JSON 字符串（`this`）转为对象
  - 返回：转换后的结果（对象/数组等）

# queryString
- 等待优化

# responseHeader
- 等待优化

# timer
- `Timer: class/function`
  - 类或构造函数
  - `constructor: method`
    - 实例化方法
    - 参数：`time`
    - 返回：以参数 `time` 转换或实例化时刻的 `Date` 对象为 `this.base` 的实例
  - `reset: method`
    - 重设 `this.base` 的方法
    - 参数：`time`
    - 作用：以参数 `time` 转换或执行时刻的 `Date` 对象重设 `this.base`
    - 返回：重设后的 `this.base`
  - `timing: method`
    - 计时方法
    - 参数：`time`
    - 处理：以参数 `time` 转换或执行时刻的 `Date` 对象设置/重设 `this.time`
    - 作用：计算 `this.base` 和 `this.time` 的间隔，用 `Math` 实现始终大减小
    - 返回：`this.base` 和 `this.time` 的间隔，\[日,时,分,秒,毫秒,是否为倒计时\]