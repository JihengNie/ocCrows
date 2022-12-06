import React from 'react';
import Sidebar from '../components/sidebar';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sidebarActive: true
    };
    this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
  }

  handleHamburgerClick() {
    this.setState({ sidebarActive: !this.state.sidebarActive });
  }

  render() {
    return (
      <div className='row flex-left margin-bottom-add-2rem'>
        <div className='column-full'>
          <h1 className='logo-holder'>
            <span>
              <img src='/images/Crow_Logo_v3.png' className='logo-style' />
            </span>
            C Crows
            {this.state.sidebarActive ? <Sidebar /> : null}
          </h1>
          <div className='flex-right'>
            <i onClick={this.handleHamburgerClick} className="fa-solid fa-bars fa-3x fa-bars-style" />
          </div>
        </div>
      </div>
    );
  }
}
