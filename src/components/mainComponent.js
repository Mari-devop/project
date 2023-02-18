import React from "react";
import Header from "../components/header";
import Article1st from "../boxes/article1st"
import Article2nd from "../boxes/article2nd"
import Article3d from "../boxes/article3d"
import Article4th from "../boxes/article4th"
import Article5th from "../boxes/article5th"
import Article6th from "../boxes/article6th"
import Article7th from "../boxes/article7th"
import Article8th from "../boxes/article8th"
import Article9th from "../boxes/article9th"


const MainComponent = () => {
    return(
        <div className="wrapper">
            
            <Header />
      
                
      <main role="main">
      <nav>
          <div className="row">
            <Article1st />
            <Article2nd />
            <Article3d />   
          </div>
      
          <div className="row">
            <Article4th />
            <Article5th />
            <Article6th />       
          </div>
      
          <div className="row">
            <Article7th />
            <Article8th />
            <Article9th />         
          </div>
      </nav>
      </main>
      
           
        </div>
    )
}

export default MainComponent;