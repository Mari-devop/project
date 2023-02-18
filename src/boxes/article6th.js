import React from 'react'
import { Link } from 'react-router-dom'

export default function Article1st() {
 
    return (
<div className="col">
        <div className="card">
          <img className="card-img" src={require('../imge/im-6.jpeg')} alt="Card cap"/>
          <div className="card-body">
            <p className='dark'>AppleвЂ™s Search for an Autonomous Vehicle Partner Continues. Who It Could Choose.</p>
            <Link to="/apple" className="card-text" id='6'>AppleSearch</Link>
          </div>
        </div>
      </div>
        )
    }