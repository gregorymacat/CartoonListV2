import React from 'react';
import Navbar from '../Shared/Navbar.jsx';

function ListPage(props) {
  return (
    <div className='list-body'>
      <Navbar click={props.click}/>
      <span>This is where this list page will go</span>
    </div>
  )
}

export default ListPage;