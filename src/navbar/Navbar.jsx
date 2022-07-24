

import React, { Fragment } from 'react'
import { Link } from "react-router-dom";
export default class Navbar extends React.Component {
    
    render() {
        return (
            <Fragment>
                <nav class="navbar navbar-expand-sm bg-light navbar-light" style={{
                    backgroundColor: 'darkseagreen !important', color: 'black !important'
                }} >
                        <div class="container-fluid" style={{ backgroundColor: 'darkseagreen !important', color: 'black !important' }} >
                        <a class="navbar-brand" href="#" style={{ fontSize: '16px', backgroundColor: 'darkseagreen', color: 'black' }} >Comment part of a text</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul class="navbar-nav" style={{ marginLeft: '2px' }} >
                                <li class="nav-item active">
                                    <Link class="nav-link" to="/comment" style={{ fontSize: '16px', backgroundColor: 'darkseagreen', color: 'black' }} >Comment text</Link> 
                            </li>
                            <li class="nav-item ">
                                    <Link class="nav-link" to="/createText" style={{ fontSize: '16px', backgroundColor: 'darkseagreen', color: 'black' }} >Create text</Link> 
                        </li>
                        <li class="nav-item ">
                                    <Link class="nav-link" to="/deleteText" style={{ fontSize: '16px', backgroundColor: 'darkseagreen', color: 'black' }} >Delete text</Link> 
                    </li>
                </ul>
                        </div>
                        </div>
                </nav >

                </Fragment>
        )
    }
}

