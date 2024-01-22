

 export  const usersData = [
        {
          id: 1,
          name: "The New York Times",
          username: "nytimes",
          email: "tzirw@example.com",
          age: 25,
          address: "456 Park Ave, Anytown USA",
          phone: "555-555-5556",
          gender: "female",
          interests: ["politics", "technology", "travel"],
          author: "j@123",
          avatar: "src/images/TNYT.png",   
          isAdmin: false,
          isConnect: false,
          Follwers: 0,
          Following: 0,
          tweets: 0,    
        },
        {
          id: 2,
          name: "CNN",
          username: "CNN",
          email: "tugrp@example.com",
          age: 30,
          address: "123 Main St, Anytown USA",
          phone: "555-555-5555",
          gender: "male",
          interests: ["sports", "music", "travel"],
          author: "j@123",
          avatar: "src/images/cnn-profile-photo.png",
          isAdmin: false,
          isConnect: false,
          Follwers: 0,
          Following: 0,
          tweets: 0,    
        },
        {
          id: 3,
          name: "Tweeter",
          username: "tweeter",
          email: "tzirw@example.com",
          age: 28,
          address: "789 Elm St, Anytown USA",
          phone: "555-555-5557",
          gender: "female",
          interests: ["politics", "technology", "travel"],
          author: "j@123",
          avatar: "src/images/Tweet-Profile-Photo.png",
          isAdmin: false,
          isConnect: false,
          Follwers: 0,
          Following: 0,
          tweets: 0,    
        },
        {
          id: 4,
          name: 'Emma Munguetsoni',
          username: 'emma',
          email: 'qpmzj@example.com',
          age: 25,
          address: '123 Main St, Anytown USA',
          phone: '555-555-5558',
          gender: 'male',
          interests: ['politics', 'technology', 'travel'],
          author: 'j@123',
          avatar: 'src/images/profile-photo.png',
          isAdmin: false,
          isConnect: false,
          Follwers: 0,
          Following: 0,
          tweets: 0,
          password: 'password',
          role: 'admin',
        }
      ];


export const useUsers = () => {
  const [users, setUsers] = useState(usersData);
  // const [isAdmin, setIsAdmin] = useState(false);
  // const [isConnect, setIsConnect] = useState(false);
  // const [isAuth, setIsAuth] = useState(false);

  const AddUser = (user) => {
    // setUser((prev) => [...prev, user]);
    setUsers((curr) => { 
      const newUser = {
        id: curr.length + 1,
        name: user.name,
        username: user.username,
        email: user.email,
        age: user.age,
        address: user.address,
        phone: user.phone,
        gender: user.gender,
        interests: user.interests,
        author: user.author,
        avatar: user.avatar,
        isAdmin: user.isAdmin,
        isConnect: user.isConnect,
        Follwers: user.Follwers,
        Following: user.Following,
        tweets: user.tweets,
      };
      return [...curr, newUser];
    });

  };
  const DeleteUser = (id) => { 
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };
  const UpdateUser = (id, user) => { 
    setUsers((prev) => { 
      const newUser = { 
        id: id,
        name: user.name,
        username: user.username,
        email: user.email,
        age: user.age,
        address: user.address,
        phone: user.phone,
        gender: user.gender,
        interests: user.interests,
        author: user.author,
        avatar: user.avatar,
        isAdmin: user.isAdmin,
        isConnect: user.isConnect,
        Follwers: user.Follwers,
        Following: user.Following,
        tweets: user.tweets,
      };
      return prev.map((user) => (user.id === id ? newUser : user));
    });
  };

  

  
  // const AuthUser = (user) => { 
  //   setIsAuth(true);
  //   setUser((prev) => { 
  //     const newUser = 

  // const isAdmin = (user) => { 
  //   setIsAdmin(true);
  // };

  // const isConnect = (user) => { 
  //   setIsConnect(true);
  // };

  // const isAuth = (user) => { 
  //   setIsAuth(true);
  // };

  return {   
    users,
    AddUser,
    DeleteUser,
    UpdateUser,
};

};

  
    
    
  
  







  
  
