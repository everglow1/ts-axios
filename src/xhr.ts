import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from './types';

export default function xhr(config: AxiosRequestConfig): AxiosPromise {

	return  new Promise((resolve, reject) => {
		const { data = null, url, method = 'get', headers, responseType } = config;
		const request = new XMLHttpRequest()

		if(responseType) {
			request.responseType = responseType
		}
	
		request.open(method.toUpperCase(), url, true)
	
		request.onreadystatechange = function handleLoad() {
			if(request.readyState !== 4) {
				return
			}
			const responseHeader = request.getAllResponseHeaders()
			const responseData = responseType !== 'text'? request.response : request.responseText
			console.log('data5', request)
			const response: AxiosResponse = {
				data: responseData,
				status: request.status,
				statusText: request.statusText,
				headers: responseHeader,
				config,
				request
			}
			resolve(response)
		}
		Object.keys(headers).forEach((name) => {
			if(data === null && name.toLowerCase() === 'content-type') {
				delete headers[name]
			} else {
				request.setRequestHeader(name, headers[name])
			}
		})
		console.log('data1', data)
		request.send(data)
	})

	
	
}
