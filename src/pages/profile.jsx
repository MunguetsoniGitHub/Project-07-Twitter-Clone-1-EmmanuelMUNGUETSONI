import Avatar from '../components/h2 tweetbody/avatar.jsx';

//import {UserContext} from '../context/userContext.jsx';
import {GlobalUserContext} from '../context/globalUserContext.jsx';
import {useContext, useState} from 'react';
// import { useParams } from 'react-router-dom';
import {TweetContext} from '../context/tweetContext.jsx';

import ProfileNavigation from '../components/profile/profileNavigation.jsx';
// import Tweet from '../components/tweet/tweet.jsx';

// import Tweets from '../components/tweets.jsx'; 

 export const UserProfile = () => {

  // const profile = tweet.find(tweet => tweet.name)

  // const {getUsernameFromUserId} = useParams(); 
  
  //const {user: currentUser} = useContext(UserContext);
   const {users} = useContext(GlobalUserContext);
  const {tweets} = useContext(TweetContext);

  // Filtrer les tweets pour trouver celui correspondant à l'utilisateur spécifié
   
  const userTweets = tweets.filter(tweet => tweet.userId === users.id);

  // Recuperer les informations de l'utilisateur à partir des tweets

   // const userProfileInfo = userTweets.length > 0 ? userTweets[0] : null;
  
  
  return (
   
    // <>
    <div  className="userProfile"  > 
      {userTweets && ( 
      <> 
      <div className="userProfile-header">
        <div className="cover-picture">
          <img    src="" alt="cover picture" />
        </div>
        <div className="profile-picture">
          <span className="profile-ctn">
          <span className="Profile">
            <Avatar avatar={userTweets.avatar}  />
          </span>
          </span>
          <button className="edit-profile"> Edit-profile</button>
        
        </div>
        
      </div>
      
      <div className="profile-description">
        
          <h3 className="name">{userTweets.name}</h3>
          <p className="user-name">@{userTweets.username}</p>
      </div>

      
      <div className="user-info">
        <h2>User info</h2>
        <h3>Name</h3>
        <p>{userTweets.name }</p>
        <h3>Email</h3>
        <p>{ 
        //user ?  user.email : "" 
        }</p>
        <h3>Phone</h3>
        <p>{  
        //user ?  user.phone : ""
        }</p>
        <h3>Address</h3>
        <p>{  
        //user ?  user.address : ""
        }</p>
        <h3>Gender</h3>
        <p>{  
        //user ?  user.gender : ""
        }</p>
      </div>

      <ProfileNavigation />

      <section className="userProfile-nav-outlet">
        <div className="userProfile-nav-outlet-ctn">
        
        </div>
      </section>

      </>
      )} 
    </div> 
     
  );
};

