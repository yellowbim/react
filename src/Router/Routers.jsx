// 페이지 이동을 위한 Router 설정
import {BrowserRouter as Router, Route} from "react-router-dom";

// 가운데 변경할 페이지 import
import TOP from './../arthall/common/top'
import FOOTER from './../arthall/common/footer'
import MAIN from './../arthall/main/main';
import LOGIN from '../arthall/mbr/login';
import JOIN from '../arthall/mbr/join';
import MyPage from '../arthall/mbr/mypage';
import PLAY from '../arthall/play/play';
import Ticketing from '../arthall/reserv/ticketing';


export default function Routers(){
    return(
        <>
            <Router>
                <TOP/>

                <Route exact path="/index/"                             component={MAIN} />
                <Route exact path="/index/member/loginForm"             component={LOGIN}/>
                <Route exact path="/index/member/joinForm"              component={JOIN}/>
                <Route exact path="/index/member/mypage"                componet={MyPage}/>
                <Route exact path="/index/play/performList"             component={PLAY}/>
                <Route exact path="/index/reserv/ticketing"             component={Ticketing}/>

                <FOOTER/>
            </Router>
        </>
    )
}