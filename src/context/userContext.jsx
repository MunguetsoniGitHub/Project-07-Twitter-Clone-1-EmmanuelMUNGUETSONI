
import React, { createContext, useState } from 'react';
import Login from './login.jsx';

// import DefaultData from '../Data/initial-data.json';

 import  {usersData}  from '../Data/usersData.jsx';

export  const UserContext = createContext(
  {
    user: null,
    isLogged: false,
  },
);

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState(usersData.find((user) => user.id=== 4 && user.name=== 'Emma Munguetsoni' && user.username=== 'emma' && user.avatar=== 'src/images/profile-photo.png' ));

 
  
 
  // const [user, setUser] = useState(null);
  
  const handleLoginSubmit = (userName, password) => {


    // setUser({
    //   name: userName,
    //   password: password,
    //   email: 'qpmzj@example.com',

    //       });

    const loggedInUser = usersData.find((userData) => userData.username === userName && userData.password === password);

        if (loggedInUser){ 
          setUser(loggedInUser);
        }
  };

  return (
    user ?
    
    (<UserContext.Provider value={{ isLogged: true, user:user }}>
        {children}
      </UserContext.Provider>) 
    :
    (<Login handleLoginSubmit={handleLoginSubmit} />)

  );
};





