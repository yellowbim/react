import ReactDOM from 'react-dom';


//  index.html에 id가 modal 이라는 이름의 태그 하위에 root와 같이 렌더링해줌
const ModalPortal = ({ children }) => {
    const el = document.getElementById("modal");
    console.log('children',children);
    console.log('el',el);
    return ReactDOM.createPortal(children, el);
}

export default ModalPortal;