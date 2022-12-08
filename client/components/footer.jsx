import React from 'react';

export default function Footer(props) {
  return (
    <footer>
      <div className='social-media flex-column flex-center'>
        <div className='vertical-line' />
        <div><i className="fa-brands fa-2x fa-youtube" /></div>
        <div><i className="fa-solid fa-2x fa-image" /></div>
        <div><i className="fa-brands fa-2x fa-discord fa-discord-style" /></div>
        <div><i className="fa-brands fa-2x fa-instagram" /></div>
      </div>
      <p className='copyright-style'> &copy; Copyright 2022. Made by Gooogl3</p>
    </footer>
  );
}
