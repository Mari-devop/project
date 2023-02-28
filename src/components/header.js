import React from "react";
import { Outlet } from "react-router-dom";


export default function Header (){
 
    return (
        <div> <header className="App-header">
        <div className="navbar">
          <div className="container">
            <button className="navbar-link"> SHARETRADE.COM </button>
          </div>
        </div>
        </header>
        <Outlet/>
        </div>


    )
}

