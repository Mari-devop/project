import React from 'react'
import { Link } from 'react-router-dom'

export default function Article1st() {
 
    return (
<div className="col">
<div className="card">
  <img className="card-img" src={require('../imge/im-3.jpeg')} alt="Card cap"/>
  <div className="card-body">
    <p className='dark'>A Top Pension Bought More GE, Zoom, and Pfizer Stock. HereвЂ™s What It Sold.</p>
      <Link to="/top" className="card-text" id='5'>TopPension</Link>
  </div>
</div>
</div>
        
        )
    }