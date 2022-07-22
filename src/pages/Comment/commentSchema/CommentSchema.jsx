
import React, { Fragment } from 'react'
export default class commentSchema extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ishighlighting: true,
            validUser: true,
            validText: true,
            validlikedislikeother:true,
            currentTitle: {
                id: 1,
                text: "sefesfseesf",
                title: "test",
                isdeleted: false
            },
            filteredtimelines: [],
            highlightetcommentstart: 3,
            highlightetcommentend: 5,
            selectStart: 3,
            selectEnd:10


        };
    }
    render() {
        return (
            <Fragment>
                <p class="h3" style={{ marginTop: '10px' }} >Commenting following text </p>


                <div id="isCommenting" style={{ overflowY: 'auto', width: '320px', height: '220px', marginTop: '10px' }} readonly>
                    <span style={{ backgroundColor: 'white', color: 'black' }} >{this.state.currentTitle.text.substring(0, this.state.selectStart) }</span>
                    <span style={{ backgroundColor: 'lightskyblue', color: 'black' }}>{this.state.currentTitle.text.substring(this.state.selectStart, this.state.selectEnd) }</span>
                    <span style={{ backgroundColor: 'white', color: 'black' }}>{this.state.currentTitle.text.substring(this.state.selectEnd, this.state.currentTitle.text.length) }</span>
                </div>
                <p class="h3" style={{ marginTop: '10px' }} >Create a comment </p>
                <section id="kommentar">
                    <form>
                    <div class="form-group">

                        <label for="commentUser"> User: </label>
                        <input class="form-control input-sm w-25" formControlName="user" id="commentUser" placeholder=" user" /><br/>
                            {!this.state.validUser && <span style={{color:'red'}} > Wrong input</span> }
                    </div>
                    <div class="form-group">
                        <label for="commentComment"> Comment: </label>
                        <textarea class="form-control input-sm w-25" formControlName="text" id="commentComment" placeholder="Comment" rows="10"></textarea>
                            {!this.state.validText && <span style={{ color: 'red' }} > Wrong input</span> }
                </div>

                <div class="form-group">
                    <header> Do I like this part of text?</header>
                    <div>
                        <label for="likeYes">Like:</label> <input formControlName="likedislikeother" value="like" type="radio" id="likeYes" name="likedislikeother"/>  <br/>
                            <label for="dislikeYes">Dislike:</label> <input formControlName="likedislikeother" value="dislike" type="radio" id="dislikeYes" name="likedislikeother"/><br/>
                                <label for="likeDislikeNo">Don't know:</label>  <input formControlName="likedislikeother" value="dontknow" type="radio" id="likeDislikeNo" name="likedislikeother" checked/><br/>
                                {!this.state.validlikedislikeother && <span style={{ color: 'red' }} > Wrong input</span>}
                      </div>

                            </div>
                                <div class="row">
                                    <button id="addTimeline" onClick="addNewComment()" class="btn btn-success col-1 m-1 p-1"><div class="text-wrap">Comment text</div></button>
                            </div>
                        </form>



                        </section>
            </Fragment>
        );
    }

}

