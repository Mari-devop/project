import React from "react";
import Header from "../components/header";
import { Link } from 'react-router-dom'

import {useState, useEffect} from "react";
import {db} from "../firebase";
import {query, collection, onSnapshot} from "firebase/firestore";

const MainComponent = () => {
  const [data, setData] = useState([]);
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
    return(
        <div className="wrapper">
            
            <Header />
               
            <main className="main">
      
              {data.map(item => (
                   <div className="card" key={item.id}>
                   <img className="card-img" src={item.imageUrl} alt="Card cap"/>
                   <div className="card-body">
                     <h2 className='dark'>{item.title}</h2>
                       <Link to={`/${item.id}`} className="card-text">Link</Link>
                   </div>
                 </div>
              ))}
               
             
            </main>
          
    
    
           
        </div>
    )
}

export default MainComponent;