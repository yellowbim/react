import React, {Component} from "react";
import axios from "axios";
import {createProxyMiddleware} from "http-proxy-middleware";

export default class Book extends Component{
    constructor(props) {
        super(props);
        this.state ={
            display:10,
            sort:'sim',
            searchValue:'',
            searchTest:[],
            books:[],
            search:'극한직업',
            isLoading:true
        }
    }

    componentDidMount() {
        // this.naverSearch()
    }


    // 네이버 검색 시작
    naverSearch = () => {
        const client_id = "Zgq96IamSVjaWheGgsSs";
        const client_secret = "E7BjmteR9X";

        const config={
            headers: {
                'X-Naver-Client-Id': client_id,
                'X-Naver-Client-Secret': client_secret
            }
        }
        const url = "/v1/search/book.json?query="+encodeURI(this.state.searchValue) + "&display=" + this.state.display + "&sort=" + this.state.sort

        axios.get(url, config).then((res) => {
            console.log('결과값',res.data.items);
            this.setState({
                books:res.data.items
            })
        })
    }

    render(){

        const selDisplay =(e) => {
            this.setState({
                display:e.target.value
            })
        }

        const selSort = (e) => {
            this.setState({
                sort:e.target.value
            })
        }


        const changeVal =(e) => {
            if (e.key === "Enter"){
                this.naverSearch()
            }

            this.setState({
                searchValue:e.target.value
            })
        }

        const javaAPI =() => {
            axios.get('/GetkobisData').then((res) => {
                console.log('자바에서 받은 res',res);
            })
        }

        return(
            <>
                <div>네이버 도서 api 테스트</div><br/>
                <div>
                    <span>볼 페이지 개수</span>
                    <select onChange={selDisplay}>
                        <option value="10">10</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                    <span>정렬</span>
                    <select onChange={selSort}>
                        <option value="sim">유사도순</option>
                        <option value="date">날짜순</option>
                    </select>
                </div>


                <input type="text" value={this.state.searchValue} onChange={changeVal} onKeyPress={changeVal} style={{backgroundColor:"black",color:"white"}}/>
                <button type="button" style={{backgroundColor:"black",color:"white"}} onClick={this.naverSearch}>검색</button>
                <br/><br/><br/>
                <table>
                    <thead>
                        <tr>
                            <td>순서</td>
                            <td>책 제목</td>
                            <td>책 이미지</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.books && this.state.books.map(
                                bookList =>
                                    <tr>
                                        <td>
                                            {this.state.books.indexOf(bookList)+1}
                                        </td>
                                        <td>
                                            <span dangerouslySetInnerHTML={{__html: bookList.title}}></span>
                                        </td>
                                        <td>
                                            <img src={bookList.image} style={{width:"100px", height:"100px"}}/>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>


                <button type="button" onClick={javaAPI}>자바로 api 호출</button>
            </>
        )
    }
}