import React, { Component } from 'react';
import ReactDom from 'react-dom';
import CommentAdd from './CommentAdd';
import Comment from './Comment';
import axios from 'axios';

class CommentGroup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: []
        }
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }
    handleCommentSubmit(data) {
        const postData = {
            comments: data
        };
        axios.post('api/comment', postData).then(response => {

            this.setState(({ oldcomments }) => {
                const newid = oldcomments[oldcomments.length - 1].id + 1;
                const newcomment = { id: newid, body: data }

                return { comments: [...oldcomments, newcomment] }
            });
        }).catch(e => {
            alert(console.error("ErrorR"))
        });


    }
    renderComments() {
        const { comments } = this.state;
        return comments.map(comment => {
            const { id, body } = comment;
            return (
                <Comment key={id} body={body} />

            );
        })
    }
    render() {
        return (
            <div>
                {this.renderComments()}
                <CommentAdd handleCommentSubmit={this.handleCommentSubmit} />
            </div>
        )
    }
}

export default CommentGroup;

// if (document.getElementById('comments-wrapper')) {
//     ReactDom.render(<CommentGroup />, document.getElementById('comments-wrapper'))
// }