import React from 'react';
import Sidebar from '../components/sidebar';

export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sidebarActive: false
    };
    this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
  }

  handleHamburgerClick() {
    this.setState({ sidebarActive: !this.state.sidebarActive });
  }

  render() {
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
            {this.state.sidebarActive ? <Sidebar /> : caw}
          </h1>
          <div className='flex-right'>
            <i onClick={this.handleHamburgerClick} className="fa-solid fa-bars fa-2x fa-bars-style orange" />
          </div>
        </div>
      </div>
    );
  }
}
