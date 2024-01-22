import React from 'react';

// import Sidebar from "./sidebar.jsx";
import Trends from "./trends.jsx";

import { Outlet, Link } from "react-router-dom";

import SidebarButton from './sbComponents/sidebarButton.jsx';
import LeftSidebarActions from './sbComponents/leftSidebarActions.jsx';

import {UseTweets} from "./tweetDefaultData.jsx";

function Layout() {
    return (
        <>
          <UseTweets>
            <div className="left-sidebar"  >
                <nav className="sidebar">
                  <ul>
                    <li className="left-sidebar-actions">
                      <Link to="/" className="lsb-actions-container">
                         <LeftSidebarActions image="src/images/imgSidebar/Twitter.png" imgAlt="Twitter logo" />
                      </Link>
                    </li>
                    
                    <li className="left-sidebar-actions">
                      <Link to="/" className="lsb-actions-container">
                         <LeftSidebarActions image="src/images/imgSidebar/home.png" imgAlt="home" title="Home" />
                      </Link>
                    </li>
                    <li className="left-sidebar-actions">
                      <Link to="/explorer" className="lsb-actions-container">
                        <LeftSidebarActions image="src/images/imgSidebar/Explore.png" imgAlt="Explore" title="Explore" />
                      </Link>
                    </li>
                    <li className="left-sidebar-actions">
                      <Link to="/notifications" className="lsb-actions-container">
                        <LeftSidebarActions image="src/images/imgSidebar/Notifications.png" imgAlt="Notifications" title="Notifications" />
                      </Link>
                    </li>
                    <li className="left-sidebar-actions">
                      <Link to="/messages" className="lsb-actions-container">
                        <LeftSidebarActions image="src/images/imgSidebar/Messages.png" imgAlt="Messages" title="Messages" />
                      </Link>
                    </li>
                    <li className="left-sidebar-actions">
                      <Link to="/bookmarks" className="lsb-actions-container">
                        <LeftSidebarActions image="src/images/imgSidebar/Bookmarks.png" imgAlt="Bookmarks" title="Bookmarks" />
                      </Link>
                    </li>
                    <li className="left-sidebar-actions">
                      <Link to="/lists" className="lsb-actions-container">
                        <LeftSidebarActions image="src/images/imgSidebar/Lists.png" imgAlt="Lists" title="Lists" />
                      </Link>
                    </li>
                    <li className="left-sidebar-actions">
                      <Link to="/profile" className="lsb-actions-container">
                        <LeftSidebarActions image="src/images/imgSidebar/Profile.png" imgAlt="Profile" title="Profile" />
                      </Link>
                    </li>
                    <li className="left-sidebar-actions">                    
                      <Link to="/more" className="lsb-actions-container">
                        <LeftSidebarActions image="src/images/imgSidebar/More.png" imgAlt="More" title="More" />
                      </Link>
                    </li>
                    <SidebarButton buttonText="Tweet"/>
                  </ul>
                </nav>
            </div>          
            <main className="timeline">
              <Outlet />
            </main>
            
            <div className="right-sidebar justify-center flex" >
              <Trends />

            </div>
            </UseTweets>
        </>
    );
}

export default Layout;