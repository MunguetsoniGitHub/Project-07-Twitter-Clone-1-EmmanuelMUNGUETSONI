
import {React, useContext} from 'react';
import Tweet from './tweet/tweet.jsx';

import {TweetContext} from "./tweetDefaultData.jsx";

export default function Tweets() {

  const  {tweets, onCommmentTweet, onLikeTweet, onRetweetTweet, onShareTweet}  = useContext(TweetContext);
  
  if(!tweets || tweets.length === 0) {
    return "no tweets";
  }


  
  
  
  return (
    // <section className="tweets">
    //   <Tweet />
    // </section>

    <section className="tweets">
      {tweets.map(tweet => {
        return (
          <Tweet 
            //{/* key={tweet.id} 
            //tweet={tweet} 
            //onLike={onLike} /> */}


            key={tweet.id} 
            id={tweet.id}
            name = {tweet.name}
            username = {tweet.username}
            dateTime = {tweet.dateTime}
            text = {tweet.text}
            image = {tweet.image}
            avatar = {tweet.avatar} 

            CommentCount = {tweet.CommentCount} 
            RetweetCount = {tweet.RetweetCount}
            LikeCount = {tweet.LikeCount}
            ShareCount = {tweet.ShareCount}

            onCommmentTweet = {onCommmentTweet}
            onLikeTweet = {onLikeTweet}
            onRetweetTweet = {onRetweetTweet}
            onShareTweet = {onShareTweet}
            
            />
            
          );
        })
      }
      
      
      
      
      
    </section>
  );
}