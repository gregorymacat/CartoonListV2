import React from 'react';

function FriendsList() {
  let userImageUrl = 'https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg';

  return (
    <div className="friends-list">
      <h1>Friends List</h1>
      <div className="friend-container">
        <img src={userImageUrl} alt="User profile picture"/>
        <h2>AFriendHere</h2>
      </div>
    </div>
  )
}

export default FriendsList;