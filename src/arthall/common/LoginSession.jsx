import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class LoginSession extends Component{
    render(){
        console.log("로그인 페이지 정보 있나여", window.sessionStorage.getItem("mbrId"));
        if (window.sessionStorage.getItem("mbrId") == null){
            return <><li><Link to="/index/member/loginForm">로그인</Link></li><li><Link to="/index/member/joinForm">회원가입</Link></li></>
        } else {
            return <><li><a href="#" onClick={this.props.onLogout}>로그아웃</a></li><li><a href="/member/mypage">마이페이지</a></li></>
        }
    }
}