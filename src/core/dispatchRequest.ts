import { AxiosPromise, AxiosResponse } from '../types/index';
import { AxiosRequestConfig } from '../types'
import { buildUrl } from '../helpers/url'
import xhr from './xhr'
import { transformRequest, transformResponse } from '../helpers/data';
import { processHeaders } from '../helpers/headers';
export default function dispatchRequest(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  return xhr(config).then((res) => {
    return transformResponseData(res)
  })
}
function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  config.headers = transformHeader(config)
  config.data = transformRequestData(config)
}
function transformURL(config: AxiosRequestConfig): string {
  const {url, params} = config 
  return buildUrl(url!, params)
}
function transformRequestData (config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}
function transformHeader (config: AxiosRequestConfig): any {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}
function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = transformResponse(res.data)
  return res
}
