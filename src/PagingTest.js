import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import KaKaoLogin from "./components/kkaoLogin/kakaoLogin";
import LoginSuccess from './components/kkaoLogin/loginSuccess';
import SpringExcelUpload from './components/excelUpload/springExcelUpload';
import FunctionKaKaoMap from './components/kakaoMapApi/kakaoMapApi'
import Book from './components/bookapi/book';
import krmovie from "./components/movie/krmovie";

export default function PagingTest() {
    return (
        <>
            {/* 한국영화데이터베이스 api */}
            {/*
                import MovieApi from "./components/movie/movieApi";
            */}
            <div><h1>================== 한국 영화 데이터베이스 api ==================</h1></div>
            <krmovie/>

            {/* 네이버 도서 검색 api */}
            {/*
                import Book from './components/bookapi/book';
            */}
            <br/><br/><br/><br/>
            <div><h1>================== 네이버 검색 (도서) api 테스트 ==================</h1></div>
            <Book/>


            {/* 결제 api */}
            {/*
                import PayTest from "./components/pay/payTest";
            */}
            {/*<PayTest/>*/}


            {/* 카카오, 구글, 페북 로그인 */}
            {/*
                import KaKaoLogin from "./components/kkaoLogin/kakaoLogin";
                import LoginSuccess from './components/kkaoLogin/loginSuccess';
            */}
            <br/><br/><br/><br/>
            <div><h1>================== 카카오, 구글 로그인 (페북 안됨) ==================</h1></div>
            <Router>
                <Route exact path="/pagingTest" component={KaKaoLogin}/>
                <Route exact path="/pagingTest/loginSuccess" component={LoginSuccess}/>
            </Router>

            {/* 엑셀 다운로드 */}
            {/*
                import SpringExcelUpload from './components/excelUpload/springExcelUpload';
            */}
            <br/><br/><br/><br/>
            <div><h1>================== 엑셀 다운로드/ 업로드 ==================</h1></div>
            <SpringExcelUpload/>

            {/* 페이지 크기 구하기 */}
            {/*
                import PageSize from "./components/topPage/pageSize";
            */}
            {/*<PageSize/>*/}

            {/* 이미지, 동영상 업로드 / 엑셀 다운로드 */}
            
            <br/><br/><br/><br/>

            {/* 카카오 지도 테스트 */}
            {/*
                import FunctionKaKaoMap from './components/kakaoMapApi/kakaoMapApi'
                import KaKaoMapApi from "./components/kakaoMapApi/kakaoMapApi";

            */}
            {/*<br/><br/><br/><br/>*/}
            <div><h1>================== 카카오 지도 테스트 ==================</h1></div>
            <FunctionKaKaoMap/>


            <br/><br/><br/><br/>
            <div> arthall 테스트는
            <Link to="/index" style={{backgroundColor:"red"}}> 여기로 이동</Link>
            </div>
            <br/><br/><br/><br/>

            {/* 라우터(페이지 이동) 테스트 */}
            {/*<RoutersTest/>*/}
            {/*<PagingFooter/>*/}

            {/* 폼 양식 전송 테스트 */}
            {/*
                import FormTest from "./components/formTest";
            */}
            {/*<FormTest/>*/}
        </>
    )
}




