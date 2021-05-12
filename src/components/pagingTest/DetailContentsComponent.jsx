import React, {Component} from 'react';
import BoardService from '../../service/BoardService';
import '../test.css';

class ListBoardComponent extends Component {
    // 1
    constructor(props){
        console.log('Detail props',props);
        super(props)

        this.state = {
            boards:[]
        }
    }

    componentDidMount() {
        const param = this.props.match.params;              // ListBoardComponent에서 첫번째 방식
        console.log('Detail param1', param)

        // const history = this.props.location.state;          // ListBoardComponent에서 첫번째 방식
        // console.log('Detail history', history)

        BoardService.getTests(param).then((res) => {
            this.setState({boards: res.data})
        });
    }


    render() {
        console.log('Detail State',this.state);
        console.log('Detail match',this.props.match)

        return (
            <div>
                <h2 className="text-center">Detail Listt</h2>
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
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListBoardComponent;