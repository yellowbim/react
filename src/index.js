import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route} from "react-router-dom";
import DevRouter from "./devRouter/DevRouter";
// import PAGINGTEST from './PagingTest';
// import INDEXMAIN from './arthall/indexMain';
import './arthall/common/CSS/header.css';

ReactDOM.render(
  <React.StrictMode>
      <DevRouter/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
