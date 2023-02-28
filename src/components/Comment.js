import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Record from "./Record.json"
import { useParams } from "react-router-dom";

const CommentPage = ()=>{
    const {title} = useParams();
return (
    <div className="contain">

        {
            Record && Record.map(record =>{
                return(
                
            <div className="col-lg-6" key={record.title}>
            
                    
                    <div className="form-group">
                        <label key={title} for="comment-body">Expert comment</label>
                        <p>{record.expertComment}</p>
                    </div>
                    
                
            </div>
                )
            })
        }
            
    </div>

    );
       
}
export default CommentPage;