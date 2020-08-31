import axios from 'axios'
import {getToken} from './auth'
axios.defaults.baseURL = 'https://realty.test.yzchn.com/'
axios.defaults.timeout = 5000
// axios.create({
//     baseURL: 'https://realty.test.yzchn.com/',
//     timeout: 5000
// })
// 请求之前拦截
axios.interceptors.request.use(function( config: any ) {
    if(getToken()){
        config.headers['ticket'] = getToken()
    }
    return config
    
}, function (error) {
    return Promise.reject(error)
})

// 请求之后拦截
axios.interceptors.response.use(function( res ) {
    return res.data
    
}, function (error) {
    return Promise.reject(error)
})

export function get(url: string, params: any) {
    console.log(params)
    return axios.get(url, {
        ...params
    })
}