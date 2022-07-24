

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CreateText from "./pages/createText/CreateText.jsx"
import DeleteText from "./pages/deleteText/DeleteText.jsx"
import CommentList from "./pages/Comment/commentList/CommentList.jsx"
import CommentSchema from "./pages/Comment/commentSchema/CommentSchema.jsx"
import React, { Component, Fragment, Switch } from 'react'
import { BrowserRouter ,Router, Routes } from 'react-router-dom';
import { Route } from "react-router";


    ReactDOM.render(
 
            <App />
     ,
        document.getElementById("root")
    );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
