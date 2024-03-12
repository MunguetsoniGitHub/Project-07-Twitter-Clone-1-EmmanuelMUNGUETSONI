
// import App from '../App'; 


import React, {useState,  useContext, useEffect} from 'react';
import {UserContext} from '../context/userContext.jsx'; 
import {GlobalUserContext} from '../context/globalUserContext.jsx';
import {TweetContext} from '../context/tweetContext.jsx';
//import DefaultData from '../Data/initial-data.json';

import axios from 'axios';

export function UseTweets ({children})  {
  // const [tweets, setTweets] = useState(DefaultData.tweets);

  const {user} = useContext(UserContext);
  const {users} = useContext(GlobalUserContext);

  const getUsernameFromUserId = (userId) => {
       
    const globalUser = users.find(globUser => globUser.id === userId);
    return globalUser ? globalUser.username : "inconnu";
  }

  //const [tweets, setTweets] = useState(DefaultData.tweets);
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        // effectue une requete get à l'api
        const response = await axios.get('http://localhost:3000/tweets');

        // met à jour le state avec la réponse avec les tweets recues
        setTweets(response.data);
      } catch (error) {
        // gérer les erreurs de la requete
        console.error('erreur lors de la récupération des tweets', error);
      }
    };

    // appelle la fonction fetchTweets au chargement de la page 
    fetchTweets();

    // retourner une fonction de nettoyage qui sera appelée lors du démontage du composant
    return () => {
      // nettoyer les ressources utilisées par la fonction fetchTweets
      // par exemple, fermer les connexions à la base de données ou d'autres ressources autrement dit annulez les appels de requete à l'API
      
    };   
  }, []);
  
  // const addTweet = (tweet) => {
  //   setTweets((curr) => {
    
  //     const newTweet = {
  //       //id: curr[curr.length - 1]? curr[curr.length - 1].id + 1 : 1,
  //       id: curr[curr.length - 1]?.id + 1 ?? 0,
  //       name : tweet.name,
  //       username : tweet.username,
  //       avatar : tweet.avatar,
  //       text : tweet.text,
  //       image : tweet.image,
  //       dateTime : tweet.dateTime,
  //       CommentCount : tweet.CommentCount,
  //       RetweetCount : tweet.RetweetCount,
  //       LikeCount : tweet.LikeCount,
  //       ShareCount : tweet.ShareCount,              
  //   };
  //     // return [...curr, newTweet];
  //     return [newTweet, ...tweets];
  //   });  
  
  // };

  const addTweet = (data) => {
    axios.post('http://localhost:5173/tweets', data)
      .then(response => {
        setTweets([response.data, ...tweets]);
      })
      .catch(error => {
        console.error('Erreur lors de l\'ajout du tweet', error);
      });
  }


  // const onDeleteTweet = (TweetId) => {
  //   setTweets((curr) => {return curr.filter((tweet) => tweet.id !== TweetId);});
  // };

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

          // Vérifier si l'utilisateur a déjà liké le tweet

          const userLiked = tweet.likes && tweet.likes.includes(user.id);

          return { 

            ...tweet,
            likes: userLiked ? tweet.likes.filter((userId) => userId !== user.id) : [...(tweet.likes || []), user.id],
                LikeCount: userLiked ? tweet.LikeCount - 1 :
                  tweet.LikeCount + 1,
       
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
  
    <TweetContext.Provider value={{tweets, 
                                   addTweet, 
                                   // onDeleteTweet, 
                                   onCommmentTweet, onLikeTweet, onRetweetTweet, onShareTweet, getUsernameFromUserId}}>
      
      {children}
     
    </TweetContext.Provider>
  );
};


  