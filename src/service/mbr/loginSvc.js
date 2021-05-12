import axios from 'axios';

const LOGIN_API_BASE_URL = "http://localhost:8083/mbr/valChk";


class LoginSvc{
    static getMbrChk(data, config){
        return axios.post(LOGIN_API_BASE_URL, {params:data}, config);
    }




}


export default LoginSvc;