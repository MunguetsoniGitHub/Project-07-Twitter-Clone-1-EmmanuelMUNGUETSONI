
import {React, useContext} from 'react';
import {Link} from 'react-router-dom';

import Avatar from '../h2 tweetbody/avatar.jsx';
import ActionComment from './actionComment.jsx';
import ActionRetweet from './actionRetweet.jsx';
import TweetActionLike from './actionLike.jsx';
import TweetActionShare from './actionShare.jsx';
import TweetTitle from './tweetTitle.jsx';

//import TweetDefaultData from '../tweetDefaultData.jsx';
// import {TweetContext} from "../tweetDefaultData.jsx";
// import {GlobalUserContext} from "../../context/globalUserContext.jsx";



export default function Tweet({tweet,onLikeTweet, onShareTweet,onCommmentTweet, onRetweetTweet}) {
  

  // const { tweets, getUsernameFromUserId}  = useContext(TweetContext);

  // const {userId} = useContext(GlobalUserContext);

  
  
  
  return (
    
        <div className="tweet"  >
          <Link to={`/profile/${tweet.userId}`}>
          <Avatar avatar={tweet.avatar} className="tweet-avatar"/>
          </Link>
          <div className="tweet-body">

            <div className="tweet-content">

              <TweetTitle name={tweet.name} username={tweet.username} dateTime={tweet.dateTime}  />

              <div className="tweet-text">
                <p>{tweet.text}</p>
              </div>
            { tweet.image ? <img src={tweet.image} alt="image" class="tweet-image" /> : null}

            </div>

            <div className="tweet-actions">

              <ActionComment onCommmentTweet={onCommmentTweet} id={tweet.id} CommentCount={tweet.CommentCount} />          
              <ActionRetweet RetweetCount={tweet.RetweetCount} onRetweetTweet={onRetweetTweet}  id={tweet.id}  />
              <TweetActionLike LikeCount={tweet.LikeCount} onLikeTweet={onLikeTweet} id={tweet.id}  />
              <TweetActionShare ShareCount={tweet.ShareCount} onShareTweet={onShareTweet} id={tweet.id} /> 

            </div>

          </div>

        </div>
      
  );

}