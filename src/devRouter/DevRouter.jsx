import {BrowserRouter as Router, Route} from "react-router-dom";
import INDEXMAIN from './../arthall/indexMain';
import PAGINGTEST from './../PagingTest';
import krmovie from "../components/movie/krmovie";
import movieTop from "../components/movie/movieTop";
import SelectMain from "../components/select";
import Book from "../components/bookapi/book";
import ImgTest from './../components/upload/imgTest';


export default function DevRouter () {
    return(
        <>
            <Router>
                <Route exact path="/"           component={SelectMain}/>
                {/*<Redirect to="/pagingTest"      component={PAGINGTEST}/>*/}
                <Route exact path="/pagingTest" component={PAGINGTEST}/>
                <Route exact path="/index"      component={INDEXMAIN}/>
                <Route exact path="/krmovie"      component={krmovie}/>
                 <Route exact path="/movieTop"      component={movieTop}/>
                <Route exact path="/book"       component={Book}/>
                <Route exact path="/imgTest"    component={ImgTest} />
                {/* <Route exact path="/pagingTest/:page/:rowSize" component={ImgTest} /> */}
            </Router>
        </>
    )
}