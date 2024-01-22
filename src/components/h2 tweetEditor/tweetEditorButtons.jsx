import React from 'react';

import UpLoadMedia from "./upLoadMedia.jsx";
import AddGif from "./addGif.jsx";
import Poll from "./poll.jsx";
import Emoji from "./emoji.jsx";
import Schedule from "./schedule.jsx";
import Button from "./button.jsx";

export default function TweetEditorButtons(){

  return(
    <div className="tweet-editor-buttons">
      <span className="tweet-editor-actions">
        <UpLoadMedia />
        <AddGif />
        <Poll  />
        <Emoji  />
        <Schedule  />
      </span>
      <Button />
    </div>
  )  
}