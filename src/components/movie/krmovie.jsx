import React, {Component} from "react";
import axios from "axios";

export default class krmovie extends Component{
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

        // 일반적으로 react에서 url 호출
        const search = () =>{
            axios.get(url).then((res) => {
                console.log('영화 정보 조회',res.data.Data[0].Result)

                this.setState({
                    data:res.data.Data[0].Result
                })
            })
        }

        // 서버로 호출하여 json 형태의 문자열로 저장


        // 커스텀태그 사용방식

        const reactStringReplace = require('react-string-replace');
        function customTag(title) {
            title = title.replace("!HS",'<strong>')
            title = title.replace("!HE",'</strong>')
            title = title.replace(/ /gi,"")
            return title;

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
                                {/* 싹 다 조회만 */}
                                <div>
                                    {
                                        this.state.data.map((movie,index) =>
                                                <div key={index}>
                                                    <div>
                                                        <span style={{color:"red"}}>VODS: </span>
                                                        {
                                                        movie.vods.vod.map((vod,index) =>
                                                            <div>
                                                                <div>{vod}</div>
                                                            </div>
                                                        )
                                                    }
                                                    </div><br/>
                                                    <div><span style={{color:"red"}}>ALIAS: </span>{movie.ALIAS}</div><br/>
                                                    <div><span style={{color:"red"}}>Awards1: </span>{movie.Awards1}</div><br/>
                                                    <div><span style={{color:"red"}}>Awards2: </span>{movie.Awards2}</div><br/>
                                                    <div><span style={{color:"red"}}>DOCID: </span>{movie.DOCID}</div><br/>
                                                    <div><span style={{color:"red"}}>audiAcc: </span>{movie.audiAcc}</div><br/>
                                                    <div><span style={{color:"red"}}>company: </span>{movie.company}</div><br/>
                                                    <div><span style={{color:"red"}}>episodes: </span>{movie.episodes}</div><br/>
                                                    <div><span style={{color:"red"}}>fLocation: </span>{movie.fLocation}</div><br/>
                                                    <div><span style={{color:"red"}}>genre: </span>{movie.genre}</div><br/>
                                                    <div><span style={{color:"red"}}>keywords: </span>{movie.keywords}</div><br/>
                                                    <div><span style={{color:"red"}}>kmdbUrl: </span>{movie.kmdbUrl}</div><br/>
                                                    <div><span style={{color:"red"}}>modDate: </span>{movie.modDate}</div><br/>
                                                    <div><span style={{color:"red"}}>movieId: </span>{movie.movieId}</div><br/>
                                                    <div><span style={{color:"red"}}>movieSeq: </span>{movie.movieSeq}</div><br/>
                                                    <div><span style={{color:"red"}}>nation: </span>{movie.nation}</div><br/>
                                                    <div><span style={{color:"red"}}>openThtr: </span>{movie.openThtr}</div><br/>
                                                    <div><span style={{color:"red"}}>posters: </span>{movie.posters}</div><br/>
                                                    <div><span style={{color:"red"}}>prodYear: </span>{movie.prodYear}</div><br/>
                                                    <div><span style={{color:"red"}}>ratedYn: </span>{movie.ratedYn}</div><br/>
                                                    <div><span style={{color:"red"}}>rating: </span>{movie.rating}</div><br/>
                                                    <div><span style={{color:"red"}}>regDate: </span>{movie.regDate}</div><br/>
                                                    <div><span style={{color:"red"}}>repRatDate: </span>{movie.repRatDate}</div><br/>
                                                    <div><span style={{color:"red"}}>repRlsDate: </span>{movie.repRlsDate}</div><br/>
                                                    <div><span style={{color:"red"}}>runtime: </span>{movie.runtime}</div><br/>
                                                    <div><span style={{color:"red"}}>salesAcc: </span>{movie.salesAcc}</div><br/>
                                                    <div><span style={{color:"red"}}>screenArea: </span>{movie.screenArea}</div><br/>
                                                    <div><span style={{color:"red"}}>screenCnt: </span>{movie.screenCnt}</div><br/>
                                                    <div><span style={{color:"red"}}>soundtrack: </span>{movie.soundtrack}</div><br/>
                                                    <div><span style={{color:"red"}}>statDate: </span>{movie.statDate}</div><br/>
                                                    <div><span style={{color:"red"}}>statSouce: </span>{movie.statSouce}</div><br/>
                                                    <div><span style={{color:"red"}}>stlls: </span>{movie.stlls}</div><br/>
                                                    <div><span style={{color:"red"}}>themeSong: </span>{movie.themeSong}</div><br/>
                                                    <div>
                                                        <span style={{color:"red"}}>themeSong: </span>
                                                        {/* 
                                                            dangerouslySetInnerHTML 태그를 사용할때
                                                            자식, 부모 태그가 존재하면 안되고 본인 하나의 태그에만 적용하면됨
                                                         */}
                                                        <span dangerouslySetInnerHTML={{__html:customTag(movie.title)}}></span>
                                                    </div><br/>

                                                    <div><span style={{color:"red"}}>titleEng: </span>{movie.titleEng}</div><br/>
                                                    <div><span style={{color:"red"}}>titleEtc: </span>{movie.titleEtc}</div><br/>
                                                    <div><span style={{color:"red"}}>titleOrg: </span>{movie.titleOrg}</div><br/>
                                                    <div><span style={{color:"red"}}>type: </span>{movie.type}</div><br/>
                                                    <div><span style={{color:"red"}}>use: </span>{movie.use}</div><br/>
                                                </div>
                                        )



                                    }
                                </div>




                                {/*<div dangerouslySetInnerHTML={{__html: movie.title }}></div>*/}
                                {/*<span>영화제목 : ({movie.titleEng})</span>*/}
                                {/*<div>kmdbUrl : {movie.genre}</div>*/}
                                {/*<div>포스터 이미지 :</div>*/}
                                {/*{*/}
                                {/*        this.state.posters.map(*/}
                                {/*        poster =>*/}
                                {/*            <div>*/}
                                {/*                <span><img src={poster} style={{width:"250px",height:"250px", float:"left"}}/> </span>*/}
                                {/*                <span>이미지 경로 {poster}</span>*/}
                                {/*            </div>*/}
                                {/*            */}
                                {/*    )*/}
                                {/*}<br/>*/}
                                {/*<div>스틸 이미지 : <img src={movie.stillUrl}/> </div>*/}
                                {/*<div>vodUrl : <video src={movie.vodClass} autoPlay muted/> </div>*/}
                                {/*<div>vodClass : <video src={movie.vodClass} autoPlay muted/> </div>*/}
                            </div>
                    )
                }
            </>
        )
    }
}