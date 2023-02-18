import React from 'react'
import { Link } from 'react-router-dom'

export default function Article1st() {
 
    return (
        <div className="col">
        <div className="card">
          <img className="card-img" src={require('../imge/im-4.jpeg')} alt="Card  cap"/>
          <div className="card-body">
            <p className='dark'>Stocks Close at New Records as Investors Bet on Vaccines</p>
            <Link to="/close" className="card-text" id='4'>StocksClose</Link>
          </div>
        </div>
      </div>
    )
}