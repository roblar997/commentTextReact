
import  CommentList  from "./commentList/CommentList.jsx"
import  CommentSchema  from "./commentSchema/CommentSchema.jsx"
import CommentSearchInfo from "./commentSearchInfo/CommentSearchInfo.jsx"
import TitleSearch from "./titleSearch/titleSearch.jsx"
import React, { Fragment } from 'react'
export default class Comment extends React.Component {
    render() {
        return (
            <Fragment>
                <main>



                    <div class="container">
                        <div>
                            <TitleSearch></TitleSearch>
                            <Commentsearchinfo ></Commentsearchinfo>

                            <Commentschema></Commentschema>
                        </div>

                        <Commentlist></Commentlist>
                    </div>
                </main>
            </Fragment>
 )
    }

}

