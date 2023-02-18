import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import StockExchange from "./components/StockExchange";
import AppleSearch from "./components/AppleSearch"
import Bitcoin from "./components/Bitcoin"
import Electricity from "./components/Electricity"
import GameStop from "./components/GameStop"
import SimonProperty from "./components/SimonProperty"
import StockMarket from "./components/StockMarket"
import StocksClose from "./components/StocksClose"
import TopPension from "./components/TopPension"
import MainComponent from "./components/mainComponent"




export default function App() {
  
  return (
    <div className="App">
      <Router>
    
            <Routes>
                <Route exaxt path = "/" element={<MainComponent />} />
                <Route exact path="/stockexchange" element={<StockExchange />} />     
                <Route exact path="/bitcoin" element={<Bitcoin />} />   
                <Route exact path="/market" element={<StockMarket />} />   
                <Route exact path="/close" element={<StocksClose />} />   
                <Route exact path="/top" element={<TopPension />} />   
                <Route exact path="/apple" element={<AppleSearch/>} />   
                <Route exact path="/simon" element={<SimonProperty />} />   
                <Route exact path="/power" element={<Electricity />} />   
                <Route exact path="/game" element={<GameStop />} />         
            </Routes>
      </Router>

      
      </div>
  )
  
}





