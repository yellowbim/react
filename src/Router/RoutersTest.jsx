import {BrowserRouter as Router, Route} from "react-router-dom";
import ListBoardComponent from "../components/pagingTest/ListBoardComponent";
import DetailContentsComponent from "../components/pagingTest/DetailContentsComponent.jsx";
import LinkTest from "../components/pagingTest/LinkTest";
import PagingHeader from "../components/comPagingTest/PagingHeader";

export default function RoutersTest() {
    return (
        <Router>
            <PagingHeader/>
            {/*<Route path="/"                 component={IndexMain}/>*/}
            <Route path="/List"             component={ListBoardComponent}/>
            <Route path="/Link"             component={LinkTest}/>
            <Route path="/Detail/:no/:title"       component={DetailContentsComponent}/>   {/*이건 Detail/:no 로 key 값을 맵핑시켜서 넘겨줌 */}
        </Router>
    )
}

