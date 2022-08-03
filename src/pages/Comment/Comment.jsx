
import  CommentList  from "./commentList/CommentList.jsx"
import  CommentSchema  from "./commentSchema/CommentSchema.jsx"
import CommentSearchInfo from "./commentSearchInfo/CommentSearchInfo.jsx"
import TitleSearch from "./titleSearch/titleSearch.jsx"
import axios from 'axios';
import React, { Fragment } from 'react'

export class FenwFeatureTree {
    size;
    tree= [];
    constructor(size) {
        this.size = size
        this.tree = []
        for (let i = 0; i < size; i++) {
            this.tree[i] = 0
        }
    }

    update(timeSlot, val) {
        if (timeSlot == 0) return //must start at 1
        while (timeSlot < this.size) {
            this.tree[timeSlot] += val
            timeSlot += timeSlot & (-timeSlot)
        }
    }



     query(timeSlot) {

            let returnVal = 0;

            while (timeSlot > 0) {
                returnVal += this.tree[timeSlot]
                timeSlot -= timeSlot & (-timeSlot)
            }
         return returnVal;
    }


     rangeQuery(l, r) {
        let ret = this.query(l - 1) - this.query(r)
        return ret
    }

    addTimeline(start, end) {
        //Inside, prefix sum adds 1 because it encounters slot=start
        this.update(start, 1);

        //When going outisde timeline (end+1), one add -1 to remember one dont longer
        //have added +1 when encountered start.
        // Only going to use prefix sum to count number of timelines that I am standing on, so
        // no range query needed
        //
        //--OFF TOPIC---
        //Range query gives then prefix sum to end - prefix sum to start:
        //NB! not needed for this class
        // (rangequery start inside timeline, rangequery end outside timeline): (1+(-1)) - 1 = -1
        // (rangequery start inside timeline, rangequery end inside timeline):  (1+0) - 1 = 0
        // (rangequery start outside timeline, rangequery end outside timeline):  (1+(-1)) - 0 = 0-0 =0
        // (rangequery start outside timeline, rangequery end inside timeline):  (1+0) - 0 = 1-0 =1
        //Because all timelines inside follow same logic, sum becomes 0.
        this.update(end + 1, -1);

    }
    //Do reverse update compared to adding
    removeTimeline(start, end) {
        this.update(start, -1);
        this.update(end + 1, 1);
    }

    getCountingList(start, stop) {
        let res = []

        for (let i = start; i <= stop; i++) {
            res.push(this.query(i))
        }
        return res;
    }





}

