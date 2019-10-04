/**
 * 对header进行处理
 */

import { isPlianObject } from './util'

function normalizeHeaderName(headers: any, normalizedName: string): void {
	if(!headers) {
		return
	}
	Object.keys(headers).forEach((name) => {
		if(name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
			headers[normalizedName] = headers[name]
			delete headers[name]
		}
	})
	
}

// 处理header的Content-Type
export function processHeaders(headers: any, data: any): any {
	normalizeHeaderName(headers, 'Content-Type')
	// 判断是否为普通对象,添加 content-type
	if(isPlianObject(data)) {
		if(headers && !headers['Content-Type']) {
			headers['Content-Type'] = 'application/json;charset=utf-8'
		}
	}
}