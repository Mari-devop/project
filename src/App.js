import React from "react";
import './App.css';
import { BrowserRouter as Router, Link, Routes, Route} from "react-router-dom";
import Header from "./components/header";
import StockExchange from "./components/StockExchange";
import AppleSearch from "./components/AppleSearch"
import Bitcoin from "./components/Bitcoin"
import Electricity from "./components/Electricity"
import GameStop from "./components/GameStop"
import SimonProperty from "./components/SimonProperty"
import StockMarket from "./components/StockMarket"
import StocksClose from "./components/StocksClose"
import TopPension from "./components/TopPension"

export default function App() {
 
  return (
    <div className="App">
      <Router>
          <Header />
      
                
<main role="main">
<nav>
<div className="blog">
  <div className="blog-wrapper">

    <div className="row">

    <div className="col">
        <div className="card">
          <img className="card-img" src={require('./imge/im-1.jpeg')} alt="Card cap"/>
          <div className="card-body">
            <p>The New York Stock Exchange president says the stock market is not a casino. HereвЂ™s what academic research says.</p>
              <Link to="/stockexchange" className="card-text" >StockExchange</Link>
          </div>
        </div>
      </div>
     
        

      <div className="col">
        <div className="card">
          <img className="card-img" src={require('./imge/im-2.jpeg')} alt="Card  cap"/>
          <div className="card-body">
            <p>Bitcoin $50,000 milestone nears as worldвЂ™s No. 1 cryptocurrency rises in 2021</p>
            <Link to="/Bitcoin" className="card-text">Bitcoin</Link>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card">
          <img className="card-img" src={require('./imge/im-3.jpeg')} alt="Card  cap"/>
          <div className="card-body">
            <p>The Stock Market Keeps Rising. The Reasons to Be Hopeful Are Also the Reasons to Worry.</p>
            <Link to="/Market" className="card-text">StockMarket</Link>
          </div>
        </div>
      </div>
            
    </div>

    <div className="row">

      <div className="col">
        <div className="card">
          <img className="card-img" src={require('./imge/im-4.jpeg')} alt="Card  cap"/>
          <div className="card-body">
            <p>Stocks Close at New Records as Investors Bet on Vaccines</p>
            <Link to="/close" className="card-text">StocksClose</Link>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card">
          <img className="card-img" src={require('./imge/3.png')} alt="Card  cap"/>
          <div className="card-body">
            <p>A Top Pension Bought More GE, Zoom, and Pfizer Stock. HereвЂ™s What It Sold.</p>
            <Link to="/top" className="card-text">TopPension</Link>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card">
          <img className="card-img" src={require('./imge/im-6.jpeg')} alt="Card cap"/>
          <div className="card-body">
            <p>AppleвЂ™s Search for an Autonomous Vehicle Partner Continues. Who It Could Choose.</p>
            <Link to="/apple" className="card-text">AppleSearch</Link>
          </div>
        </div>
      </div>
            
    </div>

    <div className="row">

      <div className="col">
        <div className="card">
          <img className="card-img" src={require('./imge/im-7.jpeg')} alt="Card cap"/>
          <div className="card-body">
            <p>Simon Property Group Tries to Turn the Corner on an Ugly Year for Malls</p>
            <Link to="/simon" className="card-text">SimonProperty</Link>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card">
          <img className="card-img" src={require('./imge/im-8.jpeg')} alt="Card cap"/>
          <div className="card-body">
            <p>Electricity to power bitcoin surges to new heights as price gets Tesla boost</p>
            <Link to="/power" className="card-text">Electricity</Link>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card">
          <img className="card-img" src={require('./imge/im-9.jpeg')} alt="Card cap"/>
          <div className="card-body">
            <p>The GameStop Phenomenon Is Hardly New. HereвЂ™s How a Similar Squeeze Played Out in 1923</p>
            <Link to="/game" className="card-text">GameStop</Link>
          </div>
        </div>
      </div>
            
    </div>

  </div>
</div>
</nav>
</main>
<Routes>
        <Route exact path="/stockexchange" element={<StockExchange />} />        
        <Route exact path="/Bitcoin" element={<Bitcoin />} />   
        <Route exact path="/Market" element={<StockMarket />} />   
        <Route exact path="/close" element={<StocksClose />} />   
        <Route exact path="/top" element={<TopPension />} />   
        <Route exact path="/apple" element={<AppleSearch/>} />   
        <Route exact path="/simon" element={<SimonProperty />} />   
        <Route exact path="/power" element={<Electricity />} />   
        <Route exact path="/game" element={<GameStop />} />  
        
    </Routes>

    
</Router>

      


</div>
  );
}