export default class Comment extends React.Component {

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
            tidslinjerList: [{ "id": 2, "user": "ddd", "start": 3, "end": 4, "text": "setset", "like": false, "dislike": false, "isdeleted": false, "texttocommentid": 1 }, { "id": 5, "user": "", "text": "", "like": false, "dislike": false, "isdeleted": false, "texttocommentid": 1 }, { "id": 6, "user": "", "text": "", "like": false, "dislike": false, "isdeleted": false, "texttocommentid": 1 }, { "id": 7, "user": "", "text": "", "like": false, "dislike": false, "isdeleted": false, "texttocommentid": 1 }, { "id": 8, "user": "", "text": "", "like": false, "dislike": false, "isdeleted": false, "texttocommentid": 1 }, { "id": 9, "user": "ff", "text": "ff", "like": false, "dislike": false, "isdeleted": false, "texttocommentid": 1 }, { "id": 10, "user": "", "text": "", "like": false, "dislike": false, "isdeleted": false, "texttocommentid": 1 }, { "id": 11, "user": "", "text": "", "like": false, "dislike": false, "isdeleted": false, "texttocommentid": 1 }, { "id": 12, "user": "", "text": "", "like": false, "dislike": false, "isdeleted": false, "texttocommentid": 1 }, { "id": 15, "user": "", "text": "", "like": false, "dislike": false, "isdeleted": false, "texttocommentid": 1 }, { "id": 16, "user": "", "text": "", "like": false, "dislike": false, "isdeleted": false, "texttocommentid": 1 }, { "id": 17, "user": "", "text": "", "like": false, "dislike": false, "isdeleted": false, "texttocommentid": 1 }, { "id": 23, "user": "", "text": "", "like": false, "dislike": false, "isdeleted": false, "texttocommentid": 1 }, { "id": 24, "user": "", "text": "", "like": false, "dislike": false, "isdeleted": false, "texttocommentid": 1 }, { "id": 25, "user": "EE", "text": "EEE", "like": true, "dislike": false, "isdeleted": false, "texttocommentid": 1 }, { "id": 26, "user": "", "text": "", "like": false, "dislike": false, "isdeleted": false, "texttocommentid": 1 }, { "id": 28, "user": "", "text": "", "like": false, "dislike": false, "isdeleted": false, "texttocommentid": 1 }, { "id": 29, "user": "", "text": "", "like": false, "dislike": false, "isdeleted": false, "texttocommentid": 1 }, { "id": 30, "user": "ff", "text": "ff", "like": false, "dislike": true, "isdeleted": false, "texttocommentid": 1 }, { "id": 31, "user": "", "text": "", "like": false, "dislike": false, "isdeleted": false, "texttocommentid": 1 }, { "id": 32, "user": "", "text": "", "like": false, "dislike": false, "isdeleted": false, "texttocommentid": 1 }, { "id": 33, "user": "", "text": "", "like": false, "dislike": false, "isdeleted": false, "texttocommentid": 1 }, { "id": 34, "user": "", "text": "", "like": false, "dislike": false, "isdeleted": false, "texttocommentid": 1 }, { "id": 35, "user": "", "text": "", "like": false, "dislike": false, "isdeleted": false, "texttocommentid": 1 }, { "id": 36, "user": "", "timestampCreated": 1656871687619, "timestampChanged": 1656871687619, "text": "", "like": false, "dislike": false, "isdeleted": false, "texttocommentid": 1 }, { "id": 39, "user": "wtwt", "timestampCreated": 1656871790359, "timestampChanged": 1656871790359, "start": 0, "end": 753, "text": "1", "like": true, "dislike": false, "isdeleted": false, "texttocommentid": 1 }, { "id": 41, "user": "", "timestampCreated": 1656872582130, "timestampChanged": 1656872582130, "start": 445, "end": 548, "text": "", "like": false, "dislike": false, "isdeleted": false, "texttocommentid": 1 }, { "id": 43, "user": "", "timestampCreated": 1656883410281, "timestampChanged": 1656883410281, "start": 633, "end": 711, "text": "", "like": false, "dislike": false, "isdeleted": false, "texttocommentid": 1 }, { "id": 44, "user": "", "timestampCreated": 1656883424718, "timestampChanged": 1656883424718, "start": 645, "end": 676, "text": "", "like": false, "dislike": false, "isdeleted": false, "texttocommentid": 1 }, { "id": 45, "user": "", "timestampCreated": 1656925390178, "timestampChanged": 1656925390178, "start": 445, "end": 577, "text": "", "like": false, "dislike": false, "isdeleted": false, "texttocommentid": 1 }, { "id": 46, "user": "ddd", "timestampCreated": 1656929431971, "timestampChanged": 1656929431971, "start": 347, "end": 389, "text": "dd", "like": false, "dislike": false, "isdeleted": false, "texttocommentid": 1 }, { "id": 47, "user": "ddd", "timestampCreated": 1656929490743, "timestampChanged": 1656929490743, "start": 203, "end": 288, "text": "dd", "like": false, "dislike": false, "isdeleted": false, "texttocommentid": 1 }, { "id": 48, "user": "ee", "timestampCreated": 1656930010787, "timestampChanged": 1656930010787, "start": 566, "end": 606, "text": "ee", "like": true, "dislike": false, "isdeleted": false, "texttocommentid": 1 }, { "id": 49, "user": "", "timestampCreated": 1656959612556, "timestampChanged": 1656959612556, "start": 719, "end": 753, "text": "", "like": false, "dislike": false, "isdeleted": false, "texttocommentid": 1 }, { "id": 50, "user": "", "timestampCreated": 1656959885027, "timestampChanged": 1656959885027, "text": "", "like": false, "dislike": false, "isdeleted": false, "texttocommentid": 1 }, { "id": 52, "user": "", "timestampCreated": 1656960358400, "timestampChanged": 1656960358400, "start": 7, "end": 10, "text": "", "like": true, "dislike": false, "isdeleted": false, "texttocommentid": 1 }, { "id": 54, "user": "", "timestampCreated": 1657017836736, "timestampChanged": 1657017842241, "start": 594, "end": 678, "text": "", "like": false, "dislike": true, "isdeleted": false, "texttocommentid": 1 }, { "id": 60, "user": "e", "timestampCreated": 1657025642195, "timestampChanged": 1657025642195, "start": 4, "end": 8, "text": "ee", "like": false, "dislike": false, "isdeleted": false, "texttocommentid": 1 }, { "id": 61, "user": "e", "timestampCreated": 1657025670929, "timestampChanged": 1657025670929, "start": 4, "end": 7, "text": "ee", "like": false, "dislike": false, "isdeleted": false, "texttocommentid": 1 }, { "id": 62, "user": "", "timestampCreated": 1657025793726, "timestampChanged": 1657025793726, "start": 5, "end": 9, "text": "", "like": false, "dislike": false, "isdeleted": false, "texttocommentid": 1 }, { "id": 63, "user": "ee", "timestampCreated": 1657025811350, "timestampChanged": 1657025811350, "start": 5, "end": 9, "text": "fe", "like": true, "dislike": false, "isdeleted": false, "texttocommentid": 1 }, { "id": 68, "user": "rrr", "timestampCreated": 1657026114523, "timestampChanged": 1657026114523, "start": 5, "end": 8, "text": "rrr", "like": true, "dislike": false, "isdeleted": false, "texttocommentid": 1 }, { "id": 69, "user": "rrr", "timestampCreated": 1657026172542, "timestampChanged": 1657026172542, "start": 3, "end": 10, "text": "rrr", "like": true, "dislike": false, "isdeleted": false, "texttocommentid": 1 }, { "id": 72, "user": "", "timestampCreated": 1657045474172, "timestampChanged": 1657045474172, "start": 5, "end": 8, "text": "", "like": false, "dislike": false, "isdeleted": false, "texttocommentid": 1 }, { "id": 76, "user": "ee", "timestampCreated": 1657047289818, "timestampChanged": 1657047289818, "start": 8, "end": 10, "text": "ee", "like": false, "dislike": true, "isdeleted": false, "texttocommentid": 1 }, { "id": 73, "user": "", "timestampCreated": 1657045541981, "timestampChanged": 1657055068370, "start": 0, "end": 10, "text": "", "like": false, "dislike": true, "isdeleted": false, "texttocommentid": 1 }],

