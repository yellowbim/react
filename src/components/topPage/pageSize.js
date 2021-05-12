

export default function PageSize (){
    const pageSize = (e) => {
        console.log(window.top.innerHeight);
    }




    return (<><button onClick={pageSize}> 페이지 크기 구하기 </button></>)
}