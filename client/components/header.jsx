import React from 'react';
import Sidebar from '../components/sidebar';
import AppContext from '../lib/app-context';

export default class Header extends React.Component {

  render() {
    const { sidebarActive, handleHamburgerClick } = this.context;
    const caw = <span className='caw'> --- Caw Caw Caw --- </span>;
    return (
      <div className='row flex-left margin-bottom-add-2rem'>
        <div className='column-full'>
          <h1 className='logo-holder'>
            <a className='logo-styling-remove' href='#'>
              <span>
                <img src='/images/Crow_Logo_v3.png' className='logo-style' />
              </span>
              C Crows
            </a>
            {sidebarActive ? <Sidebar /> : caw}
          </h1>
          <div className='flex-right'>
            <i onClick={handleHamburgerClick} className="fa-solid fa-bars fa-2x fa-bars-style orange" />
          </div>
        </div>
      </div>
    );
  }
}

Header.contextType = AppContext;
