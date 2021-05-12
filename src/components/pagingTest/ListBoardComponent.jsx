import React, {Component} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import BoardService from '../../service/BoardService';
import '../test.css';


class ListBoardComponent extends Component {
    // 1
    constructor(props){
        super(props)

        this.state = {
            boards:[]
        }
    }

    componentDidMount() {
        const config = {
            headers: {
                "username" : "user_id",
                "password" : "user_pw"
            }
        }
        BoardService.getTest(this.props,config).then((res) => {
            console.log('List Props',this.props)
            this.setState({boards: res.data})
        });
    }

    goDetailContents = (no, title) => {
        console.log('List  no',no);
        this.props.history.push('/Detail/'+no+'/'+title);      // history.match를 사용하는 방식
        // this.props.history.push({pathname:'/Detail',state: {no:no}});   // location.history.state를 사용하는 방식
        console.log('List의 history',this.props.history)
    }




    render() {
        console.log('List  State',this.state);
        return (
            <Router>
                <div>
                    <h2 className="text-center">Boards List</h2>
                    <div className ="row">
                        <table className="table table-striped table-bordered" border={1}>
                            <thead className="thead">
                                <tr className="td10">
                                    <th>글 번호</th>
                                    <th>타이틀 </th>
                                    <th>작성자 </th>
                                    <th>작성일 </th>
                                    <th>갱신일 </th>
                                    <th>좋아요수</th>
                                    <th>조회수</th>
                                    <th>상세보기</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                this.state.boards.map(
                                    board =>
                                        <tr className="td10" key = {board.no}>
                                            <td> {board.no} </td>
                                            <td > {board.title} </td>
                                            <td> {board.writer} </td>
                                            <td> {board.insDate} </td>
                                            <td> {board.updDate} </td>
                                            <td> {board.likes} </td>
                                            <td> {board.counts} </td>
                                            <td><button className="test" onClick={() => this.goDetailContents(board.no, board.title)}>상세보기</button></td>
                                            {/*<td>*/}
                                            {/*    <Link to={"/Detail/" + board.no}>*/}
                                            {/*        <button className="test">상세보기</button>*/}
                                            {/*    </Link>*/}
                                            {/*</td>*/}

                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </Router>
        );
    }
}

export default ListBoardComponent;