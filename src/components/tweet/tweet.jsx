
import {React, useContext} from 'react';

import Avatar from '../h2 tweetbody/avatar.jsx';
import ActionComment from './actionComment.jsx';
import ActionRetweet from './actionRetweet.jsx';
import TweetActionLike from './actionLike.jsx';
import TweetActionShare from './actionShare.jsx';
import TweetTitle from './tweetTitle.jsx';

//import TweetDefaultData from '../tweetDefaultData.jsx';

import {TweetContext} from "../tweetDefaultData.jsx";

// export default function Tweet({id, CommentCount, RetweetCount, LikeCount, ShareCount, name, username, dateTime, text, image, avatar, onCommmentTweet, onLikeTweet, onRetweetTweet, onShareTweet}) {

export default function Tweet({id, CommentCount, RetweetCount, LikeCount, ShareCount, name, username, dateTime, text, image, avatar}) {
  

  const {onCommmentTweet,  onLikeTweet,  onRetweetTweet,  onShareTweet}  = useContext(TweetContext);
  
  
  return (

        <div className="tweet"  >

          <Avatar avatar={avatar} className="tweet-avatar"/>

          <div className="tweet-body">

            <div className="tweet-content">

              <TweetTitle name={name} username={username} dateTime={dateTime}  />

              <div className="tweet-text">
                <p>{text}</p>
              </div>
              <img src={image} alt="image" class="tweet-image" />

            </div>

            <div className="tweet-actions">

              <ActionComment CommentCount={CommentCount} onCommmentTweet={onCommmentTweet} id={id} />          
              <ActionRetweet RetweetCount={RetweetCount} onRetweetTweet={onRetweetTweet} id={id} />
              <TweetActionLike LikeCount={LikeCount} onLikeTweet={onLikeTweet} id={id} />
              <TweetActionShare ShareCount={ShareCount} onShareTweet={onShareTweet} id={id} /> 

            </div>

          </div>

        </div>

  );
}