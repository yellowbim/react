import React, {Component} from "react";
import axios from 'axios';
import './../common/CSS/login.css';
import './../common/CSS/reset.css';


export default class login extends Component{
    constructor(props) {
        super(props);

        this.state = {
            mbrId:'',
            mbrPwd:'',
            mbrInfo:''
        }

        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.handleValueChange = this.handleValueChange.bind(this)
        this.memberChk = this.memberChk.bind(this)

    }

    handleFormSubmit(e){            // 페이지 새로고침이 아님

        // 페이지 새로고침 방지
        e.preventDefault()

        this.memberChk()
            .then((response) => {
                console.log('로그인 결과값',response.data);
                if (response.data.code === '1111'){
                    alert('아이디와 비밀번호를 확인해주세요');
                } else {
                    const qs = require("qs");
                    window.sessionStorage.setItem("mbrId",this.state.mbrId);         // session 에 mbrinfo 저장, 일회성
                    document.location.href = "/index";
                }
            })
    }

    handleValueChange(e) {
        console.log('값 변경 이벤트',e.target);
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    memberChk(){
        const url = "http://localhost:8083/mbr/login"
        const formData = new FormData();
        formData.append('mbrId',this.state.mbrId)
        formData.append('mbrPwd',this.state.mbrPwd)
        const config = {
            headers: {
                'content-type':'multipart/form-data'
            }
        }
        return axios.post(url, formData, config)


    }



    login(){
        let mbrId = this.state.mbrId
            , mbrPwd = this.state.mbrPwd;
        // if (mbrId && mbrPwd) {
        //     this.props.dispatch(login(mbrId,mbrPwd));           //dispatch?
        // } else {
        //     alert('아디 비번을 확인하세요');
        // }
    }


    render(){
        const http = require("http");
        const cookie = require('cookie');

        return(
            <div id="wrap">
                <a href="/index.do" id="gomain">본문바로가기</a>
                <div className="sub__tit">
                    <h2>로그인 &#183; 회원가입</h2>
                </div>
                <div className="sub__container cf">
                    <main id="main">
                        <div className="main__content">
                            <section className="content__innerConts">
                                <h3 className="innerConts__tit">충무아트센터<br/> 멤버십 로그인</h3>
                                <p>로그인으로 충무아트센터의 멤버십혜택을 이용하실 수 있습니다.</p>
                                <div className="innerConts__cont">
                                    <div className="cont__login">
                                        <form name="loginForm" onSubmit={this.handleFormSubmit}>
                                            <fieldset>
                                                <legend>로그인</legend>
                                                <div className="form__loginInfo">
                                                    <ul className="loginInfo__inputs">
                                                        <li className="cf">
                                                            <label htmlFor="id">
                                                                <span className="hidden">이름</span>
                                                                <i className="fas fa-user"></i>
                                                            </label>
                                                            <input type="text" id="mbrId" name="mbrId" value={this.state.mbrId} onChange={this.handleValueChange} placeholder="아이디 / ID"/>
                                                        </li>
                                                        <li className="cf">
                                                            <label htmlFor="pw">
                                                                <i className="fas fa-unlock"></i>
                                                            </label>
                                                            <input type="password" id="mbrPwd" name="mbrPwd" value={this.state.mbrPwd} onChange={this.handleValueChange} placeholder="비밀번호 / Password"/>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <p className="form__findBtns">
                                                    <a href="/member/findIDForm.do">아이디 찾기</a>/
                                                    <a href="/member/findPasswordForm.do">비밀번호
                                                        찾기</a>
                                                </p>

                                                <button type="submit" className="form__submit">로그인</button>
                                                <a href="/member/joinForm" className="form__joinBtn">회원가입</a>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </main>
                    <a className="topBtn">TOP</a>
                </div>
            </div>
        )
    }
}