import Avatar from '../h2 tweetbody/avatar.jsx';
import WhoToFollowAccountName from './whoToFollowAccountName.jsx';
import FollowingButton from './followingButton.jsx';

import {usersData} from '../../Data/usersData.jsx';

export default function WhoToFollow() {
  return (

  
    <div className="whoToFollow"    >
      <div className="whoToFollow__header">
        <h2>Who to follow</h2>
      </div>
      <div className="whoToFollow-body"  >

      {
        usersData.map(user => {

        return (
          <div className="whoToFollow-count"  key={user.id}>
            
            <Avatar avatar = {user.avatar}  />

            <div className="whoToFollow-count-title" >
            
              <WhoToFollowAccountName name = {user.name}  username={user.username} />
                       
              <FollowingButton />
            
            </div>

          </div>
            
            );
              })
            }

       </div>
    </div>
     
    
  );
}
          
              
              