import React from 'react';
import Header from './header';
import {Link} from "react-router-dom"
import CommentPage from "./CommentPage"
const SimonProperty =()=>{
    
        return (
            <div className='article'>
                <Link to={"/"}> <Header /></Link>
                <h1> Simon Property Group Tries to Turn the Corner on an Ugly Year for Malls</h1>
                <img className="card-img" src={require('../imge/im-7.jpeg')} alt="Card cap"/>
                <p>YShopping malls are the ultimate reopening trade, a bet on the resilience of the American consumer after nearly a solid year of stay-at-home orders and retail shutdowns.\r\n\r\nHow quickly shoppers will return to crowded public spaces is an issue that has plagued retailers and mall operators since the beginning of the pandemic last year, when businesses were forced to shut to prevent the spread of Covid-19, sending shoppers online.\r\n\r\nShares of Simon Property Group (ticker: SPG), the biggest U.S. mall operator, are down 21% over the last year compared with the S&P 500вЂ™s 16.6% one-year gain. And itвЂ™s still cheap compared with rival mall owners, according to Morgan Stanley, which upgraded it to Overweight and raised its price target on the stock to $125.\r\n\r\nвЂњWhile retail faces accelerating secular changes, we see multiple drivers of earnings growth for SPG,вЂќ analyst Richard Hill said in a note on Thursday. His previous rating was Equalweight with a price target of $88.\r\n\r\nHis new price target implies the stock could gain 13.6% from its current price. Simon Property share rose 3.8% on Thursday.\r\n\r\nEarlier this week, CEO David Simon expressed confidence that the company has вЂњturned the corner,вЂќ offering an upbeat assessment of 2021.\r\n\r\nNet income this year will be in the range of $4.60 to $4.85 a share, the company projected, which would be well above analyst estimates of $3.90. Funds from operations, a key financial measure for real-estate companies, will be in the range of $9.50 to $9.75 a share, above the consensus estimate of $9.49.\r\n\r\nвЂњAre we completely out of the woods?вЂќ CEO Simon said on an earnings conference call. вЂњNot yet, but weвЂ™re well on our way,вЂќ\r\n\r\nThe rosy outlook offsets fourth-quarter results that fell short of expectations on two measures. Net income of $271.5 million, or 86 cents a share, was just under the expected 87 cents. Funds from operations were $2.17 a share, short of the expected $2.21, according to FactSet.\r\n\r\nRevenue of $1.13 billion beat the consensus of $1.09 billion.\r\n\r\nSeveral analysts have raised their price targets on Simon stock this week. BTIGвЂ™s James Sullivan, who also raised his target to $125, said he expects a вЂњsolid recoveryвЂќ back to pre-Covid levels over the next two to three years.\r\n\r\nLast year, Simon invested $330 million in several beaten-down retailers, including Brooks Brothers, Lucky Brands, Forever 21, and J.C. Penney and it proceeded with a deal to buy fellow mall operator Taubman.\r\n\r\nRent collections are improving, Simon said, and negotiations with several large tenants could be resolved in the next few weeks.\r\n\r\nRetailers remain cautious, he said, but a rebound in business is already happening in low-restriction areas like Florida and Texas, even as Europe faces new shutdowns.\r\n\r\nвЂњOne heck of a year,вЂќ Simon said on a conference call with analysts on Monday. вЂњLetвЂ™s not repeat it in any stretch of our imagination.вЂќ"</p>
                <CommentPage />
            </div>
        );
    }


export default SimonProperty;