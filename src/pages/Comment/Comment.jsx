
import  CommentList  from "./commentList/CommentList.jsx"
import  CommentSchema  from "./commentSchema/CommentSchema.jsx"
import CommentSearchInfo from "./commentSearchInfo/CommentSearchInfo.jsx"
import TitleSearch from "./titleSearch/titleSearch.jsx"
import axios from 'axios';
import React, { Fragment } from 'react'
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

            filteredtimelines:[{ id: 5, user: "tran", like: false, text: "rere" }, { id: 5, user: "tt", text: "jfjejej", like: true }],
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
            titleList: []


           };
           this.selectStartChange = this.selectStartChange.bind(this);
           this.selectEndChange = this.selectEndChange.bind(this);
           this.selectedTextChange = this.selectedTextChange.bind(this);
           this.commandTidslinjeWrapperChange = this.commandTidslinjeWrapperChange.bind(this);
           this.tidslinjerListChange = this.tidslinjerListChange.bind(this);
           this.titleListChange = this.titleListChange.bind(this);
           this.titleChange = this.titleChange.bind(this);
           this.filteredTimelineListChange = this.filteredTimelineListChange.bind(this);

           this.state.titleList = ["twtw", "trett", "sjokolade", "TEST"]
    }


    selectStartChange = (selectStart) => {
        this.setState({
            selectStart: selectStart
        });
        

    }


    refresh() {
        axios.post("")
            .then(res => {

            })
    }
    doChange() {

    }

    selectEndChange = (selectedEnd) => {
        console.log(selectedEnd)
        this.setState({
            selectEnd: selectedEnd
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
                                commandTidslinjeWrapper={this.state.commandTidslinjeWrapper}
                                tidslinjerList={this.state.tidslinjerList}
                                titleList={this.state.titleList}
                                title={this.state.title}
                                filteredtimelines={this.state.filteredtimelines}

                                selectStartChangeCallback={this.selectStartChange}
                                selectEndChangeCallback={this.selectEndChange}
                                selectedTextChangeCallback={this.selectedTextChange}
                                commandTidslinjeWrapperChangeCallback={this.commandTidslinjeWrapperChange}
                                tidslinjerListChangeCallback={this.tidslinjerListChange}
                                titleListChangeCallback={this.titleListChange}
                                titleChangeCallback={this.titleChange}
                                filteredTimelineListChangeCallback={this.filteredTimelineListChange}
                            ></TitleSearch>
                            <CommentSearchInfo
                                selectStart={this.state.selectStart}
                                selectEnd={this.state.selectEnd}
                                selectText={this.state.selectedText}
                                commandTidslinjeWrapper={this.state.commandTidslinjeWrapper}
                                tidslinjerList={this.state.tidslinjerList}
                                titleList={this.state.titleList}
                                title={this.state.title}
                                filteredtimelines={this.state.filteredtimelines}

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
                                commandTidslinjeWrapper={this.state.commandTidslinjeWrapper}
                                tidslinjerList={this.state.tidslinjerList}
                                titleList={this.state.titleList}
                                title={this.state.title}
                                filteredtimelines={this.state.filteredtimelines}

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
                            commandTidslinjeWrapper={this.state.commandTidslinjeWrapper}
                            tidslinjerList={this.state.tidslinjerList}
                            titleList={this.state.titleList}
                            title={this.state.title}
                            filteredtimelines={this.state.filteredtimelines}

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

