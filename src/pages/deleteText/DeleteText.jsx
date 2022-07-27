

import React, { Fragment } from 'react'
export default class DeleteText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            titleList: []


        };
    }
    deleteText() {
        axios.post("")
            .then(res => {
            })  
    }
    render() {
        return (
            <Fragment>
                <main>




                    <div class="container">
                        <p class="h3" style={{ marginTop: '10px' }} >Text titles </p>
                        <select id="titleselectTitles" style={{ width: '150px', marginTop: '10px' }} >
                            {this.state.titleList.map((tittel,indexVal)=>(<option value='{ tittel }'> { tittel }</option>))}
                    </select>
                    <br />
                    <button id="deleteText" onClick="deleteText()" class="btn btn-danger my-3 ">Delete text </button> <br/>
                </div>



            </main>
            </Fragment>
        )
    }

}

