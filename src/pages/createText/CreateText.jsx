
import React, { Fragment } from 'react'
export default class CreateText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            validTitle: true,
            validText: true


        };
    }
    render() {
        return (
            <Fragment>
                <main>



                    <form>
                    <div class="container">
                            <header class="h1" style={{ marginTop: '20px' }} >Create a new text</header>
                        <div>
                            <div>
                                    <label for="textTitle" class="h2" style={{ marginTop: '20px' }} >Title </label><br />
                                    <input type="text" formControlName="title" placeholder="title" style={{ width:'210px', marginTop: '10px'}} id="textTitle"/>
                                    {!this.state.validtitle && <span style={{ color: 'red' }} > Wrong input</span>}
                            </div>
                        </div>
                        <div>
                                <label for="textToCreate" class="h2 " style={{ marginTop: '20px' }} >Text to comment </label><br />
                                <textarea id="textToCreate" formControlName="text" style={{ width: '320px', height: '320px', marginTop: '10px' }} > Create a text..
                            </textarea>
                                {!this.state.validText && <span style="color:red"> Wrong input</span>}
                    </div>

                        <button id="btnAddText" onClick="addNewText()" class="btn btn-success" style={{ marginTop: '20px' }} >Submit text</button>
            </div>
    </form >


  </main >
            </Fragment>
        )
    }

}

