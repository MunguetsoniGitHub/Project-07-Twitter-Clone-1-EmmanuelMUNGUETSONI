
import {useContext} from 'react';
import {TweetContext} from "../tweetDefaultData.jsx";

function ActionRetweet({id, RetweetCount}) {
  
  const {onRetweetTweet} = useContext(TweetContext);
  
  return (

            <button className="tweet-action" onClick={() => onRetweetTweet(id)} >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="actionRetweet" >
                <path d="M23.77 15.67C23.478 15.377 23.003 15.377 22.71 15.67L20.49 17.89V7.65C20.49 5.582 18.807 3.9 16.74 3.9H10.89C10.476 3.9 10.14 4.236 10.14 4.65C10.14 5.064 10.476 5.4 10.89 5.4H16.74C17.98 5.4 18.99 6.41 18.99 7.65V17.89L16.77 15.67C16.477 15.377 16.002 15.377 15.71 15.67C15.418 15.963 15.416 16.438 15.71 16.73L19.21 20.23C19.355 20.377 19.547 20.45 19.74 20.45C19.933 20.45 20.123 20.378 20.27 20.23L23.77 16.73C24.064 16.438 24.064 15.963 23.77 15.67ZM13.11 18.95H7.25997C6.01997 18.95 5.00997 17.94 5.00997 16.7V6.46L7.22997 8.68C7.37797 8.827 7.56997 8.9 7.76197 8.9C7.95397 8.9 8.14597 8.827 8.29197 8.68C8.58497 8.387 8.58497 7.912 8.29197 7.62L4.79197 4.12C4.49897 3.826 4.02397 3.826 3.73197 4.12L0.231975 7.62C-0.0620254 7.912 -0.0620254 8.387 0.231975 8.68C0.525975 8.973 0.998975 8.973 1.29197 8.68L3.51197 6.46V16.7C3.51197 18.768 5.19497 20.45 7.26197 20.45H13.112C13.526 20.45 13.862 20.114 13.862 19.7C13.862 19.286 13.525 18.95 13.112 18.95H13.11Z" fill="#D9D9D9" />
              </svg>

              <span className="tweet-action-count">{RetweetCount}</span>
            </button>

  );

}

export default ActionRetweet;
            
            
    

  

  

  

  


  