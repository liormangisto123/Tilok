import React, {useState} from 'react';
// import './css/Comment.css'

function CommentAdd(props) {
    const { handleCommentSubmit } = props;
    const [comment,setComment]=useState('');
    return (
        <form action="/api/comment" method="POST"> 
        <div className="Commands">
            <div className="card mt-4 mb-3">
                <div className="card-header"><strong>Comments</strong></div>
                <div className="card-body">
                    <textarea name="comment" className="form-control" placeholder="Add a new comment"
                        onChange={event => setComment(event.target.value)} value={comment}></textarea>
                </div>
            </div>
            <div>
                <button className="btn btn-primary mr-3" onClick={event => {
                    handleCommentSubmit(comment);
                    setComment('');

                }}>Comment</button>
                {/* <button className="btn btn-warning">Close issue</button> */}
            </div>
        </div>
        </form>

    );
}

export default CommentAdd;