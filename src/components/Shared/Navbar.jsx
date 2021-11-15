import React from 'react';

function Navbar (props) {
  return (
    <div className="navbar">
      <span id="Home" onClick={props.click}>Home</span>
      <span id="List" onClick={props.click}>List</span>
      <span id="Account" onClick={props.click}>Account</span>
    </div>
  )
}

export default Navbar;