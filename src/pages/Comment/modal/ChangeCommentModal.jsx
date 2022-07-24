
import React, { Fragment } from 'react'
export default class ChangeCommentModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {



        };
    }
    render() {
        return (
            <Fragment>
               <div class="modal-content">
  <div class="modal-header">
    <h4 class="modal-title" id="modal-basic-title">Change comment </h4>
  </div>
  <div class="modal-body">
    <form >
      <div class="form-group">
        <label for="commentUser"> User: </label>
        <input class="form-control input-sm w-50" id="commentUserChange" placeholder=" user" /><br/>
        <span style="color:red" >
           Wrong input
        </span>
      </div>
      <div class="form-group">
        <label for="commentComment"> Comment: </label>
        <textarea class="form-control input-sm w-50" id="commentCommentChange" placeholder="Comment" rows="10">
  </textarea>
        <span style="color:red"> Wrong input</span>
      </div>

      <div class="form-group">
        <header> Do I like this part of text?</header>
        <div>
          <label for="likeYes">Like:</label> <input  value="like" type="radio" id="likeYesChange" name="likedislikeother"/>  <br/>
          <label for="dislikeYes">Dislike:</label> <input  value="dislike" type="radio" id="dislikeYesChange" name="likedislikeother"/><br/>
          <label for="likeDislikeNo">Don't know:</label>  <input value="dontknow" type="radio" id="likeDislikeNoChange" name="likedislikeother" checked/>
          <span style="color:red" > Wrong input</span>
        </div>
      </div>
    </form>
  </div>

  <div class="modal-footer">

    <button type="button" class="btn btn-success">Change</button>
    <button type="button" class="btn btn-secondary"> Close</button >
  </div >

</div >
            </Fragment>
        );
    }

}

