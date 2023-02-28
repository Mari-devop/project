import React from "react";
import Header from "./header";
import {Link} from "react-router-dom"
import {useState, useEffect} from "react";
import {db} from "../firebase";
import {query, collection, onSnapshot} from "firebase/firestore";
import { useParams } from "react-router-dom";

const News = () => {  
    const {id} = useParams();
    const [data, setData] = useState([]);
    const [post, setPost] = useState({});

    useEffect(() =>{
    const q = query(collection(db, 'first'));
    const unsubscribe = onSnapshot(q, queryCollection  => {
      let arr =[];
      queryCollection.forEach(doc => {
        arr.push({...doc.data(), id: doc.id});
      });
      console.log(arr);
      setData(arr);
  
    })
    return () =>{
      unsubscribe();
    }
  }, []);

  useEffect(() =>{
    const p = data.find(doc => doc.id === id)
    setPost (p);

  }, [data, id])


    return (
        
        <div className="contain">
              {post ? 

              <div className="article">
              <Link to={"/"}> <Header /></Link>
              <h1 className="article-title">{post.title} </h1>
              <img className="article-img" src={post.imageUrl} alt="Card cap" />
              <p className="article-text">{post.description}</p>

              <div className="form-group">
                  <label htmlFor="comment-body">Expert comment</label>
                  <p>{post.expertComment}</p>
              </div>
          
          </div>: ""
            }
                    
                    
    </div>

    );
       
}
export default News;