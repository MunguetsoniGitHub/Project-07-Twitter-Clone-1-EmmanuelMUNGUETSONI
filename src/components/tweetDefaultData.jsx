
// import App from '../App'; 

import {useState, createContext} from 'react';

export const TweetContext = createContext();

export const TweetDefaultData = [

  {
    id: 1,
    name: "CNN",
    username: "CNN",
    // email: "tugrp@example.com",
    // age: 30,
    // address: "123 Main St, Anytown USA",
    // phone: "555-555-5555",
    // gender: "male",
    // interests: ["sports", "music", "travel"],
    // author: "j@123",
    avatar: "src/images/cnn-profile-photo.png",
    text: "CNN is a national news media network. It is the primary broadcaster of the World News online television program. ",
    dateTime: "2 days ago",
    CommentCount: 5,
    RetweetCount: 2,
    LikeCount: 3,
    ShareCount: "",
  },
  {
    id: 2,
    name: "The New York Times",
    username: "nytimes",
    // email: "tzirw@example.com",
    // age: 25,
    // address: "456 Park Ave, Anytown USA",
    // phone: "555-555-5556",
    // gender: "female",
    // interests: ["politics", "technology", "travel"],
    // author: "j@123",
    avatar: "src/images/TNYT.png",
    text: "hhhhhhhhhhheeeeeeeeeeeeeeeeeeeeeeeeeeeekkssssssssssssssssssss ",
    image: "src/images/tweet-image.png",
    dateTime: "2 days ago",
    CommentCount: 5,
    RetweetCount: 2,
    LikeCount: 3,
    ShareCount: "",
  },
  {
    id: 3,
    name: "Tweeter",
    username: "tweeter",
    // email: "tzirw@example.com",
    // age: 28,
    // address: "789 Elm St, Anytown USA",
    // phone: "555-555-5557",
    // gender: "female",
    // interests: ["politics", "technology", "travel"],
    // author: "j@123",
    avatar: "src/images/Tweet-Profile-Photo.png",
    text: "jjjjjjjjjdddddhhhssssssssssssssssssssssssssssssyyeeee",
    dateTime: "3 days ago",
    CommentCount: 76,
    RetweetCount: 2,
    LikeCount: 34,
    ShareCount: "", 
  }, 

  {

    id: 4,
    name: "Tweeter",
    username: "tweeter",
    // email: "tzirw@example.com",
    // age: 28,
    // address: "789 Elm St, Anytown USA",
    // phone: "555-555-5557",
    // gender: "female",
    // interests: ["politics", "technology", "travel"],
    // author: "j@123",
    avatar: "src/images/Tweet-Profile-Photo.png",
    text: "jjjjjjjjjdddddhhhssssssssssssggggddddddddddddddddddddd",
    dateTime: "4 days ago",
    CommentCount: 55,
    RetweetCount: 6,
    LikeCount: 32,
    ShareCount: "",
  },
  
]




