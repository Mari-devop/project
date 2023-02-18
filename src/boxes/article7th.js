import React from 'react'
import { Link } from 'react-router-dom'

export default function Article1st() {
 
    return (
     <div className="col">
        <div className="card">
          <img className="card-img" src={require('../imge/im-7.jpeg')} alt="Card cap"/>
          <div className="card-body">
            <p className='dark'>Simon Property Group Tries to Turn the Corner on an Ugly Year for Malls</p>
            <Link to="/simon" className="card-text" id='7'>SimonProperty</Link>
          </div>
        </div>
      </div>    
        )
    }