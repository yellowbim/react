import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8083"

class CommonApiService {
    // axiosGet(reqUrl, formData, config){
    //     let url = LOGIN_API_BASE_URL + reqUrl;
    //     return axios.post(url, formData, config)
    // }

    axiosFormPost(reqUrl, formData, config){
        let url = USER_API_BASE_URL + reqUrl;
        return axios.post(url, formData, config)
    }


}

export default CommonApiService;