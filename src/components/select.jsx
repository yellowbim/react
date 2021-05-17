import {Link} from "react-router-dom";

export default function SelectMain() {
    return(
        <>
            <Link to="/index"> arthall </Link><br/>
            <Link to="/pagingTest"> 많은 테스트 </Link><br/>
            <Link to="/krmovie"> 한국영화데이터베이스 </Link><br/>
            <Link to="/movieTop"> 영화진흥원 </Link><br/>
            <Link to="/book"> 네이버 검색 api 테스트 </Link><br/>
            <Link to="/imgTest"> 이미지 테스트 </Link><br/>
        </>
    )
}