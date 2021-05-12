import React from "react";
import './CSS/topBtn.css';

export default function TopBtn() {
    const moveTop = (e) => {
        e.preventDefault()
        window.scrollTo({
            behavior:'smooth',
            top:0
        })
    }
    return (<><a href="" className="topBtn" onClick={moveTop}>TOP</a></>)
}