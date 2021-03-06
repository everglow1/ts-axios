
import { isDate, isPlianObject } from './util'

function encode(val: string): string {
	return encodeURIComponent(val)
		.replace(/%40/g, '@')
		.replace(/%3A/gi, ':')
		.replace(/%24/g, '$')
		.replace(/%2C/gi, ',')
		.replace(/%20/g, '+')
		.replace(/%5B/gi, '[')
		.replace(/%5D/gi, ']')
}

// url拼接参数
export function bulidURL(url: string, params?: any): string {
	if(!params) {
		return url
	}
	const parts: string[] = []

	Object.keys(params).forEach((key) => {
		const val = params[key]
		if(val === null || typeof val === 'undefined') {
			return
		}
		// 参数有可能为数组的情况
		let values = []
		if(Array.isArray(val)) {
			values = val
			key = key + '[]'
		} else {
			values = [key]
		}
		values.forEach((val) => {
			if(isDate(val)) {
				val = val.toISOString()
			} else if(isPlianObject(val)) {
				val = JSON.stringify(val)
			}
			parts.push(`${encode(key)}=${encode(val)}`)
			// parts.push(`${key} = ${val}`)
		})
	})

	let serializedParams = parts.join('&')
	if(serializedParams) {
		// 是否有hash,去除hash
		const markIndex = url.indexOf('#')
		if(markIndex !== -1) {
			url = url.slice(0, markIndex)
		}
		url += (url.indexOf('?') === -1? '?' : '&') +  serializedParams
	}
	return url
}