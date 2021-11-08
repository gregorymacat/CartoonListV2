import React from 'react';

function NewsFeed () {
  return (
    <div className="news-feed">
      <h1>News Feed</h1>
      <div className="news-article">
        <h2>Added news feed to home page</h2>
        <span>The first feature besides the universal navbar to be implemented on the homepage</span>
      </div>
      <div className="news-article">
        <h2>Added friends list to home page</h2>
        <span>The second feature to be implemented</span>
      </div>
    </div>
  )
}

export default NewsFeed;