import React, {Component} from "react";
import './../common/CSS/mypage.css';

export default class MyPage extends Component{
    render() {
        return(
            <>
                <div id="wrap">
                    <a href="#" id="gomain">본문바로가기</a>

                    <div className="sub__tit">
                        <h2>내 정보 조회</h2>
                    </div>
                    <div className="sub__container cf">
                        <aside className="container__subClass">
                            <h3 className="subClass__tit"><i className="fas fa-id-card-alt"></i><br/>마이페이지</h3>
                            <nav className="subClass__list">
                                <ul>
                                    <li><a href="<%=request.getContextPath()%>/member/mypage.do">내 정보 조회</a></li>
                                    <li><a href="#">나의 예매내역</a></li>
                                    <li><a href="#">나의 문의내역</a></li>
                                </ul>
                            </nav>
                        </aside>
                        <main id="main">
                            <div className="main__content">
                                <section className="content__innerConts">
                                    <h3 className="innerConts__tit">내 정보 조회</h3>
                                    <p>충무가족의 소중한 정보를 한 눈에 보고 수정할 수 있습니다. <br/>
                                        원하시는 메뉴를 선택해 편리하게 이용해보세요.</p>
                                    <div className="innerConts__cont">
                                        <form method="post" action="/member/myInfoLoad.do" name="passwordCheck"
                                              id="passwordCheck">
                                            <fieldset>
                                                <legend>비밀번호 확인</legend>
                                                <p><i className="fas fa-lock fa-3x"></i>비밀번호를 한 번 더 입력해주세요.</p>
                                                <ul>
                                                    <li>
                                                        <label htmlFor="password">비밀번호 확인</label>
                                                        <input type="password" id="pw" name="pw" value="eodud123" required/>
                                                    </li>
                                                    <li>
                                                        <input type="submit" value="확인" onClick="return check();"/>
                                                        <input type="reset" value="취소"/>
                                                    </li>
                                                </ul>
                                                <span className="bar barTop"></span>
                                                <span className="bar barRight"></span>
                                                <span className="bar barLeft"></span>
                                                <span className="bar barBottom"></span>
                                            </fieldset>
                                        </form>
                                    </div>
                                </section>
                            </div>
                        </main>
                        <a href="" className="topBtn">TOP</a>
                    </div>
                </div>
            </>
        )
    }
}