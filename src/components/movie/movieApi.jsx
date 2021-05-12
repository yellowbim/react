import React, {Component} from "react";
import axios from "axios";

export default class MovieApi extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title:'극한직업',
            posters:[],
            vod:[],
            data:[]
        }
    }

    render() {

        const searchKey =(e) => {
            this.setState({
                title:e.target.value
            })
        }

        // 인증키 : 3G53L5DI27JRASJCGL2H
        const ServiceKey = "3G53L5DI27JRASJCGL2H";
        const url = " http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&title=" + this.state.title + '&ServiceKey=' + ServiceKey;

        const search = (e) =>{
            axios.get(url).then((res) => {
                console.log('영화 정보 조회',res.data.Data[0].Result)
                console.log('포스터 정보',res.data.Data[0].Result[0].posters.split('|'))

                this.setState({
                    posters:res.data.Data[0].Result[0].posters.split('|'),
                    data:res.data.Data[0].Result
                })
            })
        }

        return(
            <>
                영화 제목을 입력해 주세요 : <input type="text" style={{backgroundColor:"black", color:"white"}} onChange={searchKey} value={this.state.title}/>
                <button type="button" style={{backgroundColor:"blue", color:"white"}} onClick={search}>검색</button>
                <br/><br/>
                {
                    this.state.data.map(
                        movie =>
                            <div>
                                <div dangerouslySetInnerHTML={{__html: movie.title }}></div>
                                <span>영화제목 : ({movie.titleEng})</span>
                                <div>kmdbUrl : {movie.genre}</div>
                                <div>포스터 이미지 :</div>
                                {
                                        this.state.posters.map(
                                        poster =>
                                            <div>
                                                <span><img src={poster} style={{width:"250px",height:"250px", float:"left"}}/> </span>
                                                <span>이미지 경로 {poster}</span>
                                            </div>
                                            
                                    )
                                }<br/>
                                <div>스틸 이미지 : <img src={movie.stillUrl}/> </div>
                                <div>vodUrl : <video src={movie.vodClass} autoPlay muted/> </div>
                                <div>vodClass : <video src={movie.vodClass} autoPlay muted/> </div>
                            </div>
                    )
                }
            </>
        )
    }
}