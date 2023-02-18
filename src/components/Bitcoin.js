import React from 'react';
import Header from "./header";
import {Link} from "react-router-dom"
import CommentPage from "./CommentPage"

const Bitcoin = ()=>{
  
        return (
            <div className='article'>
                <Link to={"/"}> <Header /></Link>
                <h1>  Bitcoin $50,000 milestone nears as worldвЂ™s No. 1 cryptocurrency rises in 2021</h1>
                <img className="card-img" src={require('../imge/im-2.jpeg')} alt="Card cap"/>
                <p>Bitcoin prices on Sunday were approaching a psychological milestone around $50,000.\n\nThe weekend move pushed the worldвЂ™s No. 1 digital asset to a fresh record mark of $49,716.44, according to CoinDesk, adding to a steady grind toward all-time highs as greater attention and more institutional investments in cryptos has provided a felicitous near-term backdrop for the virtual market.\n\nBitcoin boom\nAfter a lull early in 2020, the crypto has rocketed higher in recent weeks as corporations have signed on.\n\nBitcoinвЂ™s BTCUSD, 1.64% momentum higher has driven it to a year-to-date gain of over 64%, compared with a rise of 2.8% for the Dow Jones Industrial Average DJIA, +0.09%, a 4.8% advance for the S&P 500 index SPX, +0.47% and fetching 9.4% rally for the Nasdaq Composite Index COMP, +0.50% thus far in 2021.\r\n\r\nAlthough, there is no specific news helping to extend gains for bitcoins, the rally comes as the asset appears to be gathering steam and increased attention among the traditional investment community.\r\n\r\nOver the weekend, Bloomberg News, citing people familiar, reported that a Morgan Stanley MS, +1.21% investment management unit, Counterpoint Global, was exploring buying cryptos for its investors.\r\n\r\nThat report comes after The Wall Street Journal earlier last week said that Bank of New York Mellon, BK would hold, transfer and issue bitcoin and other cryptocurrencies on behalf of its clients.\r\n\r\nвЂњDigital assets are becoming part of the mainstream,вЂќ Roman Regelman, chief executive of BNY MellonвЂ™s asset-servicing and digital businesses, was quoted as telling WSJ.\r\n\r\nOn top of that, last Wednesday, Mastercard MA, -0.55%  said it would support certain cryptocurrencies on its network later this year and Tesla Inc. TSLA, +0.55% said it purchased $1.5 billion of bitcoin and would eventually allow customers to use the cryptocurrency to purchase its products.</p>
                <CommentPage />
            </div>
        );
    }


export default Bitcoin;