// setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {

    // main으로 가는 경우는 aws 서버 주소로 호출하게 해놨음
    // app.use(
    //     createProxyMiddleware('/main',{
    //         target: 'http://localhost:8083',
    //         changeOrigin: true,
    //     }))

    // main으로 가는 경우는 aws 서버 주소로 호출하게 해놨음
    app.use(
        createProxyMiddleware('/pagingTest',{
            target: 'http://localhost:8080',
            changeOrigin: true,
        }))

    // imgTest로 가면 http://localhost:8080/test 호출
    // app.use(
    //     createProxyMiddleware('/imgTest',{
    //         target: 'http://localhost:8080/test',
    //         changeOrigin: true,
    //     }))
        

    // dummy 포함 하위 route에 대해서는 https://openapi.naver.com/v1을 domain으로 하여 proxy설정
    app.use(
        createProxyMiddleware('/v1',{
            target: 'https://openapi.naver.com',
            changeOrigin: true,
        }))

    // main으로 가는 경우는 aws 서버 주소로 호출하게 해놨음
    app.use(
        createProxyMiddleware('/v2',{
            target: 'https://dapi.kakao.com',
            changeOrigin: true,
        }))

    
}