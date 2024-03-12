//import {UserProfile} from '../../pages/profile.jsx';
import { Link } from 'react-router-dom';


export default function ProfileNavigation(){

  return (
    <nav className="profile-navigation">
      <div className="profile-navigation-item">
        
        <Link to="/profile">
          <span>Tweets</span>
        </Link>
        <Link to="/profile">
          <span>Tweets & replies</span>
        </Link>
        <Link to="/profile">
          <span>Media</span>
        </Link>
        <Link to="/profile">
          <span>Likes</span>
        </Link>

      </div>
    </nav>
  );
   
}