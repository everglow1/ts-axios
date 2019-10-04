// 字符串字面量类型
export type Method = 'get' | 'GET' | 'delete' | 'Delete' | 'head' | 'HEAD' | 'options' | 'OPTIONS' | 'post' | 'POST' | 'put' | 'PUT' | 'patch' | 'PATCH'

// 请求配置接口
export interface AxiosRequestConfig {
	url: string
	method?: Method
	data?: any   // post请求使用
	params?: any
	headers?: any
	responseType?: XMLHttpRequestResponseType
}

export interface AxiosResponse {
	data: any
  status: number
  statusText: string
  headers: any
  config: AxiosRequestConfig
  request: any
}

// 继承promise范型接口
export interface AxiosPromise extends Promise<AxiosResponse> {

}