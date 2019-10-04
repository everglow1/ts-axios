// 工具方法 类型判断
const isString = Object.prototype.toString

// val is Date 类型保护
export function isDate(val: any): val is Date {
	return isString.call(val) === '[object Date]'
}

export function isObject(val: object): val is Object {
	// return isString.call(val) === '[object object]'
	return val !== null && typeof val === 'object'
}

// 普通对象
export function isPlianObject(val: any): val is Object {
	return isString.call(val) === '[object Object]'
}