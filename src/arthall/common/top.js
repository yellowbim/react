import React, {Component} from 'react';
import './CSS/reset.css';
import './CSS/header.css';
import {Link} from "react-router-dom"; // 페이지 이동을 위한 Link, Link는 html에서 a 태그로 보여짐
import img from '../../img/logo/logo.png';
import LoginSession from './LoginSession';


export default class top extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            logged: false,
            onLogin: this.onLogin,
            onLogout: this.onLogout,
        })
    }

    onLogin = () => {
        this.setState({
            logged:true
        })
        console.log(window.sessionStorage.getItem("mbrId"));
    }

    onLogout = () => {
        // 첫 랜더링에는 뜨면 안됨
        if(window.confirm("로그아웃하시겠습니까?")){
            this.setState({
                logged:false
            })
            window.sessionStorage.clear();
        }
    }

    componentDidMount() {
        const mbrId = window.sessionStorage.getItem("mbrId");
        if (this.props.history != undefined){   // 처음 들어오면 실행 안되게 막음
            if (mbrId){
                this.onLogin();
            } else {
                this.onLogout();
            }
        }
    }
ㅡ먀
    render(){
        const { logged, onLogout } = this.state;

        return(
            <header>
                <div className="header-inner cf">
                    <h1><Link to={"/"}>
                        <span className="hidden">logo</span>
                        <img src="/logo/logo.png" alt="logo"/>
                    </Link>
                    </h1>
                    <div className="mobile">
                        <a href="javascript:;" className="mobile__openBtn">
                            <i className="fas fa-bars fa-3x"></i>
                        </a>
                        <a href="javascript:;" className="mobile__closeBtn">
                            <i className="fas fa-times fa-3x"></i>
                        </a>
                        <div className="right_nav">
                            <ul className="tnb cf">
                                <LoginSession logged={logged} onLogout={onLogout}/>
                            </ul>
                            <nav className="gnb">
                                <ul className="cf">
                                    <li className="hover">
                                        <a href="#"><span>충무아트센터 소개</span></a>
                                        <ul>
                                            <li><a href="#">기관 및 재단소개</a></li>
                                            <li><a href="#">좌석배치도</a></li>
                                            <li><a href="#">층별안내</a></li>
                                            <li><a href="#">오시는길</a></li>
                                            <li><a href="#">편의시설</a></li>
                                            <li><a href="#">주차시설</a></li>
                                        </ul>
                                    </li>
                                    <li className="hover">
                                        <a href="/play/performList"><span>공연·전시·행사</span></a>
                                        <ul>
                                            <li><a href="#">캘린더</a></li>
                                            <li><a href="/play/performList.do">공연정보</a></li>
                                            <li><a href="exhi_info.html">전시정보</a></li>
                                            <li><a href="event_info.html">행사정보</a></li>
                                        </ul>
                                    </li>
                                    <li className="hover">
                                        <a href="/board/notice/index.do"><span>뉴스·소식</span></a>
                                        <ul>
                                            <li><a href="/board/notice/index.do">공지사항</a></li>
                                            <li><a href="/board/news/index.do">뉴스/이슈</a></li>
                                        </ul>
                                    </li>
                                    <li className="hover">
                                        <a href="#"><span>대관안내</span></a>
                                        <ul>
                                            <li><a href="#">대관시설</a></li>
                                            <li><a href="/rentalGuidance.html">대관절차</a></li>
                                            <li><a href="/rentalApply.html">대관신청</a></li>
                                        </ul>
                                    </li>
                                    <li className="hover">
                                        <a href="/board/faq/index.do"><span>고객센터</span></a>
                                        <ul>
                                            <li><a href="/board/faq/index.do">자주하는 질문</a></li>
                                            <li><a href="/board/qna/index.do">1:1 문의</a></li>
                                            <li><a href="/etiquette.html">관람예절</a></li>
                                            <li><a href="/benefits.html">회원혜택</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        {/*<form className="search" action="action_page.php">*/}
                        {/*    <input type="search" name="search" className="t_box" placeholder="검색어를 입력해주세요">*/}
                        {/*        <button type="submit" className="submit"><i className="fa fa-search"></i></button>*/}
                        {/*    </input>*/}
                        {/*</form>*/}
                    </div>
                </div>
            </header>
        )
    }
}
