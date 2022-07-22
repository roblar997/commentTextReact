
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
                text: "fafaffffffffffffffff",
                title: "test",
                isdeleted: false
            },
            filteredtimelines: [],
            highlightetcommentstart: 10,
            highlightetcommentend: 0,
            selectStart: 0,
            selectEnd: 10,
            titleList:["tt","tte"]


        };
    }
    render() {
        return (
            <Fragment>
            <div>
                    <p class="h3" style={{ marginTop: '10px' }} >Text titles </p>
                    <select id="titleselectTitles" style={{ width: '150px', marginTop: '10px' }} >
                        {this.state.titleList.map((tittel, indexVal) => (<option value={{ tittel } }> { tittel }</option>))}
                </select>

  </div >
                <button onClick="loadText()" id="btnGetText" class="btn btn-success" style={{ marginTop: '10px' }} > Load text</button >
                <input type="hidden" id="currentTitleId" value="-1" />

                </Fragment>
        )
    }


}

