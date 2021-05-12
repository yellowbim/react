import React, {Component} from 'react';
import axios from "axios";
import './test.css';


class FormTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mbrId:'',
            mbrPwd:'',
            id:'',
            password:''

        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.handleFileChange = this.handleFileChange.bind(this)
        this.handleValueChange = this.handleValueChange.bind(this)
        this.addCustomer = this.addCustomer.bind(this)
    }

    handleFormSubmit(e) {
        e.preventDefault()
        this.addCustomer()
            .then((response) => {
                console.log(response.data);
            })
    }

    handleFileChange(e) {
        this.setState({
            mbrId: e.target.files[0],
            mbrPwd: e.target.value
        });
    }

    handleValueChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    // 어차피 여기서 다 넣어주니까 굳이 따로 함수를 만들어 놓을 필요는 없을듯? 하지만 짧게 만들어놓는다
    addCustomer(){
        console.log("추가하기");

        const qs = require('qs');
        qs.stringify(this.state);

        // for (let i=0; i<10; i++){
        //     console.log(i);
        //     // console.log("폼",this.state[i]);
        // }
        const url = 'http://localhost:8083/mbr/login';
        const formData = new FormData();
        // formData.append("mbrId",JSON.stringify(this.state));
        // formData.append('mbrId', this.state.mbrId)          // 현재 state에 있는 mbrId를 가져옴
        // formData.append('mbrPwd', this.state.mbrPwd)        // 현재 state에 있는 mbrPwd를 가져옴

        // formData 확인
        for(let pair of formData.entries()) {
            console.log(pair[0]+ ', '+ pair[1]);
        }
        const config = {
            // headers: {
            //     'content-type': 'multipart/form-data'
            // }
        }
        return axios.post(url, qs.stringify(this.state), config)
    }

    // input 값을 클릭했을때 state에 값을 집어넣고 버튼을 누르면 state 값을 가져옴
    appChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    /* 로그인 버튼 클릭 ==> onClick */
    appClick = () => {
        console.log(`id는 : ${this.state.id}\n pw는 : ${this.state.password}`);
    }
    appKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.appClick();
        }
    }

    render() {
        console.log('List  State',this.state);
        const { id, password } = this.state;
        return (
            <>
                <form onSubmit={this.handleFormSubmit}>
                    <h1>고객 추가</h1>
                    이름: <input type="text" name="mbrId" value={this.state.mbrId} onChange={this.handleValueChange} /><br/>
                    비밀번호: <input type="text" name="mbrPwd" value={this.state.mbrPwd} onChange={this.handleValueChange} /><br/>
                    <button type="submit">추가하기</button>
                </form>
                <br/><br/><br/><br/><br/><br/>
                <div>
                    <input type="text" name="id" placeholder="아이디" value={id} onChange={this.appChange} />
                    <input type="password"
                           name="password"
                           placeholder="비밀번호"
                           value={password}
                           onChange={this.appChange}
                           onKeyPress={this.appKeyPress}
                    />
                    <button onClick={this.appClick}>로그인</button>
                </div>
                
                
                <div>
                    <span>새창열기</span><br/>
                    <button onClick={() => window.open('https://www.naver.com', '_blank')}>네이버</button>

                </div>

                <br/>
                <div><strong>====================================================================================================</strong></div>
            </>
        );
    }
}

export default FormTest;