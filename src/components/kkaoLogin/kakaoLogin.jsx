/*global kakao*/
import {Component} from "react";
// 카카오 로그인
import KakaoLogin from 'react-kakao-login';
// 구글 로그인
import GoogleLogin from "react-google-login";
// 페이스북 로그인
import FacebookLogin from 'react-facebook-login';


// config.js에 설정해놓은 api 키를 가져옴
import * as config from './../../config';
// 스타일 컴포넌트
import styled from 'styled-components';

export default class KaKaoLogin extends Component{
    constructor(props) {
        super(props);
        this.state ={
            id:'',
            name:'',
            provider:''
        }

    }

    // Google Login
    responseGoogle = (response) => {
        console.log('로그인 응답',response)
        this.props.history.push('/loginSuccess')
    }

    // Kakao Login
    responseKakao = (res) => {
        console.log('프로필 이름 ',res.profile.properties.nickname);
        console.log('프로필 아이디 ',res.profile.id);
        this.setState({
            id: res.profile.id,
            name: res.profile.properties.nickname,
            provider: 'kakao'
        })
        this.props.history.push('/loginSuccess')
    }

    responseFacebook = (res) => {
        console.log('페이스북 res ', res)
    }

    // Login Fail
    responseFail = (err) => {
        console.error(err);
    }

    render(){

        let fbContent;

        fbContent = (
            <FacebookLogin
                appId={config.FACEBOOK_LOGIN_JS_KEY}
                autoLoad={false}
                fields="name, email, picture"
                calback={this.responseFacebook}
                render={renderProps => (
                    <div onClick={renderProps.onClick}>facebook</div>
            )}
            />

        )


        // 카카오 키
        const KaKaoKey = config.KAKAO_LOGIN_JS_KEY;
        const GoogleKey = config.GOOGLE_LOGIN_JS_KEY;
        const FacebookKey = config.FACEBOOK_LOGIN_JS_KEY;

        return(
            <>
                <div>카카오 로그인</div>
                <KakaoButton
                    jsKey={KaKaoKey}
                    buttonText="KakaoLogin"
                    onSuccess={this.responseKakao}
                    onFailure={this.responseFail}
                    getProfile="true"
                />

                <div>구글 로그인</div>
                <GoogleLogin
                    clientId={GoogleKey}
                    buttonText="GoogleLogin"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseFail}
                    cookiePolicy={'single_host_origin'}
                />

                <div>페이스북 로그인</div>
                {fbContent}
            </>
        )
    }
}


const KakaoButton = styled(KakaoLogin)`
    padding: 0;
    width: 150px;
    height: 20px;
    line-height: 44px;
    color: #783c00;
    background-color: #FFEB00;
    border: 1px solid transparent;
    border-radius: 3px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
`

const GoogleButton = styled(GoogleLogin)`
    background-color: rgb(255, 255, 255);
    display: inline-flex;
    align-items: center;
    color: rgba(0, 0, 0, 0.54);
    box-shadow: rgb(0 0 0 / 24%) 0px 2px 2px 0px, rgb(0 0 0 / 24%) 0px 0px 1px 0px;
    padding: 0px;
    border: 1px solid transparent;
    border-radius: 3px;
    border: 1px solid transparent;
    font-size: 16px;
    font-weight: bold;
    font-family: Roboto, sans-serif;
`

