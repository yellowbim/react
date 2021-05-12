import {BrowserRouter as Router, Route, Link} from "react-router-dom";

export default function SelectMain() {
    return(
        <>
            <Link to="/index"> arthall </Link><br/>
            <Link to="/pagingTest"> 많은 테스트 </Link><br/>
            <Link to="/movie"> 영화 api 테스트 </Link><br/>
            <Link to="/book"> 네이버 검색 api 테스트 </Link><br/>
            <Link to="/imgTest"> 이미지 테스트 </Link>
        </>
    )
}