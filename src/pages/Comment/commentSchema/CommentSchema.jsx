
import React, { Fragment } from 'react'
export  default class commentSchema extends React.Component {
    render() {
        return (
            <Fragment>
                <p class="h3" style="margin-top: 10px">Commenting following text </p>


                <div id="isCommenting" style="overflow-y: auto;width:320px; height:220px; margin-top: 10px" readonly>
                    <span style="background-color:white ; color:black">{ currentTitle.text.substring(0, selectStart.valueOf()) }</span>
                    <span style="background-color: lightskyblue; color: black">{ currentTitle.text.substring(selectStart.valueOf(), selectEnd.valueOf()) }</span>
                    <span style="background-color:white ; color:black">{ currentTitle.text.substring(selectEnd.valueOf(), currentTitle.text.length) }</span>
                </div>
                <p class="h3" style="margin-top: 10px">Create a comment </p>
                <section id="kommentar">
                    <form>
                    <div class="form-group">

                        <label for="commentUser"> User: </label>
                        <input class="form-control input-sm w-25" formControlName="user" id="commentUser" placeholder=" user" /><br/>
                            {!validUser && <span style="color:red" > Wrong input</span> }
                    </div>
                    <div class="form-group">
                        <label for="commentComment"> Comment: </label>
                        <textarea class="form-control input-sm w-25" formControlName="text" id="commentComment" placeholder="Comment" rows="10"></textarea>
                            {!validText && <span style="color:red"> Wrong input</span> }
                </div>

                <div class="form-group">
                    <header> Do I like this part of text?</header>
                    <div>
                        <label for="likeYes">Like:</label> <input formControlName="likedislikeother" value="like" type="radio" id="likeYes" name="likedislikeother"/>  <br/>
                            <label for="dislikeYes">Dislike:</label> <input formControlName="likedislikeother" value="dislike" type="radio" id="dislikeYes" name="likedislikeother"/><br/>
                                <label for="likeDislikeNo">Don't know:</label>  <input formControlName="likedislikeother" value="dontknow" type="radio" id="likeDislikeNo" name="likedislikeother" checked/><br/>
                                            {!validlikedislikeother && <span style="color:red" > Wrong input</span>}
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

