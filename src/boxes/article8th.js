import React from 'react'
import { Link } from 'react-router-dom'

export default function Article1st() {
 
    return (
      <div className="col">
        <div className="card">
          <img className="card-img" src={require('../imge/im-8.jpeg')} alt="Card cap"/>
          <div className="card-body">
            <p className='dark'>Electricity to power bitcoin surges to new heights as price gets Tesla boost</p>
            <Link to="/power" className="card-text" id='8'>Electricity</Link>
          </div>
        </div>
      </div>
        )
    }