            filteredtimelines:[{ id: 5, user: "tran", like: false, text: "rere",start:0,end:10 }, { id: 5, user: "tt", text: "jfjejej", like: true,start:0,end:5 }],
            highlightetcommentstart: 10,
            highlightetcommentend: 0,
            selectStart: 0,
            selectEnd: 10,
            selectedText: "",
            commandTidslinjeWrapper: [],
            title: JSON.stringify({
                id: 1,
                text: "",
                title: "test",
                isdeleted: false
            }),
            titleList: [],
            likes: 0,
            dislikes:0


           };
           this.selectStartChange = this.selectStartChange.bind(this);
           this.selectEndChange = this.selectEndChange.bind(this);
           this.selectedTextChange = this.selectedTextChange.bind(this);

           this.tidslinjerListChange = this.tidslinjerListChange.bind(this);
           this.titleListChange = this.titleListChange.bind(this);
           this.titleChange = this.titleChange.bind(this);
           this.filteredTimelineListChange = this.filteredTimelineListChange.bind(this);
           this.dislikesChange = this.dislikesChange.bind(this);
           this.likesChange = this.likesChange.bind(this);

           this.doChange = this.doChange.bind(this);
           this.state.titleList = ["twtw", "trett", "sjokolade", "TEST"]
    }


    selectStartChange = (selectStart) => {
        this.setState({
            selectStart: selectStart
        });
        

    }
    //Will make this a callback, and send it to childs.
    doChange(commandTidslinjeWrapper) {
        let nytidslinjeListe = JSON.parse(JSON.stringify(this.state.tidslinjerList));

        commandTidslinjeWrapper.forEach((commandtidslinjen) => {


            //  console.log("Got command " + commandtidslinjen.command + " with timeline:" + JSON.stringify(commandtidslinjen.tidslinje))
            if (String(commandtidslinjen.command) == "ADD") {
                console.log("Supposed to do changes to timelines here. ADD ")
                let tidslinjen = JSON.parse(JSON.stringify(commandtidslinjen.tidslinje));
                nytidslinjeListe.push(tidslinjen);
                //if (commandtidslinjen.tidslinje && commandtidslinjen.tidslinje.start && commandtidslinjen.tidslinje.end)
                    //this.currentFenwick.addTimeline(commandtidslinjen.tidslinje.start, commandtidslinjen.tidslinje.end)

                //Notify change to parrent, such that everyone now that we have a new tidslinje


            }
            else if (String(commandtidslinjen.command) == "CHANGE") {

                console.log("Supposed to do changes to timelines here. CHANGE ")
                let index = nytidslinjeListe.findIndex((x) => { return x.id == commandtidslinjen.tidslinje.id})
                nytidslinjeListe.splice(index, 1, commandtidslinjen.tidslinje)

                // console.log("State of tidslinje array: " + JSON.stringify(this.tidslinjerList));

            }
            else if (String(commandtidslinjen.command) == "REMOVE") {
                let index = nytidslinjeListe.findIndex((x) => { return x.id == commandtidslinjen.tidslinje.id })

                nytidslinjeListe.splice(index, 1)
                console.log("Supposed to do changes to timelines here. REMOVE ")
                if (commandtidslinjen.tidslinje && commandtidslinjen.tidslinje.start && commandtidslinjen.tidslinje.end)
                    this.currentFenwick.removeTimeline(commandtidslinjen.tidslinje.start, commandtidslinjen.tidslinje.end)



            }

        })
        //change to a updated version
        this.tidslinjerListChange(nytidslinjeListe);


        //let nyFiltered: tidslinje[] = this.filterListByTime(this.selectStart.getValue().valueOf(), this.selectEnd.getValue().valueOf(), this.percent.getValue().valueOf());
       // this.filteredtimelines.next(nyFiltered);

       // let likes: Number = this.countLikes(this.selectStart.getValue().valueOf(), this.selectEnd.getValue().valueOf(), this.percent.getValue());
       // let dislikes: Number = this.countDisLikes(this.selectStart.getValue().valueOf(), this.selectEnd.getValue().valueOf(), this.percent.getValue());
        //this.changelikes(likes);
       // this.changedislikes(dislikes);
    }
    refresh() {
        axios.post("")
            .then(res => {

            })
    }
 
    selectEndChange = (selectedEnd) => {
        console.log(selectedEnd)
        this.setState({
            selectEnd: selectedEnd
        });

    }

    likesChange = (likes) => {
        this.setState({
            likes: likes
        });
    }
    dislikesChange = (dislikes) => {
        this.setState({
            dislikes: dislikes
        });
    }

    selectedTextChange = (selectedText) => {
        this.setState({
            selectedText: selectedText
        });
    }

    commandTidslinjeWrapperChange = (commandTidslinjeWrapper) => {
        this.setState({
            commandTidslinjeWrapper: commandTidslinjeWrapper
        });
    }

    tidslinjerListChange = (tidslinjerList) => {
        this.setState({
            tidslinjerList: tidslinjerList
        });
    }
   

    titleListChange = (titleList) => {
        this.setState({
            titleList: titleList
        });
    }



    titleChange = (title) => {
        console.log("tt" + title);
        this.setState({
            title: title
        });
               //Get new title info
        //axios.post("")
        //    .then(res => {
        //    })  
    }




    filteredTimelineListChange = (filteredtimelines) => {
        this.setState({
            filteredtimelines: filteredtimelines
        });
    }

    render() {
        return (
            <Fragment>
                <main>



                    <div class="container">
                        <div>
                            <TitleSearch
                                selectStart={this.state.selectStart}
                                selectEnd={this.state.selectEnd}
                                selectText={this.state.selectedText}
                                tidslinjerList={this.state.tidslinjerList}
                                titleList={this.state.titleList}
                                title={this.state.title}
                                filteredtimelines={this.state.filteredtimelines}
                                likes={this.state.likes}
                                dislikes={this.state.dislikes}

                                likesChangeCallback={this.likesChange}
                                dislikesChangeCallback={this.dislikesChange}
                                selectStartChangeCallback={this.selectStartChange}
                                selectEndChangeCallback={this.selectEndChange}
                                selectedTextChangeCallback={this.selectedTextChange}
                                commandTidslinjeWrapperChangeCallback={this.commandTidslinjeWrapperChange}
                                tidslinjerListChangeCallback={this.tidslinjerListChange}
                                titleListChangeCallback={this.titleListChange}
                                titleChangeCallback={this.titleChange}
                                filteredTimelineListChangeCallback={this.filteredTimelineListChange}
                                doChangeCallback={this.doChange }
                            ></TitleSearch>
                            <CommentSearchInfo
                                selectStart={this.state.selectStart}
                                selectEnd={this.state.selectEnd}
                                selectText={this.state.selectedText}
                                tidslinjerList={this.state.tidslinjerList}
                                titleList={this.state.titleList}
                                title={this.state.title}
                                filteredtimelines={this.state.filteredtimelines}
                                likes={this.state.likes}
                                dislikes={this.state.dislikes}

                                doChangeCallback={this.doChange}
                                likesChangeCallback={this.likesChange}
                                dislikesChangeCallback={this.dislikesChange}
                                selectStartChangeCallback={this.selectStartChange}
                                selectEndChangeCallback={this.selectEndChange}
                                selectedTextChangeCallback={this.selectedTextChange}
                                commandTidslinjeWrapperChangeCallback={this.commandTidslinjeWrapperChange}
                                tidslinjerListChangeCallback={this.tidslinjerListChange}
                                titleListChangeCallback={this.titleListChange}
                                titleChangeCallback={this.titleChange}
                                filteredTimelineListChangeCallback={this.filteredTimelineListChange}>
                                </CommentSearchInfo>
                            <CommentSchema

                                selectStart={this.state.selectStart}
                                selectEnd={this.state.selectEnd}
                                selectText={this.state.selectedText}
                                tidslinjerList={this.state.tidslinjerList}
                                titleList={this.state.titleList}
                                title={this.state.title}
                                filteredtimelines={this.state.filteredtimelines}
                                likes={this.state.likes}
                                dislikes={this.state.dislikes}

                                doChangeCallback={this.doChange}
                                likesChangeCallback={this.likesChange}
                                dislikesChangeCallback={this.dislikesChange}
                                selectStartChangeCallback={this.selectStartChange}
                                selectEndChangeCallback={this.selectEndChange}
                                selectedTextChangeCallback={this.selectedTextChange}
                                commandTidslinjeWrapperChangeCallback={this.commandTidslinjeWrapperChange}
                                tidslinjerListChangeCallback={this.tidslinjerListChange}
                                titleListChangeCallback={this.titleListChange}
                                titleChangeCallback={this.titleChange}
                                filteredTimelineListChangeCallback={this.filteredTimelineListChange}>
                            </CommentSchema>
                        </div>

                        <CommentList

                            selectStart={this.state.selectStart}
                            selectEnd={this.state.selectEnd}
                            selectText={this.state.selectedText}
                            tidslinjerList={this.state.tidslinjerList}
                            titleList={this.state.titleList}
                            title={this.state.title}
                            filteredtimelines={this.state.filteredtimelines}
                            likes={this.state.likes}
                            dislikes={this.state.dislikes}

                            doChangeCallback={this.doChange}
                            likesChangeCallback={this.likesChange}
                            dislikesChangeCallback={this.dislikesChange}
                        selectStartChangeCallback={this.selectStartChange}
                        selectEndChangeCallback={this.selectEndChange}
                        selectedTextChangeCallback={this.selectedTextChange}
                        commandTidslinjeWrapperChangeCallback={this.commandTidslinjeWrapperChange}
                        tidslinjerListChangeCallback={this.tidslinjerListChange}
                        titleListChangeCallback={this.titleListChange}
                        titleChangeCallback={this.titleChange}
                        filteredTimelineListChangeCallback={this.filteredTimelineListChange}>

                    </CommentList>
                    </div>
                </main>
            </Fragment>
 )
    }

}

