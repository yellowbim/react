import axios from 'axios';

const BOARD_API_BASE_URL = "http://localhost:8083/api/test";

// const props ={no : 2};

class BoardService{
    // url로 모든 데이터 조회
    getBoards() {
        return axios.get(BOARD_API_BASE_URL);
    }

    // GET 방식,   url뒤에 파라미터를 셋팅
    getTests(data){
        console.log('api data',data);
        return axios.get(BOARD_API_BASE_URL, {params: data});
    }

    // 포스트 방식
    getTest(data,config){
        return axios.post(BOARD_API_BASE_URL, {params:data}, config)
    }


    // form 전송
    getFormPost(reqUrl, formData, config){
        let url = BOARD_API_BASE_URL + reqUrl;
        return axios.post(url, formData, config);
    }



}

export default new BoardService();