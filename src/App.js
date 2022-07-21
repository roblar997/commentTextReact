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
            <Switch>
                <Route exact path="/"><Comment/></Route>
                <Route exact path="/comment"><Comment/></Route>
                <Route exact path="/createText"><CreateText/></Route>
                <Route exact path="/deleteText"><DeleteText/></Route>
            </Switch>
       
        )
    }

}

