import './CSS/footer.css'
import './CSS/reset.css'
import TopBtn from "./topBtn";

export default function footer(){
    return(
        <>
            <TopBtn/>
            <footer>
                <div className="footerinner">
                    <div className="footerinner__top cf">
                        <h2><a href="index.do"><img src="/logo.png" alt="로고"/></a></h2>
                        <div className="top__links">
                            <div className="links__sns cf">
                                <a href="https://ko-kr.facebook.com/chungmuartscenter/" target="_blank">
                                    <i className="fab fa-facebook-f fa-2x"></i>
                                </a>
                                <a href="https://twitter.com/chungmuholic" target="_blank">
                                    <i className="fab fa-twitter fa-2x"></i>
                                </a>
                                <a href="/admin/" target="_blank">
                                    <i className="fab fa-instagram fa-2x"></i>
                                </a>
                                <a href="https://blog.naver.com/cmah_arthall" target="_blank">
                                    <i className="xi-naver xi-2x"></i>
                                </a>
                                <a href="https://www.youtube.com/channel/UC4UWAAwSsT4O3hcLjFL8kXQ" target="_blank">
                                    <i className="fab fa-youtube fa-2x"></i>
                                </a>
                            </div>
                            <ul className="links__list cf">
                                <li><a href="#">이용약관</a></li>
                                <li><a href="#">행정정보공개</a></li>
                                <li><a href="#">이메일수집거부</a></li>
                                <li><a href="#">개인정보취급방침</a></li>
                                <li><a href="#">사이트맵</a></li>
                                <li>
                                    <select name="siteBox" id="siteBox">
                                        <option value="">관련사이트 바로가기</option>
                                        <option value="http://www.beautifulmindcharity.org/">뷰티풀마인드</option>
                                        <option value="http://www.chimff.com/2019/">충무로 뮤지컬 영화제</option>
                                        <option value="https://www.e-junggulib.or.kr/SJGL/">서울중구 통합 전자도서관</option>
                                    </select>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footerinner__bottom cf">
                        <div className="bottom__left">
                            <address>
                                사업자등록번호 : 201-82-06405 <br/>
                                통신판매번호 : 제2008-서울중구-1218호 <br/>
                                주소 : 서울시 중구 퇴계로 387(흥인동 131)
                            </address>
                            <p>Copyrights all rights reserved &copy; Chungmu Arts Center and The Joeun IT Academy 2020
                                Team</p>
                        </div>
                        <div className="bottom__right">
                            <a href="tel:02-2230-6600">02.2230.6600</a>
                            <p>
                                상담시간 : 월~금 09:30~18:30 <br/>
                                점심시간 : 12:00~13:00 <br/>
                                주말 및 공휴일 휴무
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
        )
}