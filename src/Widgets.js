import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
              <div className="widgets__articleLeft">
                   <FiberManualRecordIcon />
              </div>

              <div className="widgets__articleRight">
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>
              </div>
        </div>
    );

    return (
        <div className="widgets">
            <div className="widgets__header" >
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
           {newsArticle("CsAlam Innovation is flying high...", "2d ago · 107k readers")}
           {newsArticle("New Species of Covid-19?", "4d ago · 17k readers")}
           {newsArticle("Preety becomes the first Nepalese Astronaut...", "3d ago · 7M readers")}
           {newsArticle("Elon Musk decrypted ALien messages...", "3d ago · 10M readers")}
           {newsArticle("Apple will launch Apple Cars before 2024...", "1d ago · 2M readers")}
           
           <div className="widgets__footer">
           <h2>
               Show more
           </h2>
           <ExpandMoreRoundedIcon/>
           </div>
        </div>
        
    );
}

export default Widgets;
