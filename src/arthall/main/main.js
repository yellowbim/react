import React, {Component} from "react";
import axios from "axios";
import './../common/CSS/main.css';
import './../common/CSS/reset.css';
import './../common/CSS/topBtn.css';
import {Link} from "react-router-dom";


export default class main extends  Component{

    constructor(props) {
        super(props);
        this.state = {
            bg1:false,
            bg2:false,
            bg3:false,
            bg4:false,
            bg5:false,
            playList:[]
        }
    }

    componentDidMount() {
        console.log('컴포넌트',Component);
        console.log('props',this.props);
        axios.post("http://localhost:8083/main/").then((res) => {
            console.log('공연 정보 조회 : ', res.data);
            this.setState({playList:res.data});     // 공연 정보 생성
        })
    }


    render(){

        // visual.js
        // 마우스 오버 이벤트
        const onMouseEnter = (e) =>{
            this.setState({
                [e.target.id]:!this.state[e.target.id]
            })
        }

        // 마우스 리브 이벤트
        // 이건 특정 방향으로 나갔을때만 적용됨 (e.target 값이 다름)
        const onMouseLeave = (e) =>{
            this.setState({bg1:false,bg2:false,bg3:false,bg4:false,bg5:false})
        }

        return(
            <div id="wrap">
                <a href="/index.do" id="gomain">본문바로가기</a>

                <section className="mainVisual">
                    <div className="visualView">
                        <div className={"bg1 " + (this.state.bg1 ? "show" : "")} style={{width:this.state.bg1 ? "100%":"20%", backgroundImage:"url(/main/img_main_visual1.jpg)"}}>
                        </div>

                        <div className={"bg2 " + (this.state.bg2 ? "show" : "")} style={{width:this.state.bg2 ? "100%":"20%", left:this.state.bg2 ? "0%":"20%", backgroundImage:"url(/main/img_main_visual2.jpg)"}}>
                        </div>

                        <div className={"bg3 " + (this.state.bg3 ? "show" : "")} style={{width:this.state.bg3 ? "100%":"20%", left:this.state.bg3 ? "0%":"40%", backgroundImage:"url(/main/img_main_visual3.jpg)"}}>
                        </div>

                        <div className={"bg4 " + (this.state.bg4 ? "show" : "")} style={{width:this.state.bg4 ? "100%":"20%", left:this.state.bg4 ? "0%":"60%", backgroundImage:"url(/main/img_main_visual4.jpg)"}}>
                        </div>

                        <div className={"bg5 " + (this.state.bg5 ? "show" : "")} style={{width:this.state.bg5 ? "100%":"20%", left:this.state.bg5 ? "0%":"80%", backgroundImage:"url(/main/img_main_visual5.jpg)"}}>
                        </div>
                    </div>
                    <div className="visual cf">
                        {
                            this.state.playList.map(
                                play =>
                                    <div className={play.bgNum} id={play.bgNum} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                                        <div className={"textView " + (this.state[play.bgNum] ? "on" : "")}  key={play.playNo}>
                                            <span>{play.subTitle}</span>
                                            <h2>{play.playName}</h2>
                                            <p>공연기간 : <span>{play.frDttm}~{play.toDttm}</span><br/>공연장소 : <span>{play.hallName}</span></p>
                                            <p className="cf"><a className="ticketingBtn" >예매하기</a><Link to="/reserv/ticketing">상세정보</Link></p>
                                        </div>
                                    </div>
                            )
                        }
                    </div>
                </section>


                <main id="main">
                    <section className="icons">
                        <div className="icons__wrap section__wrap">
                            <ul className="cf">
                                <li>
                                    <a href="/reserv/reserv.do">
                                        <i className="fas fa-ticket-alt fa-3x"></i>예매안내
                                    </a>
                                </li>
                                <li>
                                    <a href="#"><i className="fas fa-route fa-3x"></i>오시는길</a>
                                </li>
                                <li>
                                    <a href="#"><i className="fas fa-parking fa-3x"></i>주차안내</a>
                                </li>
                                <li>
                                    <a href="/board/faq/index.do"><i className="far fa-question-circle fa-3x"></i>자주하는 질문</a>
                                </li>
                                <li>
                                    <a href="/board/qna/index.do"><i className="far fa-comment-dots fa-3x"></i>1대1 문의</a>
                                </li>
                                <li>
                                    <a href="etiquette.html">
                                        <i className="fas fa-theater-masks fa-3x"></i>극장예절</a>
                                </li>
                                <li>
                                    <a href="#"><i className="fas fa-binoculars fa-3x"></i>오페라글래스 대여</a>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section className="showInfo">
                        <div className="showInfo__wrap section__wrap">
                            <h2 className="showInfo__tit">공연·전시 정보</h2>
                            <p>문화와 예술이 숨쉬는 행복한 문화공간 충무아트센터에서 진행되는 다양한 공연·전시</p>
                            <div className="showInfo__slide">
                                <div className="slide__btns btns">
                                    <button type="button" className="btns__leftBtn">
                                        <i className="fas fa-chevron-left fa-3x"></i>
                                    </button>
                                    <button type="button" className="btns__rightBtn">
                                        <i className="fas fa-chevron-right fa-3x"></i>
                                    </button>
                                </div>
                                <div className="slide__show">
                                    <ul className="show__showList cf">
                                        {/*<c:forEach var="play" items="${playList}" varStatus="vs" begin="1" end="11">*/}
                                        {/*    <li className="showList__cont slide${vs.count}">*/}
                                        {/*        <div className="cont__wrap">*/}
                                        {/*            <div className="wrap__inner">*/}
                                        {/*                <h3>${play.playName}</h3>*/}
                                        {/*                <p>${play.hallName}<br/>${play.startDate}~${play.endDate}<br/>매주 월요일*/}
                                        {/*                    공연 없음</p>*/}
                                        {/*                <a href="#" className="ticketingBtn"*/}
                                        {/*                   onClick="reservForm('${play.playName}', '${play.playType}')">예매하기</a>*/}
                                        {/*                <a href="#">상세정보</a>*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*    </li>*/}
                                        {/*</c:forEach>*/}
                                        <li className="showList__cont slide1">
                                            <div className="cont__wrap">
                                                <div className="wrap__inner">
                                                    <h3>공연이름</h3>
                                                    <p>홀이름<br/>공연 기간<br/>매주 월요일 공연 없음</p>
                                                    <a href="#" className="ticketingBtn">예매하기</a>
                                                    <a href="#">상세정보</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="showList__cont slide2">
                                            <div className="cont__wrap">
                                                <div className="wrap__inner">
                                                    <h3>공연이름</h3>
                                                    <p>홀이름<br/>공연 기간<br/>매주 월요일 공연 없음</p>
                                                    <a href="#" className="ticketingBtn">예매하기</a>
                                                    <a href="#">상세정보</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="showList__cont slide3">
                                            <div className="cont__wrap">
                                                <div className="wrap__inner">
                                                    <h3>공연이름</h3>
                                                    <p>홀이름<br/>공연 기간<br/>매주 월요일 공연 없음</p>
                                                    <a href="#" className="ticketingBtn" >예매하기</a>
                                                    <a href="#">상세정보</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="showList__cont slide4">
                                            <div className="cont__wrap">
                                                <div className="wrap__inner">
                                                    <h3>공연이름</h3>
                                                    <p>홀이름<br/>공연 기간<br/>매주 월요일 공연 없음</p>
                                                    <a href="#" className="ticketingBtn" >예매하기</a>
                                                    <a href="#">상세정보</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="showList__cont slide5">
                                            <div className="cont__wrap">
                                                <div className="wrap__inner">
                                                    <h3>공연이름</h3>
                                                    <p>홀이름<br/>공연 기간<br/>매주 월요일 공연 없음</p>
                                                    <a href="#" className="ticketingBtn">예매하기</a>
                                                    <a href="#">상세정보</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="showList__cont slide6">
                                            <div className="cont__wrap">
                                                <div className="wrap__inner">
                                                    <h3>공연이름</h3>
                                                    <p>홀이름<br/>공연 기간<br/>매주 월요일 공연 없음</p>
                                                    <a href="#" className="ticketingBtn">예매하기</a>
                                                    <a href="#">상세정보</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="showList__cont slide7">
                                            <div className="cont__wrap">
                                                <div className="wrap__inner">
                                                    <h3>공연이름</h3>
                                                    <p>홀이름<br/>공연 기간<br/>매주 월요일 공연 없음</p>
                                                    <a href="#" className="ticketingBtn">예매하기</a>
                                                    <a href="#">상세정보</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="showList__cont slide8">
                                            <div className="cont__wrap">
                                                <div className="wrap__inner">
                                                    <h3>공연이름</h3>
                                                    <p>홀이름<br/>공연 기간<br/>매주 월요일 공연 없음</p>
                                                    <a href="#" className="ticketingBtn">예매하기</a>
                                                    <a href="#">상세정보</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="showList__cont slide9">
                                            <div className="cont__wrap">
                                                <div className="wrap__inner">
                                                    <h3>공연이름</h3>
                                                    <p>홀이름<br/>공연 기간<br/>매주 월요일 공연 없음</p>
                                                    <a href="#" className="ticketingBtn">예매하기</a>
                                                    <a href="#">상세정보</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="showList__cont slide10">
                                            <div className="cont__wrap">
                                                <div className="wrap__inner">
                                                    <h3>공연이름</h3>
                                                    <p>홀이름<br/>공연 기간<br/>매주 월요일 공연 없음</p>
                                                    <a href="#" className="ticketingBtn">예매하기</a>
                                                    <a href="#">상세정보</a>
                                                </div>
                                            </div>
                                        </li>
                                    {/*  공연/전시 정보 이미지로 박아넣음. 추후에 정보 가져와서 보여줘야함  */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="news cf">
                        <div className="news__wrap section__wrap">
                            <article className="news__notice cf">
                                <div className="text">
                                    <span>Notice</span>
                                    <h2>최신소식</h2>
                                    <p>충무아트센터의 <br/> 최신소식을 알려드립니다.</p>
                                    <a href="/board/notice/index.do" className="notice__more"><i
                                        className="fas fa-plus fa-2x"></i></a>
                                </div>
                                <div className="cont">
                                    <table className="notice">
                                        <tbody>

                                        {/*<c:if test="${noticeVo.totalCount ==0}">*/}
                                        {/*    <tbody>*/}
                                        {/*    <tr align="center" bgcolor="white">*/}

                                        {/*        <td colSpan="100%">게시글이 없습니다.</td>*/}
                                        {/*    </tr>*/}
                                        {/*    </tbody>*/}
                                        {/*</c:if>*/}
                                        {/*<c:if test="${noticeVo.totalCount > 0}">*/}
                                        {/*    <c:forEach var="notice" items="${noticeList}" varStatus="status">*/}
                                        {/*        <c:if test="${status.count <= 5}">*/}
                                        {/*            <tr>*/}
                                        {/*                <td className="title">*/}

                                        {/*                    <a href="/board/notice/notice_view.do?no=${notice.no}&page=${noticeVo.page}">*/}
                                        {/*                        <c:out value="${notice.title}"/>*/}
                                        {/*                    </a>*/}
                                        {/*                </td>*/}
                                        {/*                <td>${notice.regDate}</td>*/}
                                        {/*            </tr>*/}
                                        {/*        </c:if>*/}
                                        {/*    </c:forEach>*/}
                                        {/*</c:if>*/}


                                        </tbody>
                                    </table>
                                </div>
                            </article>
                            <article className="news__event cf">
                                <div className="text">
                                    <span>Event</span>
                                    <h2>이벤트</h2>
                                    <p>충무아트센터에서 진행되는 이벤트를 알려드립니다.</p>
                                    <div className="event__btns">
                                        <a href="" className="left">
                                            <i className="fas fa-chevron-left fa-2x"></i>
                                        </a>
                                        <a href="" className="right">
                                            <i className="fas fa-chevron-right fa-2x"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="cont">
                                    <ul className="cf">
                                        <li><a href="#"><img src="/event/event-1.jpg" alt="이벤트1"/></a></li>
                                        <li><a href="#"><img src="/event/event-2.jpg" alt="이벤트2"/></a></li>
                                        <li><a href="#"><img src="/event/event-3.jpg" alt="이벤트3"/></a></li>
                                        <li><a href="#"><img src="/event/event-4.jpg" alt="이벤트4"/></a></li>
                                    </ul>
                                </div>
                            </article>
                        </div>
                    </section>
                    <a href="" className="topBtn">TOP</a>
                </main>



            </div>
        )
    }


}