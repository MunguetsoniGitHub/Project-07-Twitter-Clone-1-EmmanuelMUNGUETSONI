
import {React, useContext, useState, useEffect} from "react";
import Avatar from "./h2 tweetbody/avatar.jsx";

import TweetEditorButtons from "./h2 tweetEditor/tweetEditorButtons.jsx";
import {UserContext} from "../context/userContext.jsx";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";

import {TweetContext} from "../context/tweetContext.jsx";
import axios from "axios";


function TweetEditorForm({onSubmit}) {

 const {addTweet} = useContext(TweetContext);
 
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  
  const {user} = useContext(UserContext);
  const tweetText = watch('tweetText');

  const handleTweetCreat = ({tweeText}) => {
       // e.preventDefault();

    const newTweet = {

      avatar : user.avatar,
      username : user.username,
      name : user.name,
      dateTime : new Date().toISOString(),
      text : tweeText,
      // image : e.target.file,
      CommentCount : null,
      RetweetCount : null,
      LikeCount : null,
      ShareCount : null,     
    }
     addTweet(newTweet);
  }

  // const onSubmit = async () => {
  //   // e.preventDefault();
  //    const newTweet = {
  //      avatar : user.avatar,
  //      username : user.username,
  //      name : user.name,
  //      dateTime : new Date().toISOString(),
  //      text : tweetText,
  //      image : null,
  //      CommentCount : null,
  //      RetweetCount : null,
  //      LikeCount : null,
  //      ShareCount : null,     
  //    }

  //    try {
  //      const response = await axios.post('http://localhost:5173/tweets', newTweet);
  //      console.log(response.data);   
  //    }
  //    catch(error) {
  //      console.error('Erreur lors de l\'ajout du tweet', error);
  //    }   
  // };
  // useEffect(()=>{}, []);
  
  return (
    <section className="tweet-editor">
      <Link to="/profile">
      <Avatar avatar = {user.avatar}  />  
      </Link>
      
      <form onSubmit={handleSubmit((data) => handleTweetCreat(data))} className="tweet-editor-form">
        
        <textarea
          className="tweet-editor-input"
          type="text"
          placeholder="What's happening?"
          rows="3"          
          name="text"
         {...register("tweeText", {requiered : true })} 
        />
        {errors.tweeText && <p className="error">Ce champs est requis</p> }

        <TweetEditorButtons />
        
      </form>    
    </section>
  );
}

export default TweetEditorForm;