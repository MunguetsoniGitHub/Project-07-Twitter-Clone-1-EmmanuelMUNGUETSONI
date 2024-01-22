import React from 'react';
import { useState  } from 'react';

export default function FollowingButton(props) {
  const { following, follow, unfollow } = props;
  const [isFollowing, setIsFollowing] = useState(following);
  const [isFollowingText, setIsFollowingText] = useState(following ? "Following" : "Follow");
  const handleFollow = () => {
    if (isFollowing) {
      unfollow();
      setIsFollowing(false);
      setIsFollowingText("Follow");
    } else {
      follow();
      setIsFollowing(true);
      setIsFollowingText("Following");
    }

  };
  return (
    
      <button className="FollowingButton" onClick={handleFollow}>{isFollowingText}</button>
    
  );
}