import React from 'react';
import Sidebar from '../components/sidebar';

export default class LandingPage extends React.Component {

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
      <div className='container'>
        <div className='row flex-left margin-bottom-add-2rem'>
          <div className='column-full'>
            <h1 className='logo-holder'>
              <span>
                <img src='/images/Crow_Logo_v3.png' className='logo-style'/>
              </span>
              C Crows
              {this.state.sidebarActive ? <Sidebar /> : null }
            </h1>
            <div className='flex-right'>
              <i onClick={this.handleHamburgerClick} className="fa-solid fa-bars fa-3x fa-bars-style" />
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='column-two-third flex-column'>
            <div>
              <h1 className='team-desciption'>
                A club ultimate frisbee team based in Orange County
              </h1>
            </div>
            <div className='team-img-holder flex-center '>
              <img src='/images/Zamin.gif'/>
            </div>
          </div>
          <div className='column-one-third'>
            <div className='events-holder '>
              <h1 className='events-header'>
                Upcoming Events
              </h1>
              <div className='events'>
                <h1>
                  Tryouts
                  <i className="fa-solid fa-location-dot" />
                </h1>
                <h5> Date: 1/29/23 </h5>
                <h5> Time: 10 am - 12 pm </h5>
                <h5> Location: 15 San Carlo, Irvine, CA 92614 </h5>
              </div>
              <div className='events'>
                <h1>
                  SD Slammer
                  <i className="fa-solid fa-location-dot" />
                </h1>
                <h5> Date: 3/16/23 </h5>
                <h5> Time: 10 am - 12 pm </h5>
                <h5> Location: 4042 ALBATROSS ST SAN DIEGO CA 92103-1977 USA </h5>
              </div>
            </div>
            <div className='crow-facts'>
              <h4> Crow fact #221:</h4>
              <p>
                <i className="fa-solid fa-quote-left fa-quote-left-style" />
                Crows area physically incapable of keeping white jerseys clean
                <i className="fa-sharp fa-solid fa-quote-right fa-quote-right-style"/>
              </p>
              <h3> - Chris Reichel</h3>
            </div>
          </div>
        </div>
        <div className='social-media flex-column flex-center'>
          <div className='vertical-line' />
          <div><i className="fa-brands fa-2x fa-youtube" /></div>
          <div><i className="fa-solid fa-2x fa-image" /></div>
          <div><i className="fa-brands fa-2x fa-discord fa-discord-style" /></div>
          <div><i className="fa-brands fa-2x fa-instagram" /></div>
        </div>
        <footer>
          <p> &copy; Copyright 2022. Made by Gooogl3</p>
        </footer>
      </div>
    );
  }
}
