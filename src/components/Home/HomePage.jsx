import React from 'react';
import Navbar from '../Shared/Navbar.jsx';
import NewsFeed from './NewsFeed.jsx';
import FriendsList from './FriendsList.jsx';

function HomePage() {
  return (
    <React.Fragment>
      <Navbar/>
      <div className="home-container">
        <NewsFeed/>
        <FriendsList/>
      </div>
    </React.Fragment>
  )
}

export default HomePage;
