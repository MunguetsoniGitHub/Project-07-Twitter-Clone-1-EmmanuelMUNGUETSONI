
import {React, useContext} from "react";
import Avatar from "./h2 tweetbody/avatar.jsx";
import Textarea from "./h2 tweetEditor/textarea.jsx";
import TweetEditorButtons from "./h2 tweetEditor/tweetEditorButtons.jsx";
import {UserContext} from "../context/userContext.jsx";

//import TweetContext from "../components/tweetDefaultData.jsx";


function TweetEditorForm({onSubmit}) {

  const {user} = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const avatar = user.avatar;    
    const username = user.username;
    const name = user.name;
    // const dateTime = e.target.dateTime.value;
    const text = e.target.text.value;
    // const image = e.target.image.value;
    
    const newTweet = {

      avatar,
      username,
      name,
      // dateTime,
      text,
      // image,
      CommentCount : 0,
      RetweetCount : 0,
      LikeCount : 0,
      ShareCount : 0,
      
    }
      
    
    onSubmit(newTweet);

  }
  

  
  
  return (
    <section className="tweet-editor">
      <Avatar avatar = "src/images/profile-photo.png"  />      
      <form onSubmit={handleSubmit} className="tweet-editor-form">
        <Textarea  />       
        <TweetEditorButtons />
        
      </form>    
    </section>
  );
}

export default TweetEditorForm;