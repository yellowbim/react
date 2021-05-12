/*global kakao*/                                                                                                                                                                // 카카오를 글로벌로 선언해놔야 에러가 안남
import React, {Component} from "react";
import styled from 'styled-components'
import * as config from './../../config';

export default class KaKaoMapApi extends Component {
    componentDidMount() {
        // header 부분에 script를 넣어주는 부분 (index.html에 직접 script를 넣어도 되지만 로직으로 처리)
        const script = document.createElement("script");
        script.async = true;
        script.src =
            "/v2/maps/sdk.js?appkey="+config.KAKAO_DAUM_MAP_JS_KEY;   // config.js 파일을 사용하여 로그인페이지 구현
        document.head.appendChild(script);

        // 지도 정보 불러오기
        script.onload = () => {
            kakao.maps.load(() => {
                let container = document.getElementById("Mymap");
                let options = {
                    center: new kakao.maps.LatLng(37.484091, 126.878119),   // 가운데 위치
                    level: 3                                             // 확대되는 정도(숫자가 낮을수록 좁은 지역으로 확대)
                }
                const map = new window.kakao.maps.Map(container, options);
            })
        }
    }

    render() {
        // 스타일 안쪽을 구분지을때는 ;로 해야됨..... CSS랑 다른줄...
        const MapContents = styled.div`
            overflow: initial;
            width: 100vh;
            height: 100vh
        `;

        return (
            <>
                <div><strong>카카오 우편번호, 지도 테스트</strong></div>
                <div>
                    <span>지도 띄우기</span>
                    {/* 지도를 띄우는곳, styled로 직접 스타일을 적용시킴(but overflow, width, height가 적용이 안됨)*/}
                    <MapContents id="Mymap"/>
                </div>


                <br/><br/><br/><br/><br/>
                <div>
                    <strong>====================================================================================================</strong>
                </div>
            </>
        )
    }
}