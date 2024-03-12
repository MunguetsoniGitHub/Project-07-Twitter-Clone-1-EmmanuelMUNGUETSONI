import {React, useContext} from 'react';

import Header from '../components/header.jsx';
// import TweetBody from '../components/tweetBody.jsx';
import TweetEditorForm from '../components/tweetEditorForm.jsx';

import Tweets from '../components/tweets.jsx';

// import {useTweets} from '../components/tweetDefaultData.jsx'

import {TweetContext} from "../context/tweetContext.jsx";


export const Home = () => {

  // const { tweets, addTweet, onDeleteTweet, onCommmentTweet, onLikeTweet, onRetweetTweet, onShareTweet } = useTweets();
  
  const { tweets, addTweet, onDeleteTweet, onCommmentTweet, onLikeTweet, onRetweetTweet, onShareTweet } = useContext(TweetContext);

  return (        
     <>       
        <Header title="Home"/>
        <TweetEditorForm onSubmit={addTweet} />
        <Tweets tweets={tweets} onCommmentTweet={onCommmentTweet} onRetweetTweet={onRetweetTweet} onLikeTweet={onLikeTweet} onShareTweet={onShareTweet} addTweet={addTweet} onDeleteTweet={onDeleteTweet} />
     </>
  );
}


