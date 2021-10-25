import React from 'react';

function LandingPage (props) {
  return (
    <div>
      <form>
        <label>Email</label>
        <input id="user-email" type="text">
        </input>
        <label>Password</label>
        <input id="user-pass" type="text">
        </input>
      </form>
    </div>
  )
}

export default LandingPage;