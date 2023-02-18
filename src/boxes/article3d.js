import React from 'react'
import { Link } from 'react-router-dom'

export default function Article3d() {
 
    return (
        <div className="col">
        <div className="card">
          <img className="card-img" src={require('../imge/im-3.jpeg')} alt="Card  cap"/>
          <div className="card-body">
            <p className='dark'>The Stock Market Keeps Rising. The Reasons to Be Hopeful Are Also the Reasons to Worry.</p>
            <Link to="/Market" className="card-text" id='3'>StockMarket</Link>
          </div>
        </div>
      </div>
    )
}