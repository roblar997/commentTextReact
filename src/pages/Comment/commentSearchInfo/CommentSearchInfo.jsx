
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
            selectEnd: 10,
            countingList: [],
            likes: 0,
            dislikes: 0,
            title: "toto"


        };
        this.selectStartChange = this.selectStartChange.bind(this);
        this.selectEndChange = this.selectEndChange.bind(this);
        this.selectedTextChange = this.selectedTextChange.bind(this);
        this.tidslinjerListChange = this.titleChange.bind(this);
        this.titleListChange = this.titleChange.bind(this);
        this.titleChange = this.titleChange.bind(this);
        this.filteredTimelineListChange = this.filteredTimelineListChange.bind(this);
    }
    selectStartChange = (selectStart) => () => {
        this.props.selectStartChangeCallback(selectStart)


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



    filteredTimelineListChange = (tidslinjerList) => () => {
        this.props.tidslinjerListCallback(tidslinjerList)
    }
    render() {
        return (
            <Fragment>
                <div>
                    <div class="form-group centered">
                        <p class="h3" style={{ marginTop: '10px' }} >Text to comment </p>
                        {this.state.currentTitle && this.state.currentTitle.text && <textarea id="textToComment" onMouseUp="captureSelected()" style={{overflowY: 'auto', width:'320px', height:'320px', marginTop: '10px'}} readonly>{this.state.currentTitle.text}</textarea>}
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
                        <label for="likes">Likes <i class="fa fa-thumbs-up" aria-hidden="true"><strong> {this.state.likes} </strong></i></label>

                        <input type="text" id="likes" readonly style={{ border: 0, color: 'black', fontWeight: 'bold' }} />
                    </p>
                    <p>
                        <label for="dislikes">Dislikes <i class="fa fa-thumbs-down" aria-hidden="true"><strong> {this.state.dislikes} </strong> </i></label>

                        <input type="text" id="dislikes" readonly style={{border:0, color:'black', fontWeight:'bold'}}/>
                    </p>
                    <p class="h3" style={{ marginTop: '10px' }} >Color map of comment density </p>

                    {this.state.countingList.map((value, indexVal) => (<span>
                        <div id="textDensityMap" style={{ overflowY: 'auto', width: '320px', height: '320px', marginTop: '10px' }} readonly>


                            {value.valueOf() >= 32 && <span style={{ backgroundColor: 'red' }} >{this.state.currentTitle.text[indexVal]}</span>}
                            {value.valueOf() >= 16 && value.valueOf() < 32 && <span style={{ backgroundColor: 'yellow' }} >{this.state.currentTitle.text[indexVal]}</span>}
                            {value.valueOf() >= 8 && value.valueOf() < 16 && <span style={{ backgroundColor: 'lightyellow' }} >{this.state.currentTitle.text[indexVal]}</span>}
                            {value.valueOf() >= 4 && value.valueOf() < 8 && <span style={{ backgroundColor: 'green' }} >{this.state.currentTitle.text[indexVal]}</span>}
                    
                            {value.valueOf() >= 2 && value.valueOf() < 4 && <span style={{ backgroundColor: 'lightgreen' }} > {this.state.currentTitle.text[indexVal]}</span>}
                            {value.valueOf() >= 1 && value.valueOf() < 2 && <span style={{ backgroundColor: 'lightskyblue' }} > {this.state.currentTitle.text[indexVal]}</span >}
                            {value.valueOf() == 0 && <span style={{ backgroundColor: 'white' }} > {this.state.currentTitle.text[indexVal]}</span >}

                        </div >      </span >))} 

  </div >
            </Fragment>
        )
    }
}
