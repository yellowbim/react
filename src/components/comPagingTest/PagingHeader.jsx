import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button} from "react-bootstrap";


export default class PagingHeader extends Component{
    render(){
        return(
            <>
                <div><h1>arthall React 메인 헤더</h1></div>
                <Link to="/List">
                    <button>메인 헤더 링크</button>
                </Link>
                <Link to="/Link">
                    <Button>링크 페이지 이동</Button>
                </Link>
                <Link to="/Detail">
                    <Button>상세 페이지 이동</Button>
                </Link>
                <br/>
                <div><strong>====================================================================================================</strong></div>
            </>
        )
    }
}
