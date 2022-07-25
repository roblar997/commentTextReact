import logo from './logo.svg';
import './App.css';
import Comment from "./pages/Comment/Comment.jsx"
import Navbar from "./navbar/Navbar.jsx"
import CreateText from "./pages/createText/CreateText.jsx"
import DeleteText from "./pages/deleteText/DeleteText.jsx"
import CommentList  from "./pages/Comment/commentList/CommentList.jsx"
import CommentSchema from "./pages/Comment/commentSchema/CommentSchema.jsx"
import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route, MemoryRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';
export default class App extends React.Component {
    render() {
        return (
            <Fragment>

                <Router>
                    <Navbar />
                <Routes>
                        <Route path="/" element={<Comment />} />
                        <Route path="comment" element={<Comment />} />
                        <Route path="createText" element={<CreateText />} />
                        <Route path="deleteText" element={<DeleteText />} />
                    </Routes>
                </Router>
            </Fragment>
        )
    }

}

