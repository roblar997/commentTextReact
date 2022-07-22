import logo from './logo.svg';
import './App.css';
import Comment from "./pages/Comment/Comment.jsx"
import CreateText from "./pages/createText/CreateText.jsx"
import DeleteText from "./pages/deleteText/DeleteText.jsx"
import CommentList  from "./pages/Comment/commentList/CommentList.jsx"
import CommentSchema from "./pages/Comment/commentSchema/CommentSchema.jsx"
import React, { Fragment } from 'react'

export default class App extends React.Component {
    render() {
        return (
          <Comment/>

       
        )
    }

}

