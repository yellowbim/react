import React, {Component} from 'react';
import axios from "axios";
import Paging from './../page/paging2';
import Modal from './../modal/modal';

export default class ImgTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file:"",
            totalCnt:0,
            rowSize:3,      // 3이 default
            page:1,         // 1페이지가 default
            fileList:[],
            modal:false,
            modalTag:''
        }
    }

    // 페이지가 처음 열리면 실행
    componentDidMount() {
        this.getImgList()
    }

    getImgList(){
        // state에 있는 값을 가지고 값 전송
        const formData = new FormData();
        formData.append("page",this.state.page)
        formData.append("rowSize",this.state.rowSize)
        const headers = {
            "Access-Control-Allow-Origin" : "*",
            "Access-Control-Allow-Methods" : "POST, GET, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers" : "X-PINGOTHER, Content-Type"
        }

        // formData값 로그
        for(let pair of formData.entries()) {
            console.log(pair[0]+ ', '+ pair[1]);
        }

        // 파일 목록
        // this.props.history.push('/imgTest/'+this.state.page+'/'+this.state.rowSize)
        axios.post("http://localhost:8083/main/fileList?page="+this.state.page+'&rowSize='+this.state.rowSize).then((res) => {
            console.log('파일 전체 개수',res.data)
            if (res.data.length !== 0) {
                this.setState({
                    fileList: res.data,
                    totalCnt: res.data[0].totalCnt
                })
            }
        });
    }

    render(){

        // 파일  첨부
        const onChange1 = (e) => {
            console.log('파일 목록',e.target.files)
            this.state.file = e.target.files[0]
        }

        // 파일  저장
        const onClick = () => {
            const formData = new FormData();
            formData.append('file', this.state.file);
            // 서버의 upload API 호출
            const config = {
                headers: {
                    "username" : "user_id",
                    "password" : "user_pw"
                }
            }

            axios.post("http://localhost:8083/main/fileUpload", formData).then( (res) => {
                console.log(res);
            });
        }

        // rowSize 값 가져오기
        const getRowSize = (data) => {
            console.log('변경된 페이지값',data)
            if (Math.floor(this.state.totalCnt/data)+1 < this.state.page){
                // 마지막 페이지에서 보여줄 갯수를 변경하면
                // 변경된 마지막 페이지로 값 전달
                this.setState({rowSize:data, page:Math.floor(this.state.totalCnt/data)+1}, () => {return this.getImgList()});
            } else {
                this.setState({rowSize:data}, () => {return this.getImgList()});
            }

        }

        // page 값 가져오기
        const getPage = (data) => {
            console.log('자식태그에서 받은 page', data)
            this.setState({page:data},() =>{return this.getImgList()});

        }

        // 이미지, 동영상 파일 구분
        function imgVideo(fileName){
            const gubun = fileName.substr(fileName.indexOf('.')+1);
            if (gubun == "mp4"){
                return <video src={require('./../imgUpload/'+fileName)} style={{width:"80px", height:"80px"}} onClick={bigImg}/>;
            } else {
                console.log('이미지 경로',require('./../imgUpload/'+fileName));
                return <img src={require('./../imgUpload/'+fileName)} style={{width:"80px", height:"80px"}} onClick={bigImg} />;
            }
        }

        // 레이어 팝업으로 이미지 크게보기(볼 이미지, 크기 등은 여기서 설정)
        const bigImg = (e) => {
            console.log(e.target.tag);
            const gubun = e.target.src.substr(e.target.src.indexOf('.')+1);
            if (gubun === 'mp4'){
                this.setState({
                    modal:true,
                    modalTag:<video src={e.target.src} style={{width:"400px", height:"500px"}}/>
                })
            } else {
                this.setState({
                    modal:true,
                    modalTag:<img src={e.target.src} style={{width:"400px", height:"500px"}} alt={'이미지 크게보기'}/>
                })
            }
        }

        // 이미지 크게보기 닫기
        const onmouseleave = (e) => {
            console.log(e)
            this.setState({modal:false})
        }

        // 이미지 다운로드
        const imgDown = (e) => {
            const blobSupported = new Blob(['a']).size === 2;
            console.log('지원 브라우저 확인',blobSupported)
            console.log('이미지 경로', require('./../imgUpload/'+ this.state.fileList[0].fileName))
            const element = document.createElement("a");
            const file = new Blob(
                [require('./../imgUpload/'+ this.state.fileList[0].fileName)],
                {type:'image/*'}
            )
            element.href = URL.createObjectURL(file);
            element.download = 'image.jpg';
            element.click();
        }


        return(
            <>
                <div><h1>================== 이미지, 동영상 업로드 ==================</h1></div>
                {/*<div className="App">*/}

                {/*    <input type="file" onChange={onChange}/>*/}
                {/*    */}
                {/*</div>*/}
                업로드
                <form encType="multipart/form-data">
                    <input multiple="multiple" type="file" name="filename" onChange={onChange1} formEncType="multipart/form-data"/>
                    <button onClick={onClick}>제출</button>
                </form>

                <div>
                    <h2 className="text-center">Boards List</h2>
                    <div className ="row">
                        <table className="table table-striped table-bordered" border={1} style={{width:"100%"}}>
                            <thead className="thead">
                            <tr className="td10">
                                <th>순서</th>
                                <th>파일경로</th>
                                <th>이미지 미리보기</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.fileList.map(
                                    fileList =>
                                        <tr key={fileList.seq}>
                                            <td> {fileList.seq} </td>
                                            <td > {fileList.fileName} </td>
                                            <td> {imgVideo(fileList.fileName)}<button type="button" onClick={imgDown}>이미지 다운로드</button>
                                            </td>
                                            {
                                                this.state.modal && <Modal tag={this.state.modalTag} modalClose={onmouseleave}/>
                                            }
                                        </tr>
                                )
                            }
                            </tbody>
                        </table>

                        <Paging totalCnt={this.state.totalCnt} page={this.state.page} rowSize={this.state.rowSize} getRowSize={getRowSize} getPage={getPage}/>
                    </div>
                    {/*<video src={require('./../imgUpload/1619081270029KakaoTalk_20210420_110212053.mp4')} style={{width:"80px", height:"80px"}} autoPlay muted />*/}
                </div>
                <button type="button" onClick={imgDown}>이미지 다운로드</button>
            </>
        )
    }
}