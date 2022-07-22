
import React, { Fragment } from 'react'
export default class titelSearch extends React.Component {
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
            <Fragment>
            <div>
                <p class="h3" style="margin-top: 10px">Text titles </p>
                <select id="titleselectTitles" style="width:150px; margin-top: 10px">
                    {titleList.map((tittel, indexVal)=> (<option  value='{ tittel }'> { tittel }</option>))}
                </select>

  </div >
            <button onClick= "loadText()" id="btnGetText" class="btn btn-success" style = "margin-top:10px" > Load text</button >
                <input type="hidden" id="currentTitleId" value="-1" />

                </Fragment>
        )
    }


}

