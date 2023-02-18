import React from 'react'
import { Link } from 'react-router-dom'

export default function Article1st() {
 
    return (
<div className="col">
<div className="card">
  <img className="card-img" src={require('../imge/im-1.jpeg')} alt="Card cap"/>
  <div className="card-body">
    <p className='dark'>The New York Stock Exchange president says the stock market is not a casino. HereвЂ™s what academic research says.</p>
      <Link to="/Stockexchange" className="card-text" id='1'>StockExchange</Link>
  </div>
</div>
</div>
    )
}