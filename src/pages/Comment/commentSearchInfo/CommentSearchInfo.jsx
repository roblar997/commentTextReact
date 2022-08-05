
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
            percent:100


        };
        this.selectStartChange = this.selectStartChange.bind(this);
        this.selectEndChange = this.selectEndChange.bind(this);
        this.selectedTextChange = this.selectedTextChange.bind(this);
        this.tidslinjerListChange = this.titleChange.bind(this);
        this.titleListChange = this.titleChange.bind(this);
        this.titleChange = this.titleChange.bind(this);
        this.percentChange = this.percentChange.bind(this);
        this.filteredTimelineListChange = this.filteredTimelineListChange.bind(this);
        this.captureSelected = this.captureSelected.bind(this);
        this.filterListByTime = this.filterListByTime.bind(this);
        this.dislikesChange = this.dislikesChange.bind(this);
        this.likesChange = this.likesChange.bind(this);
        this.countLikes = this.countLikes.bind(this);
        this.countDisLikes = this.countDisLikes.bind(this);
        this.doChange = this.doChange.bind(this);
      
    }
    selectStartChange = (selectStart)  => {

        this.props.selectStartChangeCallback(selectStart)


    }
    doChange(commandTidslinjeWrapper) {
        this.props.doChangeCallback(commandTidslinjeWrapper)
    }
    captureSelected = (target) =>{

        this.selectStartChange(target.selectionStart);
        this.selectEndChange(target.selectionEnd);
        let filtered = this.filterListByTime(this.props.selectStart, this.props.selectEnd, this.state.percent);
        console.log(filtered);
        this.filteredTimelineListChange(filtered)

        let likes = this.countLikes(this.props.selectStart, this.props.selectEnd, this.state.percent);
        let dislikes = this.countDisLikes(this.props.selectStart, this.props.selectEnd, this.state.percent);

        this.likesChange(likes);
        this.dislikesChange(dislikes);

    }
    selectEndChange = (selectedEnd) => {

        this.props.selectEndChangeCallback(selectedEnd)

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

    percentChange = (target) => {

        this.setState({ percent: target.value })
        let filtered = this.filterListByTime(this.props.selectStart, this.props.selectEnd, this.state.percent);
        console.log(filtered);
        this.filteredTimelineListChange(filtered)
        let likes = this.countLikes(this.props.selectStart, this.props.selectEnd, this.state.percent);
        let dislikes = this.countDisLikes(this.props.selectStart, this.props.selectEnd, this.state.percent);

        this.likesChange(likes);
        this.dislikesChange(dislikes);
        
    }

    titleChange = (title) => () => {
  
        this.props.titleChangeCallback(title)
    }
    likesChange = (likes) => {
        this.props.likesChangeCallback(likes);
    }
    dislikesChange = (dislikes) => {
        this.props.dislikesChangeCallback(dislikes);
    }
    filterListByTime = (start, end, percent) => {
        console.log(start+ " " + end)
        return this.props.tidslinjerList.filter((x) => {

            if (x.start != undefined && x.end != undefined)
                return x.start >= start && x.end <= end && ((x.start - x.end) / (start - end)) * 100 >= percent;
            else
                return false;
        })

    }

    countLikes = (start, end, percent) => {
        let timeLinesFilteredTime = this.filterListByTime(start, end, percent);
        return timeLinesFilteredTime.reduce((nmbLikes, timeline) => {
            if (timeline.like) return nmbLikes + 1;
            else return nmbLikes;
        }, 0.0)
    }


    countDisLikes = (start, end, percent) => {
        let timeLinesFilteredTime = this.filterListByTime(start, end, percent);
        return timeLinesFilteredTime.reduce((nmbDisLike, timeline) => {
            if (timeline.dislike) return nmbDisLike + 1;
            else return nmbDisLike;
        }, 0.0)
    }
    filteredTimelineListChange = (filteredList)  => {
        this.props.filteredTimelineListChangeCallback(filteredList)
    }
    render() {
        return (
            <Fragment>
                <div>
                    <div class="form-group centered">
                        <p class="h3" style={{ marginTop: '10px' }} >Text to comment </p>
                        {JSON.parse(this.props.title).title && JSON.parse(this.props.title).text && <textarea id="textToComment" onMouseUp={(e)=>this.captureSelected(e.target)} style={{ overflowY: 'auto', width: '320px', height: '320px', marginTop: '10px' }} value={JSON.parse(this.props.title).text}></textarea> }}
                        {!(JSON.parse(this.props.title).title && JSON.parse(this.props.title).text) && <textarea style={{ overflowY: 'auto', width: '320px', height: '320px', marginTop: '10px' }} readonly>
                            Choose a title and press load text, to get it pasted in here
                        </textarea>}

                    </div>

                    <p class="h3" style={{ marginTop: '10px' }} >Search for comments by marking text </p>
                    <label for="percentEle">
                        <strong>Percent(%) </strong>: Adjust this value to capture more comments inside.<br />
                        100% requires full match of comment. Lesser values capture smaller <br /> comments inside area
                    </label>
                    <input class="form-control input-sm w-25 " type="number" value={this.state.percent}  onChange={(e)=>this.percentChange(e.target)} id="percentEle" />
                    <p>
                        <label for="likes">Likes <i class="fa fa-thumbs-up" aria-hidden="true"><strong> {this.props.likes} </strong></i></label>

                        <input type="text" id="likes" readonly style={{ border: 0, color: 'black', fontWeight: 'bold' }} />
                    </p>
                    <p>
                        <label for="dislikes">Dislikes <i class="fa fa-thumbs-down" aria-hidden="true"><strong> {this.props.dislikes} </strong> </i></label>

                        <input type="text" id="dislikes" readonly style={{border:0, color:'black', fontWeight:'bold'}}/>
                    </p>
                    <p class="h3" style={{ marginTop: '10px' }} >Color map of comment density </p>

                    {this.props.countingList.map((value, indexVal) => (
<span id="textDensityMap" style={{ overflowY: 'auto', width: '320px', height: '320px', marginTop: '10px' }} readonly>
{value.valueOf() >= 32 && <span style={{ backgroundColor: 'red' }} value={JSON.parse(this.props.title).text[indexVal] }></span>}
{value.valueOf() >= 16 && value.valueOf() < 32 && <span style={{ backgroundColor: 'yellow' }} >{JSON.parse(this.props.title).text[indexVal]}</span>}
{value.valueOf() >= 8 && value.valueOf() < 16 && <span style={{ backgroundColor: 'lightyellow' }} >{JSON.parse(this.props.title).text[indexVal]}</span>}
{value.valueOf() >= 4 && value.valueOf() < 8 && <span style={{ backgroundColor: 'green' }} >{JSON.parse(this.props.title).text[indexVal]}</span>}
{value.valueOf() >= 2 && value.valueOf() < 4 && <span style={{ backgroundColor: 'lightgreen' }}>{JSON.parse(this.props.title).text[indexVal]}</span>}
{value.valueOf() >= 1 && value.valueOf() < 2 && <span style={{ backgroundColor: 'lightskyblue' }}>{JSON.parse(this.props.title).text[indexVal]}</span >}
{value.valueOf() == 0 && <span style={{ backgroundColor: 'white' }}>{JSON.parse(this.props.title).text[indexVal]}</span >}</span >))} </div >
            </Fragment>
        )
    }
}
