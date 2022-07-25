

import React, { Fragment } from 'react'
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
export default class CommentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ishighlighting: true,
            currentTitle: {
              id: 1,
              text: "fffa",
              title: "test",
              isdeleted: false
            },
            filteredtimelines: [{ id: 2, user: "tre",text:"tekotiee" }, {id:5,user:"tt",text:"jfjejej"}],
            highlightetcommentstart: 10,
            highlightetcommentend: 0,
            show: false,
            currentId: -1


        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }
    close = () => {
        this.setState({ show: false });
    }
    open = (id, user, text, like, dislike, isdeleted) => () => {
         this.setState({ show: true });
         
    }
    render() {
        return (
            <Fragment>
 <div class="form-group centered">

    
    <p class="h3">Comments       <i onClick="refresh()" class="fa fa-refresh m-1" id="refreshComments"></i></p>
                    <p class="h3" style={{ marginTop: '10px' }}>Is a comment of following </p>
                    {this.state.ishighlighting && <div id="commentHighlight" style={{ overflowY: 'auto', width: '320px', height: '220px', marginTop: '10px' }} readonly> 
                        <span style={{ backgroundColor: 'white', color: 'black' }} >{this.state.currentTitle.text.substring(0, this.state.highlightetcommentstart)}</span>
                        <span style={{ backgroundColor: 'lightskyblue', color: 'black' }}>{this.state.currentTitle.text.substring(this.state.highlightetcommentstart, this.state.highlightetcommentend)}</span>
                        <span style={{ backgroundColor: 'white', color: 'black' }} >{this.state.currentTitle.text.substring(this.state.highlightetcommentend, this.state.currentTitle.text.length)}</span>
                       </div>
    }
    
    <div id="comments" class="container"></div>
                    {this.state.filteredtimelines.map((filteredtimeline) => (
                        <div class="card bg-outline-info text-dark  mt-5" id="{{filteredtimeline.user}}">

      <div class="card-body">

                {filteredtimeline && filteredtimeline.start
                    && filteredtimeline.end
                    && <p style={{ width: '50%', backgroundColor: 'lightskyblue' }} >
                        <strong>Commenting</strong>: {this.state.currentTitle.text.substring(this.state.filteredtimeline.start, this.state.filteredtimeline.end)}
                              </p>
        }
        <p>
          <strong>id</strong>: {filteredtimeline.id }
        </p>
        <p><strong>user</strong>: {filteredtimeline.user}</p>
        <p> <strong>timestampCreated</strong>:{filteredtimeline.timestampCreated} </p>
        <p> <strong>timestampChanged</strong>:{filteredtimeline.timestampChanged}</p>
        <p><strong> text</strong>:  {filteredtimeline.text}</p>
        <p> <strong>like</strong>: {filteredtimeline.like}</p>
        <p> <strong>dislike</strong>: {filteredtimeline.dislike}  </p>
        <p> <strong>deleted</strong>: {filteredtimeline.isdeleted}</p>
          <button type="button" onClick="highlightText(filteredtimeline.id)" class="btn btn-info col-2 m-1 p-1">Highlight commented text</button>
                                <button type="button" onClick={this.open(filteredtimeline.id, filteredtimeline.user, filteredtimeline.text, filteredtimeline.like, filteredtimeline.dislike, filteredtimeline.isdeleted)} data-bs-toggle= "modal" data-bs-target="#myModal" class="btn btn-warning col-1 m-1 p-1">Change</button>
        <button type="button" onClick="removeById(filteredtimeline.id)" class="btn btn-danger col-1 m-1 p-1">Remove</button>

      </div>
    </div>
    ))}
                </div>
                <Modal show={this.state.show}>
                    <ModalHeader>
                        <ModalTitle>Change comment</ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        <form >
                            <div class="form-group">
                                <label for="commentUser"> User: </label>
                                <input class="form-control input-sm w-50" id="commentUserChange" placeholder=" user" /><br />

                            </div>
                            <div class="form-group">
                                <label for="commentComment"> Comment: </label>
                                <textarea class="form-control input-sm w-50" id="commentCommentChange" placeholder="Comment" rows="10">
                                </textarea>

                            </div>

                            <div class="form-group">
                                <header> Do I like this part of text?</header>
                                <div>
                                    <label for="likeYes">Like:</label> <input value="like" type="radio" id="likeYesChange" name="likedislikeother" />  <br />
                                    <label for="dislikeYes">Dislike:</label> <input value="dislike" type="radio" id="dislikeYesChange" name="likedislikeother" /><br />
                                    <label for="likeDislikeNo">Don't know:</label>  <input value="dontknow" type="radio" id="likeDislikeNoChange" name="likedislikeother" checked />

                                </div>
                            </div>
                        </form></ModalBody>
                    <ModalFooter>
                        <button type="button" class="btn btn-success" onClick={this.close}>Change</button>
                        <button type="button" class="btn btn-secondary" onClick={this.close} >Close</button>
                    </ModalFooter>
                </Modal>
                </Fragment>
        )
    }
}

