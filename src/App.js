import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainComponent from "./components/mainComponent"
import News from "./components/News";




export default function App() {
 
  
  return (
    <div className="App">
      <Router>
            <Routes>
                <Route exaxt path = "/" element={<MainComponent />} />
                  
                <Route exact path="/:id" element={<News />} />        
            </Routes>
      </Router>

      
      </div>
  )
  
}
 




