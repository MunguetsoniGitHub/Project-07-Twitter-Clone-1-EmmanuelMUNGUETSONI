import React from 'react';

import Button from "./button.jsx";

export default function TweetEditorButtons(){

  return(
    <div className="tweet-editor-buttons">
      <span className="tweet-editor-actions">
       
        <div className="upLoad-media"  >
         <input type="file" id="file-input" accept="images/*" />
        </div>

        <buttton className="addGif" alt="gif" >
               <img src="src/images/Top-gif.png" alt="Retweet" />
        </buttton>
        
        <buttton >
          <img src="src/images/Top-poll.png" alt="Retweet" />
        </buttton>
        
        <button className="emoji" >
          <img src="src/images/Top-emoji.png" alt="Retweet" /> 
        </button>
        
        <button  className="schedule" alt="schedule">
          <img src="src/images/Top-schedule.png" alt="Retweet" />      
        </button>
        
      </span>
      
      <Button />
      
    </div>
  )  
}