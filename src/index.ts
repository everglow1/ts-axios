import { AxiosRequestConfig } from './types';
import xhr from './xhr';
import { bulidURL, transformRequest, processHeaders} from './helpers/index'

function axios(config: AxiosRequestConfig) {
	// 在发送请求之前处理config配置
	processConfig(config)
	xhr(config)
}

// 对config参数进行处理
function processConfig(config: AxiosRequestConfig): void {
	config.url = transformURL(config)
	config.headers = transformHeaders(config)
	config.data = transformRequestData(config)
}

// 对url进行处理
function transformURL(config: AxiosRequestConfig): string {
	const { url, params } = config
	return bulidURL(url, params)
}
// 对请求的data处理
function transformRequestData(config: AxiosRequestConfig): any {
	// const { data } = config
	return transformRequest(config.data)
}
function transformHeaders(config: AxiosRequestConfig): any {
	const {headers = {}, data} = config
	return processHeaders(headers, data)
}

export default axios