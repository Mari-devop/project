import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const CommentPage = ()=>{
    

    return (
<div className="contain">
        <div className="col-lg-6">
            <div id="comment-field"></div>
        </div>
        <div className="col-lg-6">
            <form>
                <div className="form-group">
                    <label for="comment-name">Name:</label>
                    <input 
                        type="name"
                        className="form-control"
                        id="comment-name"
                        placeholder="Your name"
                    />
                </div>
                <div className="form-group">
                    <label for="comment-body">Comment:</label>
                    <input 
                        type="name"
                        className="form-control"
                        id="comment-body"
                        placeholder="comment"
                    />
                </div>
                <div className="form-group text-right">
                    
                    <button 
                    type="submit"
                    id="comment-add"
                    className="btn btn-primary"
                    >
                        ADD
                    </button>
                </div>
            </form>
        </div>
</div>

    );
       
}
export default CommentPage;