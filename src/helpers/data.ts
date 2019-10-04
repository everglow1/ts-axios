// 处理data 数据体
import { isPlianObject } from './util'
// 
export function transformRequest(data: any): any {
	if(isPlianObject(data)) {
		console.log('data3', data)
		return JSON.stringify(data)
	}
	return data
}