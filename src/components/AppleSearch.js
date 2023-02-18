import React from 'react';
import Header from './header';
import {Link} from "react-router-dom"
import CommentPage from "./CommentPage"

const AppleSearch =() => {
   
        return (
            <div className='article'>
                <Link to={"/"}> <Header /></Link>
                <h1> AppleвЂ™s Search for an Autonomous Vehicle Partner Continues. Who It Could Choose</h1>
                <img className="card-img" src={require('../imge/im-6.jpeg')} alt="Card cap"/>
                <p>AppleвЂ™s search for an auto maker to join the tech giantвЂ™s project to build autonomous vehicles continues, following reports that discussions have dissolved with Nissan.\n\nShares in the Japanese auto giant tumbled near 3% in Tokyo trading. Apple shares were not traded in the U.S. on Monday due to the Presidents Day holiday.\n\nThe back story. There has been speculation over AppleвЂ™s vehicle ambitions since 2015, when The Wall Street Journal reported that it was gearing up to take on Tesla. The iPhone maker has been highly secretive about its plans for вЂњProject Titan,вЂќ confirmed in 2016, which has evolved to encompass self-driving, or autonomous, electric vehicles.\n\nAnalysts have suspected that the Silicon Valley giant would partner with an existing auto maker to break into the capital-intensive vehicle industry.\n\nOn Feb. 8, Korean auto makers Hyundai and Kia said they were no longer in talks with Apple over an autonomous electric-vehicle project, following widespread press and analyst speculation that a deal was near. That news had sent Hyundai stock down more than 6% and shares in Kia down 15%вЂ”eliminating a combined $8.5 billion in market value from the two companies.\n\nThe next day, NissanвЂ™s chief executive Makoto Uchida was pressed in an earrings call on whether the company had been approached by Apple about a collaboration. Uchida avoided addressing Apple directly, but indicated that Nissan could partner with technology companies on building the next generation of cars.\n\nWhatвЂ™s new. Nissan confirmed on Monday that it was not in talks with Apple, but said it was open to exploring collaborations and partnerships to accelerate the vehicle industry.\n\nThe Financial Times had reported earlier that there were discussions between the two groups over a partnership, but that talks had stalled over possible branding. According to the report, the discussions did not reach senior management levels.\n\nA source close to Nissan told Agence France-Presse that вЂњwhen you make a product under the Apple brand, you give your soulвЂ” and your profit marginsвЂ” to Apple,вЂќ and that Nissan was вЂњnot interested in giving Apple the best that we offer.вЂќ\n\nLooking ahead. It makes sense that Apple would partner with a strong auto maker to realize its electric-vehicle dreams. With Nissan crossed off, following Hyundai and Kia, that list is narrowing.\r\n\r\nOn Feb. 7, just before Hyundai and Kia confirmed they were not involved with Apple, veteran technology analyst Daniel Ives of investment firm Wedbush, said it was a matter of вЂњwhen not ifвЂќ Apple entered the electric-vehicle race. Ives put the chances at 85% that the tech giant would announce a relevant partnership or collaboration within the next three to six months.\r\n\r\nIves singled out Hyundai as the most likely choice, with Volkswagen Group вЂ”which also makes Audi and Porsche вЂ”as the next best bet. With Hyundai out, investors should keep an eye on the German giant. The analyst also floated Tesla and Ford as possible candidates.</p>
                <CommentPage />
            </div>
        );
    }


export default AppleSearch;