import axios from '../../src/index';
axios({
  method: 'get',
  url: '/extend/get',
  params: {
    a: 1,
    b: 2
  }
})
axios.get('/extend/get')
axios.post('/extend/post')
