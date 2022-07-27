
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
            filteredtimelines: [],
            highlightetcommentstart: 10,
            highlightetcommentend: 0,
            selectStart: 0,
            selectEnd: 10,
            selectedText: "",
            commandTidslinjeWrapper: [],
            title:"sjoko"


           };
           this.selectStartChange = this.selectStartChange.bind(this);
           this.selectEndChange = this.selectEndChange.bind(this);
           this.selectedTextChange = this.selectedTextChange.bind(this);
           this.commandTidslinjeWrapperChange = this.commandTidslinjeWrapperChange.bind(this);
           this.tidslinjerListChange = this.tidslinjerListChange.bind(this);
           this.titleListChange = this.titleListChange.bind(this);
           this.titleChange = this.titleChange.bind(this);
           this.filteredTimelineListChange = this.filteredTimelineListChange.bind(this);
    }


    selectStartChange = (selectStart) => {
        this.setState({
            selectStart: selectStart
        });
        

    }

    componentDidMount() {
        // Load in list of titles
        // axios.post("")
        //      .then(res => {
        //     })  
    }
    doChange() {

    }

    selectEndChange = (selectedEnd) => {
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
        this.setState({
            title: title
        });
               //Get new title info
        //axios.post("")
        //    .then(res => {
        //    })  
    }




    filteredTimelineListChange = (tidslinjerList) => {
        this.setState({
            tidslinjerList: tidslinjerList
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
                                selectEnd={this.state.selectedEnd}
                                selectText={this.state.selectedText}
                                commandTidslinjeWrapper={this.state.commandTidslinjeWrapper}
                                tidslinjerList={this.state.tidslinjerList}
                                titleList={this.state.titleList}
                                title={this.state.title}
                                filteredTimeline={this.state.filteredTimeline}

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
                                selectEnd={this.state.selectedEnd}
                                selectText={this.state.selectedText}
                                commandTidslinjeWrapper={this.state.commandTidslinjeWrapper}
                                tidslinjerList={this.state.tidslinjerList}
                                titleList={this.state.titleList}
                                title={this.state.title}
                                filteredTimeline={this.state.filteredTimeline}

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
                                selectEnd={this.state.selectedEnd}
                                selectText={this.state.selectedText}
                                commandTidslinjeWrapper={this.state.commandTidslinjeWrapper}
                                tidslinjerList={this.state.tidslinjerList}
                                titleList={this.state.titleList}
                                title={this.state.title}
                                filteredTimeline={this.state.filteredTimeline}

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
                            selectEnd={this.state.selectedEnd}
                            selectText={this.state.selectedText}
                            commandTidslinjeWrapper={this.state.commandTidslinjeWrapper}
                            tidslinjerList={this.state.tidslinjerList}
                            titleList={this.state.titleList}
                            title={this.state.title}
                            filteredTimeline={this.state.filteredTimeline}

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

