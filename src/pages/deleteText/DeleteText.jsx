

import React, { Fragment } from 'react'
export default class DeleteText extends React.Component {
    render() {
        return (
            <Fragment>
                <main>




                    <div class="container">
                        <p class="h3" style="margin-top: 10px">Text titles </p>
                        <select #titleselectTitles style="width:150px; margin-top: 10px">
                            {titleList.map((tittel,indexVal)=>(<option value='{ tittel }'> { tittel }</option>))}
                    </select>
                    <br />
                    <button id="deleteText" onClick="deleteText()" class="btn btn-danger my-3 ">Delete text </button> <br/>
                </div>



            </main>
            </Fragment>
        )
    }

}

