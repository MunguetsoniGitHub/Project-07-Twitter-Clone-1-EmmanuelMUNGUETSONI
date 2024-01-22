
import {useContext} from 'react';
import {TweetContext} from "../tweetDefaultData.jsx";

function TweetActionLike({id, LikeCount}) {

  const {onLikeTweet} = useContext(TweetContext);
  
  // const [count, setCount] = useState(0);

  // const handleIncrement = () => {
  //   setCount(count + 1);
  // };

  // const handleDecrement = () => {
  //   setCount(count - 1);
  // };

  // function handelClick(e) {

  //   const id= e.currentTarget('actionLike');
  //   const className= e.currentTarget('actionLike');

  //   const tweetId= e.currentTarget('tweetId');

    // setCount(count + 1);
    
  // }  onClick={handelClick}

  
    
    
    
  

 return (

    <button className="tweet-action" onClick={() => onLikeTweet(id)} >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="actionLike"  >
        <path d="M12 21.638H11.986C9.40295 21.59 1.94995 14.856 1.94995 8.478C1.94995 5.414 4.47495 2.724 7.35295 2.724C9.64295 2.724 11.183 4.304 11.999 5.454C12.813 4.306 14.353 2.724 16.644 2.724C19.524 2.724 22.048 5.414 22.048 8.479C22.048 14.855 14.594 21.589 12.011 21.636H12V21.638ZM7.35395 4.225C5.27395 4.225 3.45095 6.213 3.45095 8.48C3.45095 14.22 10.485 20.076 12.001 20.138C13.519 20.076 20.551 14.221 20.551 8.48C20.551 6.213 18.728 4.225 16.648 4.225C14.12 4.225 12.708 7.161 12.696 7.19C12.466 7.752 11.54 7.752 11.309 7.19C11.295 7.16 9.88395 4.225 7.35495 4.225H7.35395Z" fill="#D9D9D9" />
      </svg>

      <span className="tweet-action-count">{LikeCount}</span>
    </button>
   );
}

export default TweetActionLike;
      