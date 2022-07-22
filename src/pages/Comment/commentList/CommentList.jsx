

import React, { Fragment } from 'react'

export default class CommentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ishighlighting: true,
            currentTitle: {
              id: 1,
              text: "",
              title: "test",
              isdeleted: false
            },
            filteredtimelines: [],
            highlightetcommentstart: 10,
            highlightetcommentend: 0


        };
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
    {this.state.filteredtimelines.map((filteredtimeline)=>(
    <div  class="card bg-outline-info text-dark  mt-5" id='{filteredtimeline.id}'>

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
        <button type="button" onClick="getChangbox(filteredtimeline.id )" data-bs-toggle="modal" data-bs-target="#myModal" class="btn btn-warning col-1 m-1 p-1">Change</button>
        <button type="button" onClick="removeById(filteredtimeline.id)" class="btn btn-danger col-1 m-1 p-1">Remove</button>

      </div>
    </div>
    ))}
  </div>
                </Fragment>
        )
    }
}