export function UseTweets ({children})  {
  const [tweets, setTweets] = useState(TweetDefaultData);
  // const [icon, setIcon] = useState(false);

  // const iconChange = () => {
  //   setIcon(!icon);
  // }

  
  const addTweet = (tweet) => {
    setTweets((curr) => {
      const newTweet = {
        // id: curr[curr.length - 1]? curr[curr.length - 1].id + 1 : 1,
        id: curr[curr.length - 1]?.id + 1 ?? 0,
        name : tweet.name,
        username : tweet.username,
        avatar : tweet.avatar,
        text : tweet.text,
        dateTime : tweet.dateTime,
        CommentCount : tweet.CommentCount,
        RetweetCount : tweet.RetweetCount,
        LikeCount : tweet.LikeCount,
        ShareCount : tweet.ShareCount,              
    };
      // return [...curr, newTweet];
      return [...tweets, newTweet];
    });  
  
  };

  const onDeleteTweet = (TweetId) => {
    setTweets((curr) => {return curr.filter((tweet) => tweet.id !== TweetId);});
  };

  // const updateTweet = (tweet) => {
  //   setTweets((curr) => {
  //     const updatedTweet = curr.map((tweet) => {
  //       if (tweet.id === tweet.id) {
  //         return {
  //           ...tweet,
  //           name: tweet.name,
  //           username: tweet.username,
  //           avatar: tweet.avatar,
  //           text: tweet.text,
  //           dateTime: tweet.dateTime,
  //           CommentCount: tweet.CommentCount,
  //           RetweetCount: tweet.RetweetCount,
  //           LikeCount: tweet.LikeCount,
  //           ShareCount: tweet.ShareCount,
  //         };
  //       }
  //       return tweet;
  //     });
  //     return updatedTweet;
  //   });
  // };

  const onCommmentTweet = (tweetId) => {
    setTweets((curr) => {
      const updatedTweet = curr.map((tweet) => {
        if (tweet.id === tweetId) {
          return {
            ...tweet,
            CommentCount: tweet.CommentCount + 1,
          };
        }
        return tweet;
      });
      return updatedTweet;
    });
  };
    

  // const [icon, setIcon] = useState(false);
  // const iconChange = () => {
  //   setIcon(!icon);
  // }
  const onLikeTweet = (tweetId) => {

    
    
    setTweets((curr) => {
      const updatedTweet = curr.map((tweet) => {
        if (tweet.id === tweetId ) {
       
          return { 
            // // if(icon){
            //   return{
            ...tweet,
                LikeCount: tweet.LikeCount + 1,
                
            // }else{
            //   return{...tweet,
            //     LikeCount: tweet.LikeCount - 1
                
            //          };
  
           
          // }
           };
        }
        
        return tweet;
      });
      return updatedTweet;
    });

  };

  const onRetweetTweet = (tweetId) => {
    setTweets((curr) => {
      const updatedTweet = curr.map((tweet) => {
        if (tweet.id === tweetId) {
          return {
            ...tweet,
            RetweetCount: tweet.RetweetCount + 1,
          };
        }
        return tweet;
      });
      return updatedTweet;
    });
  };

  const onShareTweet = (tweetId) => {
    setTweets((curr) => {
      const updatedTweet = curr.map((tweet) => {
        if (tweet.id === tweetId) {
          return {
            ...tweet,
            ShareCount: tweet.ShareCount + 1,
          };
        }
        return tweet;
      });
      return updatedTweet;
    });
  };
  return(
  
    <TweetContext.Provider value={{tweets, addTweet, onDeleteTweet, onCommmentTweet, onLikeTweet, onRetweetTweet, onShareTweet}}>
      
      {children}
     
    </TweetContext.Provider>
  );
};


    
  
//   { tweets, addTweet, onDeleteTweet, onCommmentTweet, onLikeTweet, onRetweetTweet, onShareTweet };

// };
        


// export const useTweets = () => {
//   const [tweets, setTweets] = useState(TweetDefaultData);
  
   
  
//   const addTweet = (tweet) => {
//     setTweets((curr) => {
//       const newTweet = {
//         // id: curr[curr.length - 1]? curr[curr.length - 1].id + 1 : 1,
//         id: curr[curr.length - 1]?.id + 1 ?? 0,
//         name : tweet.name,
//         username : tweet.username,
//         avatar : tweet.avatar,
//         text : tweet.text,
//         dateTime : tweet.dateTime,
//         CommentCount : tweet.CommentCount,
//         RetweetCount : tweet.RetweetCount,
//         LikeCount : tweet.LikeCount,
//         ShareCount : tweet.ShareCount,              
//     };
//       // return [...curr, newTweet];
//       return [...tweets, newTweet];
//     });  

//   };

//   const onDeleteTweet = (TweetId) => {
//     setTweets((curr) => {return curr.filter((tweet) => tweet.id !== TweetId);});
//   };

  

//   const onCommmentTweet = (tweetId) => {
//     setTweets((curr) => {
//       const updatedTweet = [...curr];
//       const tweet = updatedTweet.find((tweet) => tweet.id === tweetId);
//       // if (tweet) {
//         tweet.CommentCount += 1;
//       // }
//       return updatedTweet;
//     });
//   };


  // const onLikeTweet = (tweetId) => {
  //   setTweets((curr) => {
  //     const updatedTweet = [...curr];

  //     const likedTweet = updatedTweet.find((tweet) => tweet.id === tweetId);
  //     // if (likedTweet) {
  //       likedTweet.LikeCount += 1;
  //     // }
  //     return updatedTweet;
  //   });

  // };


  // const onRetweetTweet = (tweetId) => {
  //   setTweets((curr) => {
  //     const updatedTweet = [...curr];
  //     const retweetedTweet = updatedTweet.find((tweet) => tweet.id === tweetId);
  //     // if (retweetedTweet) {
  //       retweetedTweet.RetweetCount += 1;
  //     // }
  //     return updatedTweet;
  //   });
  // };

  // const onShareTweet = (tweetId) => {
  //   setTweets((curr) => {
  //     const updatedTweet = [...curr];
  //     const sharedTweet = updatedTweet.find((tweet) => tweet.id === tweetId);
  //     // if (sharedTweet) {
  //       sharedTweet.ShareCount += 1;
  //     // }
  //     return updatedTweet;
  //   });
  // };
//   return { tweets, addTweet, onDeleteTweet, onCommmentTweet, onLikeTweet, onRetweetTweet, onShareTweet };

// };
                                                         
          
    
  
  
  
  