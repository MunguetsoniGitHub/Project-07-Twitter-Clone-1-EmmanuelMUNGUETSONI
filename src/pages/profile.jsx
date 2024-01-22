import Avatar from '../components/h2 tweetbody/avatar.jsx';

const userProfile = ({name,username}) => {
  return (
   
    // <>
    <div  className="userProfile"  > 
      
      <div className="userProfile-header">
        <div className="cover-picture">
          <img    src="" alt="cover picture" />
        </div>
        <div className="profile-picture">
          <span className="profile-ctn">
          <span className="Profile">
            <Avatar avatar="src/images/cnn-profile-photo.png"   />
          </span>
          </span>
          <button className="edit-profile"> Edit-profile</button>
        
        </div>
        
      </div>
      
      <div className="profile-description">
        
          <h3 className="name">CNN{name}</h3>
          <p className="user-name">@CNN{username}</p>
      </div>

      
      <div className="user-info">
        <h2>User info</h2>
        <h3>Name</h3>
        <p>John Doe</p>
        <h3>Email</h3>
        <p>johndoe@gmail.com</p>
        <h3>Phone</h3>
        <p>+1 (234) 567-8901</p>
        <h3>Address</h3>
        <p>123 Main St, Anytown, USA</p>
      </div>
        
        


        


  



      
    </div> 
     //</> 
  );
};

export default userProfile ;