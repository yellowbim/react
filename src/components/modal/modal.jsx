import React, {useState} from 'react';

// css 스타일
import styled from 'styled-components';
// 천체 창으로 모달 씌우기
import ModalPortal from './ModalPortalTest';


export default function Modal({tag, modalClose}){
    const [bigImg, setBigImg] = useState('');

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
    const modalOut = (e) => {
        // 이벤트를 적용한 태그와 클릭한 태그가 같으면 실행
        if (e.target === e.currentTarget){
            modalClose();
        }
    }

    return (
            <ModalPortal>
                <MyModal onClick={modalOut}>
                    <ModalContent className="content">
                        <span>{tag}</span>
                    </ModalContent>
                </MyModal>
            </ModalPortal>

    );
};
