import React from 'react'
import { Link } from 'react-router-dom'

export default function Article1st() {
 
    return (
        <div className="col">
        <div className="card">
          <img className="card-img" src={require('../imge/im-9.jpeg')} alt="Card cap"/>
          <div className="card-body">
            <p className='dark'>The GameStop Phenomenon Is Hardly New. HereвЂ™s How a Similar Squeeze Played Out in 1923</p>
            <Link to="/game" className="card-text" id='9'>GameStop</Link>
          </div>
        </div>
      </div>
        )
    }