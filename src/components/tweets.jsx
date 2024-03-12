
import {React, useContext} from 'react';
import Tweet from './tweet/tweet.jsx';
import {TweetContext} from "../context/tweetContext.jsx";

export default function Tweets() {

  const  {tweets, onLikeTweet, onShareTweet, onCommmentTweet, onRetweetTweet}  = useContext(TweetContext);
  
  if(!tweets || tweets.length === 0) {
    return "no tweets";
  }

  return (
    <section className="tweets">
      {tweets && ( 
        tweets.map(tweet => (
          <Tweet 

            key={tweet.id}             
            tweet={tweet}

            onLikeTweet={onLikeTweet}
            onShareTweet={onShareTweet}
            onCommmentTweet={onCommmentTweet}
            onRetweetTweet={onRetweetTweet}            
            />            
          ))        
      )}
    
    </section>
  );
}