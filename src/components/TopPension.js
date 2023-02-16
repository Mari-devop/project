import React, { Component } from 'react';
import Header from './header';

class TopPension extends Component {
    render() {
        return (
            <div>
            <Header />
            <h1> A Top Pension Bought More GE, Zoom, and Pfizer Stock. HereвЂ™s What It Sold.</h1>
            <img className="card-img" src={require('../imge/im-3.jpeg')} alt="Card cap"/>

            <p>The manager of one of the best-run pensions in America, from a funding standpoint, made big changes in its investment portfolio.\n\nThe State of Wisconsin Investment Board substantially increased positions in General Electric (ticker: GE), Zoom Video Communications (ZM), and Pfizer (PFE) stock, and cut about a quarter of its investment in Intel (INTC). The SWIB disclosed the stock trades, among others, in a form it filed with the Securities and Exchange Commission.\n\nThe agency didnвЂ™t respond to a request for comment. About 91% of assets the investment board manages are the trust funds of the Wisconsin Retirement System, which totaled $129.8 billion at the end of 2020.\n\nThe Wisconsin Retirement System is one among a handful of state pensions that are fully funded. A study by the Pew Charitable Trusts that looked at 2018 data showed that the average state pension had a funded ratio of only 70.7%, which means only about 71 cents on hand for each dollar of obligations.\n\nThe SWIB bought 2.7 million more GE shares in the fourth quarter to end the year with 8.5 million shares of the conglomerate.\n\nGE stock slipped 3.2% in 2020, but it has wiped out that loss by rising 8.6% so far this year. In comparison, the S&P 500 index, a measure of the broader market, rose 16.3% in 2020, but has gained 4.8% so far in 2021.\r\n\r\nSome GE bears eased off late last year, while other analysts remain skeptical. GEвЂ™s fourth-quarter report was notable for showing free-cash-flow growth and including upbeat financial forecasts.\r\n\r\nSWIB bought 386,625 additional shares of Zoom, raising its investment to 478,625 shares of the videoconferencing company. Zoom stock soared five-fold in value in 2020. So far in 2021, it has gained 28.4%.\r\n\r\nDespite the impressive gains, Zoom stock has slipped from its highs, but it does have some support. One analyst recently called for the stock to top $600.\r\n\r\nPfizer stock slipped 1% in 2020, and so far in 2021, it has slid 5.7%. Covid-19 vaccine will work against new variants, the companyвЂ™s research suggests. Earlier this month, Pfizer raised its estimate of sales for its vaccine after stumbles by rivals. The company recently reported mixed earningsSWIB bought 924,796 additional Pfizer shares to end 2020 with 6.0 million shares.The manager sold 676,844 Intel shares, cutting its investment in the chipmaker to 2.2 million shares. Intel stock slid 16.8% in 2020, but it is up 24.1% so far this year.nIntel unnerved investors by disclosing manufacturing issues last July. Intel stock rallied early on in 2021 when the company revealed that CEO Bob Swan would be leaving. Swan bought shares in his last weeks with Intel.</p>
            </div>
        );
    }
}

export default TopPension;