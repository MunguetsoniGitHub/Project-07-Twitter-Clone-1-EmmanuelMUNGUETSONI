import React from 'react';
// import TweetBody from './tweetBody.jsx';
import TrendsList from './trendsComponents/trendsList.jsx';
import WhoToFllow from './trendsComponents/whoToFollow.jsx';
import SearchTwitter from './trendsComponents/searchTwitter.jsx';



function Trends() {
  return (
   <>

    <div className="trends">
    
      <SearchTwitter />
         
       <ul className="trends-list">
         <span className="trendsForYou">
           <span className="trendsForYou-title">
             <h2> Trends for you</h2>
           </span>
           <span className="trendsForYou-settings">
             <image src="src/images/Settings.png" alt="Settings" width="20" height="20" />
           </span>
           
         </span>
         <TrendsList /> 
       </ul>
      
      <WhoToFllow />

    </div>

   </> 
  );    
}
     
  export default Trends;