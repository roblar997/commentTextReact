
import React, { Fragment } from 'react'
export default class commentSearchInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ishighlighting: true,
            validUser: true,
            validText: true,
            validlikedislikeother: true,
            currentTitle: {
                id: 1,
                text: "",
                title: "test",
                isdeleted: false
            },
            filteredtimelines: [],
            highlightetcommentstart: 10,
            highlightetcommentend: 0,
            selectStart: 0,
            selectEnd: 10


        };
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <div class="form-group centered">
                        <p class="h3" style={{ marginTop: '10px' }} >Text to comment </p>
                        {this.state.currentTitle && this.state.currentTitle.text && <textarea id="textToComment" onMouseUp="captureSelected()" style={{overflowY: 'auto', width:'320px', height:'320px', marginTop: '10px'}} readonly>{currentTitle.text}</textarea>}
                        {!(this.state.currentTitle && this.state.currentTitle.text) && <textarea style={{ overflowY: 'auto', width: '320px', height: '320px', marginTop: '10px' }} readonly>
                            Choose a title and press load text, to get it pasted in here
                        </textarea>}

                    </div>

                    <p class="h3" style={{ marginTop: '10px' }} >Search for comments by marking text </p>
                    <label for="percentEle">
                        <strong>Percent(%) </strong>: Adjust this value to capture more comments inside.<br />
                        100% requires full match of comment. Lesser values capture smaller <br /> comments inside area
                    </label>
                    <input class="form-control input-sm w-25 " type="number" onChange="percentChange()" id="percentEle" value="100" />
                    <p>
                        <label for="likes">Likes <i class="fa fa-thumbs-up" aria-hidden="true"><strong> {likes} </strong></i></label>

                        <input type="text" id="likes" readonly style={{ border: 0, color: 'black'; fontWeight: 'bold' }} />
                    </p>
                    <p>
                        <label for="dislikes">Dislikes <i class="fa fa-thumbs-down" aria-hidden="true"><strong> {dislikes} </strong> </i></label>

                        <input type="text" id="dislikes" readonly style="border:0; color:black; font-weight:bold;"/>
                    </p>
                    <p class="h3" style="margin-top: 10px">Color map of comment density </p>

                    {countingList.map((value, indexVal) => (<span>
                        <div id="textDensityMap" style={{ overflowY: 'auto', width: '320px', height: '320px', marginTop: '10px' }} readonly>


                            {value.valueOf() >= 32 && <span style='background-color:red'>{currentTitle.text[indexVal]}</span>}
                            {value.valueOf() >= 16 && value.valueOf() < 32 && <span style='background-color: yellow'>{currentTitle.text[indexVal]}</span>}
                    {value.valueOf() >= 8 && value.valueOf() < 16 && <span style='background-color: lightyellow'>{currentTitle.text[indexVal]}</span>}
                    {value.valueOf() >= 4 && value.valueOf() < 8 && <span style='background-color: green'>{currentTitle.text[indexVal]}</span>}
                    
                            {value.valueOf() >= 2 && value.valueOf() < 4 && <span style='background-color: lightgreen' > {currentTitle.text[indexVal]}</span>}
                            {value.valueOf() >= 1 && value.valueOf() < 2  && <span  style = 'background-color: lightskyblue' > {currentTitle.text[indexVal]}</span >}
                            {value.valueOf() == 0 &&  <span  style = 'background-color:white' > {currentTitle.text[indexVal]}</span >}

                        </div >      </span >))} 

  </div >
            </React.Fragment>
        )
    }
}
