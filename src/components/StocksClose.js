import React, { Component } from 'react';
import Header from './header';

class StocksClose extends Component {
    render() {
        return (
            <div>
            <Header />
            <h1> Stocks Close at New Records as Investors Bet on Vaccines</h1>
            <img className="card-img" src={require('../imge/im-4.jpeg')} alt="Card cap"/>

            <p>Stocks closed at new highs Friday, as investors assessed corporate earnings and upbeat comments about the U.S.вЂ™s Covid-19 vaccine rollout.\n\nThe Dow Jones Industrial Average advanced 27.70 points, or 0.1%, to 31,458.40. The S&P 500 gained 18.45 points, or 0.5%, to 3,934.83, and the Nasdaq Composite advanced 69.70 points, or 0.5%, to 14,095.47. All three major benchmarks closed at new highs, while the small-cap Russell 2000 closed 0.1% higher. For the week, the Dow industrials rose 1%, the S&P 500 gained 1.2% and the Nasdaq climbed 1.7%.\n\nMost Asian markets were closed for the Lunar New Year holiday, but the Nikkei 225 index and AustraliaвЂ™s S&P/ASX 200 both finished lower. The Stoxx Europe 600 index advanced 0.6%, while the German DAX gained 0.1%. Brent oil and U.S. crude prices each climbed about 2.1%.\n\nThe news on the vaccine front has been mixed, as a new Covid-19 variant that originated in South Africa has spread to the U.S. West Coast. At the same time, though, President Joe BidenвЂ™s administration has arranged to purchase hundreds of millions more vaccine doses and will have enough to vaccinate 300 million AmericansвЂ”the majority of the countryвЂ”by the end of July.\n\nThe concern for investors is that some vaccines may not adequately immunize against the new variants. That leaves in question the pace of reopenings and the outlook for the economic recovery.\n\nвЂњThe last thing that anyone wants to see is the increase in the new variant cases in the U.S., which could further adversely influence economic activity. If such an event ever occurs, it is very likely to trigger a sharp selloff for the S&P 500, and gold prices will move higher,вЂќ said Naeem Aslam, chief market analyst, to clients in a note.\n\nStronger-than-expected corporate earnings have also been driving stocks higher. Of the nearly three-quarters of companies in the S&P 500 that have reported fourth-quarter results, more than 80% have beat forecasts for profits, according to FactSet. If the trend continues, that would be the third-highest proportion since the data provider started tracking those statistics in 2008. The S&P 500 is also on track for its first year-over-year quarterly earnings growth since the end of 2019.\r\n\r\nAmong stocks on the move, shares of Bumble (ticker: BMBL) were up 7.3% after the dating-app operator climbed 64% in its Thursday debut. Alongside Bumble, Signify Health, Apria Healthcare, loanDepot and medical-device company Bioventus also had their initial public offerings on Thursday.\r\n\r\nExpedia (EXPE) shares fell 2.3% after the online travel service posted a wider-than-expected net loss. The company said it lost $2.64 per share, against estimates of $1.92. Expedia posted revenue of $920 million, below the forecast of $1.1 billion.\r\n\r\nWalt Disney stock (DIS) fell 1.7% even after the company smashed earnings-per-share estimates, posting a result of 32 cents, against estimates of a 41-cent loss. The company said revenue was $16.25 billion, which beat expectations of $15.9 billion.\r\n\r\nRestaurant Brands International (QSR) slipped 0.2% after Baird downgraded the stock to Neutral from Outperform.\r\n\r\nNorwegian Cruise Line (NCLH) fell 1%. Berenberg lowered its rating on the stock to Hold from Buy.</p>
            </div>
        );
    }
}

export default StocksClose;