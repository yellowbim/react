import React, {Component} from 'react';

// 우편번호 조회
import DaumPostcode from 'react-daum-postcode';
// css 스타일
import styled from 'styled-components';
// 천체 창으로 모달 씌우기
import ModalPortal from './../common/ModalPortal';


export default class MyModal extends Component{
    constructor(props) {
        super(props);
        this.state = ({
            ZipCode:"",
            FullAddress:"",
            JiBunAddress:"",
            SelectType:""
        })
    }

    render(){
        // 우편번호 검색 시작
        const handleComplete = (data) => {
            let fullAddress = data.address;     // 도로명주소
            let jibunAddress = "";              // 지번주소
            let extraAddress = "";              // ~~동

            if (data.addressType === "R") {
                if (data.bname !== "") {
                    extraAddress += data.bname;
                }
                if (data.buildingName !== "") {
                    extraAddress +=
                        extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
                }
                fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";

                if (data.userSelectedType === "J") {   // 지번주소
                    jibunAddress = data.jibunAddress + (extraAddress !== "" ? ` (${extraAddress})` : "");
                } else {
                    jibunAddress = data.autoJibunAddress + (extraAddress !== "" ? ` (${extraAddress})` : "");
                }
            }
            this.setState({ZipCode:data.zonecode, JiBunAddress:jibunAddress, FullAddress:fullAddress, SelectType:data.userSelectedType })
            this.props.onClose(this.state);
        };

        // 모달 css 설정 (css를 다로 빼지 않음 => 파일이 많아져서 관리하기 힘듦)
        const MyModal = styled.div`
        background: rgba(0, 0, 0, 0.25);
        position: fixed;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    `
        const ModalContent = styled.div`
        background: white;
        padding: 1rem;
        width: 400px;
        height: 505px;
    `
        const ModalClose = styled.button`
        float: right;
        `

        return (
            <ModalPortal>
                <MyModal>
                    <ModalContent className="content">
                        <table border="1" width="100%" style={{textAlign:"center"}}>
                            <thead>
                            <tr>
                                <td>
                                    <span><strong>우편번호를 입력해주세요</strong></span>
                                    <ModalClose onClick={() => this.props.onClose("close")}>X</ModalClose>
                                </td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <DaumPostcode onComplete={handleComplete}  width="100%" height="480px" style={{marginBottom:"0"}}/>
                                </td>
                            </tr>
                            </tbody>
                        </table>

                    </ModalContent>
                </MyModal>
            </ModalPortal>
        );
    }
};
