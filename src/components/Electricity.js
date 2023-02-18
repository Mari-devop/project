import React from 'react';
import Header from './header';
import {Link} from "react-router-dom"
import CommentPage from "./CommentPage"

const Electricity =()=>{
    
        return (
            <div className='article'>
                <Link to={"/"}> <Header /></Link>
                <h1>Electricity to power bitcoin surges to new heights as price gets Tesla boost</h1>
                <img className="card-img" src={require('../imge/im-8.jpeg')} alt="Card cap"/>
                <p>TeslaвЂ™s disclosure that it has purchased $1.5 billion of bitcoin has had the effect of sending the estimated electricity consumption of the cryptocurrency to new levels.\r\n\r\nThe University of CambridgeвЂ™s Centre for Alternative Finance attempts to keep track of bitcoin energy consumption. While the exact consumption can never be known, a guess can be produced by tracking the total number of hashes produced by miners and looking at the efficiency of bitcoin mining equipment. The hash rate is the measuring unit of the processing power of the bitcoin network.\r\n\r\nAt an estimated 121.9 annualized terawatt hours, bitcoin now requires more electricity than Argentina, the United Arab Emirates or the Netherlands did for all of 2016. According to the University of CambridgeвЂ™s calculations, one yearвЂ™s worth of bitcoin electricity consumption could power all the tea kettles of the U.K. for 27 years.\r\n\r\nWith bitcoin BTCUSD, +1.86% surging as high as $48,219 on Tuesday, a day after electric-car maker Tesla TSLA, +0.55% disclosed its investment in the cryptocurrency, it is more profitable to use less-efficient equipment.\r\n\r\nAbout two-thirds of all bitcoins are mined in China, and a third of that is in Xinjiang, which has cheap coal power. The number-two center of Chinese bitcoin is in Sichuan, home of the Three Gorges Dam, the largest hydroelectric dam in existence.\r\n\r\nThe U.S. is in second place at just 7%, according to the University of Cambridge data, followed by Russia and Kazakhstan.\r\n\r\nвЂњThe obstacle that needs to be addressed is ensuring there are clean and/or efficient energy sources available for miners to tap into, especially during peak periods. With greater demand comes greater cost per KW, therefore incentivizing use of seldom-used coal or gas-fired plants that are falling out of favor from an environmental and economic perspective,вЂќ said  Jeremy Klingel of consulting firm PA Consulting.\r\n\r\nMuch like electric vehicles, the crypto industry could be a new avenue for load growth across the power industry, he added.\r\n\r\nConventional mining accounts for roughly 10% of global power consumption, compared to up to 0.5% for bitcoin mining, he said.</p>
                <CommentPage />
            </div>
        );
    }

export default Electricity;