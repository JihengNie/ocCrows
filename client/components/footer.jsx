import React from 'react';

export default function Footer(props) {
  return (
    <footer>
      <div className='social-media flex-column flex-center'>
        <div className='vertical-line' />
        <a href="https://www.youtube.com/@JihengNie"><i className="fa-brands fa-2x fa-youtube" /></a>
        <a href="https://www.instagram.com/crowsultimate/"><i className="fa-solid fa-2x fa-image" /></a>
        <a href="https://discord.gg/zcN5uK9PRN"><i className="fa-brands fa-2x fa-discord fa-discord-style" /></a>
        <a href="https://www.instagram.com/crowsultimate/"><i className="fa-brands fa-2x fa-instagram" /></a>
      </div>
      <p className='copyright-style'> &copy; Copyright 2022. Made by Gooogl3</p>
    </footer>
  );
}
