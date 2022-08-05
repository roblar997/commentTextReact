

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
            filteredtimelines: [{ id: 2, user: "tre",  like: false, text: "tekotiee"}, { id: 5, user: "tt", text: "jfjejej", like: true }],
            highlightetcommentstart: 0,
            highlightetcommentend: 10,
            show: false,
            toChange: {
                id: -1,
                user: "",
                text: "tester",
                like: false,
                dislike: false
            },
            title:"aa"


        };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.selectStartChange = this.selectStartChange.bind(this);
        this.selectEndChange = this.selectEndChange.bind(this);
        this.selectedTextChange = this.selectedTextChange.bind(this);
        this.tidslinjerListChange = this.titleChange.bind(this);
        this.titleListChange = this.titleChange.bind(this);
        this.titleChange = this.titleChange.bind(this);
        this.filteredTimelineListChange = this.filteredTimelineListChange.bind(this);
        this.dislikesChange = this.dislikesChange.bind(this);
        this.likesChange = this.likesChange.bind(this);
        this.getChanges = this.getChanges.bind(this);
        this.changehighlightetcomment = this.changehighlightetcomment.bind(this);
        this.refresh = this.refresh.bind(this);
    }


    changehighlightetcomment = (highlightetcommentstart, highlightetcommentend) => () => {
        this.setState({ highlightetcommentstart: highlightetcommentstart });
        this.setState({ highlightetcommentend: highlightetcommentend });
       
    }



    changeTimeline(id, tidslinjeChangeForm) {
        this.getChanges();
        //Change timeline
       // axios.post("")
        //    .then(res => {

                //Get changes
            //    axios.post("")
            //        .then(res2 => {

           //         })
          //  });
    }
    removeById(id) {
        this.getChanges();
       // axios.post("")
        //    .then(res => {

       //     });
    }
    getChanges = () => {
        this.props.getChangesCallback();
    }
    close = () => {
        this.setState({ show: false });
    }
    open = (id, user, text, like, dislike, isdeleted) => () => {
       
        this.setState({
            show: true,
            toChange: {
                id: id,
                user: user,
                text: text,
                like: like,
                dislike: dislike
            } });
      
        
    }
    getChanges = () => {
        this.props.getChangesCallback();
    }
    selectStartChange = (selectStart) => () => {
        this.props.selectStartChangeCallback(selectStart)


    }
    likesChange = (likes) => {
        this.props.likesChangeCallback(likes);
    }
    dislikesChange = (dislikes) => {
        this.props.dislikesChangeCallback(dislikes);
    }

    selectEndChange = (selectedEnd) => () => {
        this.props.selectedEndChangeCallback(selectedEnd)
    }



    selectedTextChange = (selectedText) => () => {
        this.props.selectedTextChangeCallback(selectedText)
    }

    commandTidslinjeWrapperChange = (commandTidslinjeWrapper) => () => {
        this.props.commandTidslinjeWrapperCallback(commandTidslinjeWrapper)
    }

    tidslinjerListChange = (tidslinjerList) => () => {
        this.props.tidslinjerListCallback(tidslinjerList)
    }


    titleListChange = (titleList) => () => {
       this.props.titleListCallback(titleList)
    }



    titleChange = (title) => () => {
        this.props.titleChangeCallback(title)
    }



    filteredTimelineListChange = (filteredTimelineListChange) => () => {
        this.props.tidslinjerListCallback(tidslinjerList)
    }
    refresh() {
        this.props.getChangesCallback();
    }
    render() {
        return (
            <Fragment>
 <div class="form-group centered">

    
                    <p class="h3">Comments       <i onClick={this.refresh} class="fa fa-refresh m-1" id="refreshComments"></i></p>
                    <p class="h3" style={{ marginTop: '10px' }}>Is a comment of following </p>
                    {this.state.ishighlighting && <div id="commentHighlight" style={{ overflowY: 'auto', width: '320px', height: '220px', marginTop: '10px' }} readonly> 
                        <span style={{ backgroundColor: 'white', color: 'black' }}>{JSON.parse(this.props.title).text.substring(0, this.state.highlightetcommentstart)}</span>
                        <span style={{ backgroundColor: 'lightskyblue', color: 'black' }}>{JSON.parse(this.props.title).text.substring(this.state.highlightetcommentstart, this.state.highlightetcommentend)}</span>
                        <span style={{ backgroundColor: 'white', color: 'black' }}>{JSON.parse(this.props.title).text.substring(this.state.highlightetcommentend, JSON.parse(this.props.title).text.length)}</span>
                       </div>
    }
    
    <div id="comments" class="container"></div>
                    {this.props.filteredtimelines.map((filteredtimeline) => (
                        <div class="card bg-outline-info text-dark  mt-5" id="{{filteredtimeline.user}}">

      <div class="card-body">

                {filteredtimeline && filteredtimeline.start
                    && filteredtimeline.end
                    && <p style={{ width: '50%', backgroundColor: 'lightskyblue' }} >
                                        <strong>Commenting</strong>: {JSON.parse(this.props.title).text.substring(filteredtimeline.start, filteredtimeline.end)}
                              </p>
        }
        <p>
          <strong>id</strong>: {filteredtimeline.id }
        </p>
         <p><strong>user</strong>: {filteredtimeline.user}</p>
        <p> <strong>timestampCreated</strong>:{filteredtimeline.timestampCreated} </p>
        <p> <strong>timestampChanged</strong>:{filteredtimeline.timestampChanged}</p>
        <p><strong> text</strong>:  {filteredtimeline.text}</p>
        <p> <strong>like</strong>: {String(filteredtimeline.like)}</p>
        <p> <strong>dislike</strong>: {String(filteredtimeline.dislike)}  </p>
        <p> <strong>deleted</strong>: {String(filteredtimeline.isdeleted)}</p>
                            <button type="button" onClick={this.changehighlightetcomment(Number(filteredtimeline.start), Number(filteredtimeline.end))} class="btn btn-info col-2 m-1 p-1">Highlight commented text</button>
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
                                <input class="form-control input-sm w-50" id="commentUserChange" placeholder=" user" value={this.state.toChange.user} /><br />

                            </div>
                            <div class="form-group">
                                <label for="commentComment"> Comment: </label>
                                <textarea class="form-control input-sm w-50" id="commentCommentChange" value={this.state.toChange.text} placeholder="Comment" rows="10">
                                </textarea>

                            </div>

                            <div class="form-group">
                                <header> Do I like this part of text?</header>
                                <div>
                                    <label for="likeYes">Like:</label> <input value="like" type="radio" checked={this.state.toChange.like} id="likeYesChange" name="likedislikeother" />  <br />
                                    <label for="dislikeYes">Dislike:</label> <input value="dislike" checked={this.state.toChange.dislike} type="radio" id="dislikeYesChange" name="likedislikeother" /><br />
                                    <label for="likeDislikeNo">Don't know:</label>  <input value="dontknow" checked={!this.state.toChange.dislike && !this.state.toChange.like} type="radio" id="likeDislikeNoChange" name="likedislikeother"  />

                                </div>
                            </div>
                        </form></ModalBody>
                    <ModalFooter>
                        <button type="button" class="btn btn-success" onClick={this.doChange}>Change</button>
                        <button type="button" class="btn btn-secondary" onClick={this.close} >Close</button>
                    </ModalFooter>
                </Modal>
                </Fragment>
        )
    }
}

