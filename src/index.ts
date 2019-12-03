import { AxiosRequestConfig } from './types'
import { buildUrl } from './helpers/url'
import xhr from './xhr'
function axios(config: AxiosRequestConfig): void {
  console.log(config);
  processConfig(config)
  xhr(config)
}
function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
}
function transformURL(config: AxiosRequestConfig): string {
  const {url, params} = config 
  return buildUrl(url, params)
}
export default axios