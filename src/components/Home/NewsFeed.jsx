import React from 'react';

function NewsFeed () {
  return (
    <div className="news-feed">
      <h1>News Feed</h1>
      <div className="news-article">
        <h2>Changed styling on home and login pages</h2>
        <span>Changed some spacing, coloring and shadowing</span>
      </div>
      <div className="news-article">
        <h2>Added switching pages feature</h2>
        <span>This will allow the user to switch between list (not yet implemented) and home page</span>
      </div>
      <div className="news-article">
        <h2>Added friends list to home page</h2>
        <span>The second feature to be implemented</span>
      </div>
      <div className="news-article">
        <h2>Added news feed to home page</h2>
        <span>The first feature besides the universal navbar to be implemented on the homepage</span>
      </div>
    </div>
  )
}

export default NewsFeed;