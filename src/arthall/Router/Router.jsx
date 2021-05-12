import {BrowserRouter as Router, Route} from "react-router-dom";
import MAIN from '../main/main'


export default function Routers() {
    return(
        <Router>
            <Route path="/" component={MAIN}/>
        </Router>
    )
}