import React from "react";
import Header from "./header";
import {Link} from "react-router-dom"
import CommentPage from "./CommentPage"


const StockExchange = () => {
   
      
return (

        <div className="article">
            <Link to={"/"}> <Header /></Link>
            <h1 className="article-title"> The New York Stock Exchange president says the stock market is not a casino. HereвЂ™s what academic research says.</h1>
            <img className="article-img" src={require('../imge/im-1.jpeg')} alt="Card cap" />
            <p className="article-text">Some economically-sensitive stocks have underperformed the broader market, while the U.S. dollar has risen. That combination makes some nervous about those stocks, but they neednвЂ™t worry.\r\n\r\nIndustrials and banks, two highly cyclical sectors, are marginally underperforming the border market since January 6, the date that marked a reversal of the DollarвЂ™s downtrend. The Industrial Select Sector SPDR Fund (XLI) has underperformed the S&P 500 by almost 4 percentage points since January 6, while the SPDR S&P Bank ETF (KBE) has underperformed by less than a tenth of a percentage point. Since that date, the U.S. Dollar Index (DXY) is up 1.6%.\r\n\r\nUsually, when the dollar rises, equities in general perform poorly because global investors are moving into safe haven assets as they see the global economic outlook weakening. вЂњIf USD were to show a notable strengthening this year, that would, to some extent, go against our bullish equity market call,вЂќ wrote JPMorgan global equity strategists in a note. That certainly doesnвЂ™t set up well for cyclical stocks.\r\n\r\nBut this moment is different; the dollarвЂ™s strength isnвЂ™t a refection of global risk aversion from investors, but rather a U.S. economy expected to perform handsomely relative to other countries for the longer-term, even as all economies rebound from the pandemic. Also, U.S. interest rates are expected to rise faster than in other countries over the next several years, making owning the greenback more attractive versus other currencies. ThatвЂ™s also consistent with the theme of U.S. economic growth outperformance.\r\n\r\nThis all lends itself to strong performance for cyclical stocks. вЂњWeakness in cyclicals due to Dollar gains represent buying opportunities assuming USD strength is based on improving growth prospects,вЂќ wrote Dennis DeBusschere, head of portfolio strategy research at Evercore in a note. вЂњDonвЂ™t dump cyclicals because the dollar is strengthening,вЂќ Yung Yu Ma, chief investment strategist at BMO Wealth Management told BarronвЂ™s. вЂњIndustrials and financials will do well.вЂќ\r\n\r\nGiven the positions of DeBusschere and Ma, some might be scratching their heads at why those cyclicals arenвЂ™t top performers this year. Actually, they have been spectacular outperformers since September 23, the start of a fresh rally in stocks and a move into assets that benefit with a strengthening economy. The Industrial Select Sector SPDR Fund is up 19%, roughly in line with the S&P 500вЂ™s gain. The SPDR S&P Bank ETF is up 65%. Notably, energy stocks, as seen by the Energy Select Sector SPDR Fund (XLE), is up 46% since that date. Ma says cyclical stocks are taking a breather, while other forgotten areas of the market catch up.\r\n\r\nBelieving in the global economyвЂ™s upturn means believing in cyclicals вЂ” regardless of what the dollar does.</p>
            <CommentPage />
        </div>
    

    )
}
export default StockExchange;
