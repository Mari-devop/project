import React from 'react'
import { Link } from 'react-router-dom'

export default function Article2nd() {
 
return (
    <div className="col">
        <div className="card">
          <img className="card-img" src={require('../imge/im-2.jpeg')} alt="Card cap"/>
          <div className="card-body">
            <p className='dark'>Bitcoin $50,000 milestone nears as worldвЂ™s No. 1 cryptocurrency rises in 2021</p>
            <Link to="/Bitcoin" className="card-text" id='2'>Bitcoin</Link>
          </div>
        </div>
    </div>
    )
}