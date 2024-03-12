import {Home} from "./pages/home.jsx";
import {Layout} from "./components/layout.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Explorer} from "./pages/explorer.jsx";
import {Lists} from "./pages/lists.jsx";
import {Messages} from "./pages/messages.jsx";
import {Bookmarks} from "./pages/bookmarks.jsx";
import {Notifications} from "./pages/notifications.jsx";
import {More} from "./pages/more.jsx";
import {UserProfile} from "./pages/profile.jsx";

import {UseTweets} from "./components/tweetDefaultData.jsx";
import {UserProvider} from "./context/userContext.jsx";

import {UseUsers} from "./Data/usersData.jsx";

// import Sidebar from "./components/sidebar.jsx";
// import Trends from "./components/trends.jsx";

import('./style/reset.css');
import('./style/App.css');
import('./style/sidebar.css');
import('./style/trends.css');
import('./style/profile.css');

export default function App() {
  return (
  <UserProvider>
  <UseUsers>
  <UseTweets> 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="explorer" element={<Explorer />} />          
          <Route path="notifications" element={<Notifications />} />
          <Route path="messages" element={<Messages />} />          
          <Route path="bookmarks" element={<Bookmarks />} />
          <Route path="lists" element={<Lists />} />
          <Route path="/profile/:userId" element={<UserProfile />} />
          <Route path="more" element={<More />} />        
        </Route>      
      </Routes>    
    </BrowserRouter>
    </UseTweets>
    </UseUsers>
    </UserProvider>
 
    
    // {/* <Layout>
    //   {/* <Sidebar /> */}
    //{/* //   <Home /> */}
    //   {/* <Trends /> */}
    //{/* // </Layout> */} 
  );
}
