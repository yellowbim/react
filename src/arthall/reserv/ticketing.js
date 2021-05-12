import React from "react";
import ModalPortal from "../../components/modal/ModalPortalTest";
import styled from "styled-components";
import './../common/CSS/ticketing.css';

export default function Ticketing(){
    // 모달 css 설정 (css를 다로 빼지 않음 => 파일이 많아져서 관리하기 힘듦)
    const MyModal = styled.div`
        background: rgba(0, 0, 0, 0.25);
        position: fixed;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    `
    const ModalContent = styled.div`
        background: white;
        padding: 1rem;
        width: 400px;
        height: 505px;
    `
    const ModalClose = styled.button`
        float: right;
        `
    return(
        <>
            <ModalPortal>
                <MyModal>
                    <ModalContent className="content">
                        <div id="wrap">
                            <main id="main">
                                <section className="content__innerConts ticketBox">
                                    <div className="ticketBox__titArea cf">
                                        <h1><img src={require('./../../img/logo.png')} alt="충무아트센터 로고"/></h1>
                                        <article className="ticketBox__ticketBoxInner ticketInfo cf">
                                            <h2 className="ticketBoxInner__tit">예매하기</h2>
                                            <p>
                                                {/*<strong className="ticketInfo__showName">뮤지컬 &lt;${play.playName}&gt;</strong>*/}
                                                <span className="ticketInfo__showInfo">충무아트센터 대극장
                                            {/*<span id="period">${play.startDate}~${play.endDate}</span>*/}
                                        </span>
                                            </p>
                                        </article>
                                    </div>
                                    <article className="ticketBox__ticketBoxInner dateInfo">
                                        <h2 className="ticketBoxInner__tit">날짜선택</h2>
                                        <div id="calendarContainer">
                                            <div className="calendarContainer__calendars cf">
                                                <div className="calendars__prevContainer">
                                                    <table className="calendars__prevMonth">
                                                        <thead className="prevMonth__days">
                                                        <tr className="month">
                                                            <th colSpan="7"><span className="month__text">2020년 7월</span></th>
                                                        </tr>
                                                        <tr className="days">
                                                            <th className="sun">SUN</th>
                                                            <th>MON</th>
                                                            <th>TUE</th>
                                                            <th>WED</th>
                                                            <th>THU</th>
                                                            <th>FRI</th>
                                                            <th className="sat">SAT</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody className="prevCalBody calBody"></tbody>
                                                    </table>
                                                </div>
                                                <div className="calendars__nextContainer">
                                                    <table className="calendars__nextMonth">
                                                        <thead className="nextMonth__days">
                                                        <tr className="month">
                                                            <th colSpan="7"><span className="month__text">2020년 8월</span></th>
                                                        </tr>
                                                        <tr className="days">
                                                            <th className="sun">SUN</th>
                                                            <th>MON</th>
                                                            <th>TUE</th>
                                                            <th>WED</th>
                                                            <th>THU</th>
                                                            <th>FRI</th>
                                                            <th className="sat">SAT</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody className="nextCalBody calBody">

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="calBtn">
                                                <a href="#" className="calBtn__prev disable"><i className="fas fa-chevron-left fa-3x"></i></a>
                                                <a href="#" className="calBtn__next"><i className="fas fa-chevron-right fa-3x"></i></a>
                                            </div>
                                        </div>
                                    </article>
                                    <div className="ticketBox__choose cf">
                                        <article className="ticketBox__ticketBoxInner timeInfo">
                                            <h2 className="ticketBoxInner__tit">회차선택</h2>
                                            <ol className="timeInfo__timeTable">
                                                {/*<c:forEach var="play" items="${playList}">*/}
                                                {/*    <li className="timeTable__list">*/}
                                                {/*        <span className="list__Time">${play.time}</span>*/}
                                                {/*        <p>배우 : ${play.actor}</p>*/}
                                                {/*    </li>*/}
                                                {/*</c:forEach>*/}
                                            </ol>
                                        </article>
                                        <article className="ticketBox__ticketBoxInner classInfo">
                                            <h2 className="ticketBoxInner__tit">좌석등급선택</h2>
                                            <ul className="classInfo__classTable">
                                                <li className="classTable__classList vipClass cf">
                                                    <span className="classList__seatClass">VIP석</span>
                                                    <span className="classList__seatPrice">150,000원</span>
                                                    <input type="number" value="1" min="1" max="10" step="1" className="classList__seatNumber"/>
                                                </li>
                                                <li className="classTable__classList rClass cf">
                                                    <span className="classList__seatClass">R석</span>
                                                    <span className="classList__seatPrice">130,000원</span>
                                                    <input type="number" value="1" min="1" max="10" step="1" className="classList__seatNumber"/>
                                                </li>
                                                <li className="classTable__classList sClass cf">
                                                    <span className="classList__seatClass">S석</span>
                                                    <span className="classList__seatPrice">100,000원</span>
                                                    <input type="number" value="1" min="1" max="10" step="1" className="classList__seatNumber"/>
                                                </li>
                                                <li className="classTable__classList wheelClass cf">
                                                    <span className="classList__seatClass">휠체어석</span>
                                                    <span className="classList__seatPrice">60,000원</span>
                                                    <input type="number" value="1" min="1" max="10" step="1" className="classList__seatNumber"/>
                                                </li>
                                            </ul>
                                        </article>
                                        <article className="ticketBox__ticketBoxInner ticketInfo">
                                            <h2 className="ticketBoxInner__tit">나의 예매현황</h2>
                                            <form method="post" action="payment.do" name="ticket__form" id="ticket__form"
                                                  className="ticketInfo__form">
                                                <input type="hidden" name="playNo" value="${play.no}"/>
                                                    <input type="hidden" name="playName" value="${play.playName}"/>
                                                        <input type="hidden" name="seatType" value=""/>
                                                            <input type="hidden" name="seatType1" value=""/>
                                                                <input type="hidden" name="seatType2" value=""/>
                                                                    <input type="hidden" name="seatType3" value=""/>
                                                                        <fieldset>
                                                                            <legend>예매현황</legend>
                                                                            <ul className="form__resultBox">
                                                                                <li className="cf">
                                                                                    <label htmlFor="resultBox__date">날짜</label>
                                                                                    <input type="text" name="reservDate" id="resultBox__date" value="" required readOnly/>
                                                                                </li>
                                                                                <li className="cf">
                                                                                    <label htmlFor="resultBox__time">시간</label>
                                                                                    <input type="text" name="time" id="resultBox__time" value="" required readOnly/>
                                                                                </li>
                                                                                <li className="resultBox__classList cf" id="resultBox__classList">
                                                                                    <label htmlFor="resultBox__vipClass">VIP석</label>
                                                                                    <input type="text" id="resultBox__vipClass" className="resultBox__class" value="" readOnly/>
                                                                                </li>
                                                                                <li className="resultBox__classList cf">
                                                                                    <label htmlFor="">R석</label>
                                                                                    <input type="text" id="resultBox__rClass" className="resultBox__class" value="" readOnly/>
                                                                                </li>
                                                                                <li className="resultBox__classList cf">
                                                                                    <label htmlFor="">S석</label>
                                                                                    <input type="text" id="resultBox__sClass" className="resultBox__class" value="" readOnly/>
                                                                                </li>
                                                                                <li className="resultBox__classList cf">
                                                                                    <label htmlFor="">휠체어석</label>
                                                                                    <input type="text" id="resultBox__wheelClass" className="resultBox__class" value="" readOnly/>
                                                                                </li>
                                                                                <li className="cf">
                                                                                    <label htmlFor="resultBox__price">가격</label>
                                                                                    <input type="text" name="priceAll" id="resultBox__price" value="" required readOnly/>
                                                                                </li>
                                                                            </ul>
                                                                            <input type="button" className="form__submit" value="다음 단계로" onClick="check();"/>
                                                                        </fieldset>
                                            </form>
                                        </article>
                                    </div>
                                </section>
                            </main>
                        </div>
                    </ModalContent>
                </MyModal>
            </ModalPortal>
        </>
    )
}