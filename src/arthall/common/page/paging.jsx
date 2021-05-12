import React from "react";

// 함수 인자로 페이지 태그를 통으로 넣어줄거임(그래야 각 페이지별 css가 적용될듯함)
export default function Paging({totalPage, page, rowSize, tag, setChPage, setChRowSize}) {

    // const [page, setPage] = useState(1);
    // const [rowSize, setRowSize] = useState(10);
    const totalPageList = []
    console.log('전체개수',totalPage)
    for (let i = 0; i < totalPage.length; i++){
        totalPage[i] = i+1
    }
    console.log('전체 페이지 리스트 ',totalPageList)

    const setSelPage = (e) => {
        setChPage(e.target.value);
    }

    const setSelRowSize = (e) => {
        setChRowSize(e.target.value);
    }

    return (
        <>
            {
                totalPageList.map(
                    page =>
                        <span className="pagenum" onClick={setSelPage} onChange={setSelRowSize}>{page}</span>
                )
            }
        </>
    )    
}
