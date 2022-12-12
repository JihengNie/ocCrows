import React from 'react';

export default function Sidebar(props) {
  return (
    <span className='sidebar-holder'>
      <ul>
        <li> <a href='#players'> Players </a></li>
        <li> <a href='#schedule'> Schedule </a></li>
        <li> <a href='#history'> History </a></li>
        <li> <a href='#contact'> Contact </a></li>
      </ul>
    </span>
  );
}
