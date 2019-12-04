import { AxiosError } from './../../src/types/index';
import axios from '../../src/index';
axios({
  method: 'get',
  url: '/error/get',
  params: {
    a: 1,
    b: 2
  }
})
axios({
  method: 'get',
  url: '/error/errorUrl',
})
axios({
  method: 'get',
  url: '/error/timeout',
  timeout: 2000
}).then((res)=>{
  console.log(res)
}).catch((e:AxiosError)=>{
  console.log(e.message)
  console.log(e.config)
  console.log(e.code)
})