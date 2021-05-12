import {useEffect, useState} from "react";
import './../common/CSS/join.css';
import axios from "axios";

// 우편번호 modal
import ZipCode from './../common/ZipCode';


export default function Join() {

    let JoinId, JoinmbrPwd, ConfirmmbrPwd, CellNo, Birth, EmailId, EmailChk  = null;

    // 우편번호 찾기 모달 기본 설정
    const [Modal, setModal] = useState(false);

    const [inputs, setInputs] = useState({
        // 입력받은 값
        mbrId:'',
        mbrPwd:'',
        cfmbrPwd:'',
        birth:'',
        cellNo:'',
        sex:'3',
        zipCode:'',
        addr:'',
        addrDetail:'',
        emailId:'',
        emailAdd:'',
        emailSel:'',
        email:'',
        maketings:[],
        maketing1:false,
        maketing2:false,
        emailChk:'',                // 메일 확인(고객입력)
        // phoneConfirm:'',         // 휴대폰 인증

        dupCode:'',                 // 아이디 중복 확인코드(서버)
        emailCode:''                // 메일 인증번호(서버)
    });

    useEffect(() => { // useEffect 적용!
        console.log('렌더링이 완료되었습니다!');
        console.log("아이디",mbrId,"비밀번호", mbrPwd,"비밀번호 확인", cfmbrPwd, "이메일",emailId, emailAdd );
    });

    // input 박스에 값을 넣어주는 경우만 사용
    const {mbrId, mbrPwd, cfmbrPwd, emailId, emailAdd} = inputs;

    // 변경 이벤트
    const onChange = (e) => {
        const name = e.target.name;     // 변경하는 name 넣어놓기
        let value = e.target.value;   // 변경하는 value 넣어놓기

        if (name == 'mbrId'){
            value = value.replace(/[^a-zA-Z0-9]/gi,'');
        } else if (name == 'mbrPwd' || name == 'cfmbrPwd'){
            value = value.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/gi,'');
        } else if (name == 'birth'){
            value = value.replace(/[^0-9]/g,'');
        } else if (name == 'addrDetail'){
            value = value.replace(/[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣a-zA-Z0-9]/gi,'');
        }

        setInputs({
            ...inputs,                      // 이게 정확히 무슨 의미일까
            [name]:value
        })
    }

    // 아이디 중복 확인 처리 함수
    const onClick = (e) => {
        if (mbrId == ""){alert("아이디를 입력해주세요"); return false;}
        axios.get("http://localhost:8083/mbr/valChk",{params:{mbrId:mbrId}}).then((res) => {
            // 중복 확인은 결과를 담을 필요가 없음
            if (res.data == '1111'){
                alert("사용중인 아이디 입니다.\n아이디를 다시 입력해주세요");
                JoinId.focus();
            } else {
                alert("사용 가능한 아이디 입니다.");
            }
            inputs.dupCode = res.data;
        });
    }

    const openZipCode = () => {
        setModal(true)
        document.body.style.overflow="hidden";
    }
    const closeZipCode = (data) => {
        console.log('data',data);
        if (data != ""){
            inputs.zipCode = data.ZipCode;           // 우편번호
            if (data.SelectType == "R"){
                inputs.addr = data.FullAddress;
            } else {
                inputs.addr = data.JiBunAddress;
            }
        }

        setModal(false)
        document.body.style.overflow="unset";
    }

    // 성별 radio 박스 변경
    const SexChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            sex:value
        })
    }

    // 이메일 도메인 변경
    const EmailChange = (e) =>{
        let {value, name} = e.target;
        if (value == ""){inputs.emailAdd = ""}
        setInputs({
            ...inputs,
            emailSel:value,
            emailAdd:value
        })
    }

    // 이메일 인증 발송
    const ComfirmEmail = (e) =>{
        const email= emailId + '@' + inputs.emailAdd;
        axios.get("http://localhost:8083/mbr/sendMail",{params:{email:email}}).then((res) => {
            console.log(res.data);
            inputs.emailCode = res.data;
        });
    }

    // 휴대폰 인증 발송
    const ConfirmPhone =(e) =>{
        const certiCode = "";
        console.log("휴대폰번호",inputs.cellNo);
        axios.get("http://localhost:8083/mbr/sendSms",{params:{cellNo:inputs.cellNo}}).then((res) => {
            inputs.phoneConfirm = res.data;
            console.log(res.data);
        });
    }

    const ChkEmail = () => {
        if (inputs.emailChk == inputs.emailCode){
            alert("인증이 확인되었습니다.");
        } else{
            alert("인증번호를 다시 입력해주세요");
        }
    }

    // 마케팅 동의
    const maketingAgree = (e) => {
        if (e.target.name == 'marketing1'){
            inputs.maketing1 = !inputs.maketing1;
        } else {
            inputs.maketing2 = !inputs.maketing2;
        }
    }



    const onSubmit = (e) => {
        // velidation 체크
        // 아이디 체크
        if (inputs.mbrId == ''){
            alert('아이디를 입력해주세요');
            JoinId.focus();
            return;
        } else if (inputs.dupCode == '1111'){
            alert("아이디가 중복됩니다.");
            JoinId.focus();
            return;
        } else if (inputs.dupCode == '' ){
            alert("중복확인을 해주세요");
            JoinId.focus();
            return;
        }
        console.log('두번째', inputs.mbrPwd.replace(/[^A-Z]/g,''))

        // 비밀번호 대문자 체크
        if (inputs.mbrPwd == ''){
            alert("비밀번호를 입력해주세요.");
            JoinmbrPwd.focus();
            return;
        } else if(inputs.mbrPwd.replace(/[^A-Z]/g,'') == ''){
            alert("비밀번호에 대문자가 포함되어야 합니다.");
            JoinmbrPwd.focus();
            return;
        } else if(inputs.mbrPwd.replace(/[^a-z]/g,'') == ''){
            alert("비밀번호에 소문자가 포함되어야 합니다.");
            JoinmbrPwd.focus();
            return;
        }
        else if (inputs.mbrPwd.replace(/[^~!@#$%^&*()_+|<>?:{}]/gi,'') == ''){       // 특수문자 체크
            alert("비밀번호에 특수문자가 포함되어야 합니다..");
            JoinmbrPwd.focus();
            return;
        }
        if (inputs.cfmbrPwd != inputs.mbrPwd){
            alert("비밀번호를 확인해주세요.");
            ConfirmmbrPwd.focus();
            return;
        }
        if (inputs.birth == ''){
            alert("생년월일을 입력해주세요");
            Birth.focus();
            return;
        }
        if (inputs.cellNo == ''){
            alert("연락처를 입력해주세요");
            CellNo.focus();
            return;
        }
        if (inputs.zipCode == ''){
            alert("주소를 입력해주세요");
            return;
        }
        if (inputs.emailId == '' && inputs.emailAdd == ''){
            alert("이메일을 입력해 주세요.");
            EmailId.focus();
            return;
        }
        // 정보비교 됬고 이제 form으로 정보만 넘기면됨.

        const qs = require("qs");
        const config = {
            headers: {
                "username" : "user_id",
                "password" : "user_pw"
            }
        }

        // 이메일 합치기
        inputs.email = inputs.emailId + '@' + inputs.emailAdd;

        // 마케팅 동의 체크
        if (inputs.maketing1 == true){inputs.maketings[0] = '1'}
        else {inputs.maketings[0] = '0'}
        if (inputs.maketing2 == true){inputs.maketings[1] = '1'}
        else {inputs.maketings[1] = '0'}


        console.log("최종 결과값", qs.stringify(inputs));
        console.log("최종 결과값", inputs);

        axios.post("http://localhost:8083/mbr/join",qs.stringify(inputs),config).then((res) => {
            console.log(res.data);
            if (res.data == '0000'){
                alert("축하합니다~! \n 회원가입이 완료되었습니다");
                document.location.href="/index/member/loginForm";
            } else{

            }
        });
    }




    return(

        <>
            <div id="wrap">
                <a href="#" id="gomain">본문바로가기</a>
                <div className="sub__tit">
                    <h2>충무아트센터 회원가입</h2>
                </div>
                <div className="sub__container cf">
                    <main id="main">
                        <div className="main__content">
                            <div className="content__innerConts">
                                <h3 className="innerConts__tit">충무아트센터 회원가입</h3>
                                <p>회원가입을 통해 충무아트센터의 멤버십혜택을 누려보세요.</p>
                                <div className="innerConts__cont">
                                    {/*<div className="join_form">*/}
                                    <form className="join_form" id="join_form" name="join_form">
                                        <fieldse>
                                            <legend></legend>
                                            <div className="form_list">
                                                <span className="star">*필수기입항목</span>
                                                <ul>
                                                    <li>
                                                        <label for="mbrId"><span>* </span>아이디</label>
                                                        <input type="text" name="mbrId" id="mbrId" placeholder="아이디를 입력해주세요." onChange={onChange} value={JoinId} ref={(ref) => {JoinId=ref}}/>
                                                            <button type={"button"} onClick={onClick}  ><span>중복확인</span></button>
                                                    </li>
                                                    <li>
                                                        <label for="pw"><span>* </span>비밀번호</label>
                                                        <input type="password" name="mbrPwd" id="mbrPwd" placeholder="대문자, 소문자, 영어, 특수문자를 포함해주세요." onChange={onChange} value={mbrPwd} ref={(ref) => {JoinmbrPwd=ref}}/>
                                                        {/*<span style={{fontSize:"15px", fontWeight:"bold", color:"red" }}>사용할 수 없는 아이디 입니다.</span>*/}
                                                    </li>
                                                    <li>
                                                        <label for="pw2"><span>* </span>비밀번호확인</label>
                                                        <input type="password" name="cfmbrPwd" id="cfmbrPwd" placeholder="비밀번호를 다시 한 번 입력해주세요" onChange={onChange} value={cfmbrPwd} ref={(ref) => {ConfirmmbrPwd=ref}}/>
                                                    </li>
                                                    <li>
                                                        <label for="mbrNm"><span>* </span>이름</label>
                                                        <input type="text" name="mbrNm" id="mbrNm" placeholder="이름을 입력해 주세요" onChange={onChange}/>
                                                    </li>
                                                    <li>
                                                        <label for="gender"><span>* </span>성별</label>
                                                        <div className="sex">
                                                            <input type="radio"     name="sex_man" id="sex_man"     value="1" onClick={SexChange} checked={inputs.sex== "1" ? true: false}/><label for="sex_man">남성</label>
                                                            <input type="radio"     name="sex_women" id="sex_women"   value="2" onClick={SexChange} checked={inputs.sex== "2" ? true: false}/><label for="sex_women">여성</label>
                                                            <input type="radio"     name="sex_none" id="sex_none"    value="3" onClick={SexChange} checked={inputs.sex== "3" ? true: false}/><label for="sex_none">기재원치않음</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <label for="datepicker"><span>* </span>생년월일</label>
                                                        <input type="text" className="datepicker" id="birth" name="birth" placeholder="년도 / 월 / 일을 입력해주세요 (ex: 19920510)" onChange={onChange} value={inputs.birth} ref={(ref) => {Birth=ref}}/>
                                                    </li>
                                                    <li>
                                                        <label for="cellNo"><span>* </span>연락처</label>
                                                        <input type="tel" name="cellNo" id="cellNo" placeholder="숫자만 입력해주세요" onChange={onChange} value={CellNo} ref={(ref) => {CellNo=ref}}/>
                                                    </li>

                                                    <li className="add_area">
                                                        <label for="sample4_postcode"><span>* </span>주소</label>
                                                        <input type="text" id="sample4_postcode" name="sample4_postcode" placeholder="우편번호" value={inputs.zipCode} disabled="disabled"/>
                                                        <input type="button" onClick={openZipCode} value="우편번호 찾기" id="post_btn"/>
                                                        {
                                                            Modal && <ZipCode onClose={closeZipCode}/>
                                                        }
                                                        <input type="text" id="sample4_roadAddress" name="sample4_roadAddress" placeholder="주소" value={inputs.addr} readOnly disabled="disabled"/>
                                                        <input type="text" id="sample4_detailAddress" name="addrDetail" placeholder="상세주소" onChange={onChange} />
                                                    </li>

                                                    <li className="email_area">
                                                        <label for="email"><span>* </span>이메일</label>
                                                        <input type="text" name="emailId" id="emailId" onChange={onChange} value={EmailId} ref={(ref) => {EmailId=ref}}/>
                                                            <span>@</span>
                                                            <input type="text" name="emailAdd" id="emailAdd" value={inputs.emailSel=="" ? inputs.emailAdd:inputs.emailSel} onChange={inputs.emailSel == "" ?onChange:null}/>
                                                                <select className="email_sel" name="email_sel" id="email_sel" onChange={EmailChange}>
                                                                    <option value="" selected>직접입력</option>
                                                                    <option value="naver.com">네이버</option>
                                                                    <option value="hanmail.com">다음</option>
                                                                    <option value="gmail.com">구글</option>
                                                                </select>
                                                                <button type="button" id="mailFuncSend" onClick={ComfirmEmail}>인증번호 발송</button>
                                                    </li>
                                                    <li className="email_conf_area">
                                                        <label for="emailChk"><span>* </span>이메일 인증 확인</label>
                                                        <input type="text" name="emailChk" id="emailChk" placeholder="인증번호를 입력하신 후 확인을 눌러주세요" onChange={onChange} value={EmailChk} ref={(ref) => {EmailChk=ref}}/>
                                                        <button type="button" id="mailFuncConf" onClick={ChkEmail}>인증번호 확인</button>
                                                    </li>

                                                    <li className="chk-1 chk_area">
                                                        <input type="checkbox" name="maketing1" id="chk1" onClick={maketingAgree} checked={inputs.maketing1 ? "checked":null}/>
                                                            <label for="chk1">충무아트센터에서 제공하는 정보를 메일로 받아보시겠습니까? (선택)</label>
                                                    </li>
                                                    <li className="chk-2 chk_area">
                                                        <input type="checkbox" name="maketing2" id="chk2"  onClick={maketingAgree} checked={inputs.maketing2 ? "checked":null}/>
                                                            <label for="chk2">충무아트센터에서 제공하는 정보를 SMS로 받아보시겠습니까? (선택)</label>
                                                    </li>
                                                </ul>
                                                <div className="btn_yn">
                                                    <button id="joinRegist" type="button" onClick={onSubmit} ><span>확인</span></button>
                                                    <button id="joinCancle"><span>취소</span></button>
                                                </div>
                                            </div>
                                        </fieldse>
                                    {/*</div>*/}
                                    </form>
                                </div>
                            </div>
                        </div>
                        >
                    </main>
                    <a href="#" className="topBtn">TOP</a>
                </div>
            </div>
        </>
    )
}