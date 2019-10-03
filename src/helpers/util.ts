// 工具方法 类型判断
const isString = Object.prototype.toString

// val is Date 类型保护
export function isDate(val: any): val is Date{
	return isString.call(val) === '[object Date]'
}

export function isObject(val: object): val is object {
	// return isString.call(val) === '[object object]'
	return val !== null && typeof val === 'object'
}
