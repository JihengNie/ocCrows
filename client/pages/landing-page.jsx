import React from 'react';

export default class LandingPage extends React.Component {

  render() {
    return (
      <div className='container'>
        <div className='row flex-center'>
          <div className='column-third'>
            <h1 className='logo-holder'>
              <span>
                <img src='/images/Crow_Logo_v3.png' className='logo-style'/>
              </span>
              C Crows
              <i className="fa-solid fa-bars fa-bars-style" />
            </h1>
          </div>
        </div>
        <div className='row'>
          <div className='column-full flex-center'>
            <h1 className='team-desciption'>
              A club ultimate frisbee team based in Orange County
            </h1>
          </div>
        </div>
        <div className='row'>
          <div className='column-full flex-center'>
            <div className='team-img-holder'>
              <img src='/images/Zamin.gif'/>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='column-full flex-center'>
            <div className='events-holder'>
              <h1 className='events-header'>
                Upcoming Events
              </h1>
              <div className='events'>
                <h1>
                  Tryouts
                  <i className="fa-solid fa-location-dot" />
                </h1>
                <h5> Date: 1/29/23 </h5>
                <h5> Location: 15 San Carlo, Irvine, CA 92614 </h5>
              </div>
              <div className='events'>
                <h1>
                  SD Slammer
                  <i className="fa-solid fa-location-dot" />
                </h1>
                <h5> Date: 3/16/23 </h5>
                <h5> Location: 4042 ALBATROSS ST SAN DIEGO CA 92103-1977 USA </h5>
              </div>
            </div>
          </div>
        </div>
        <div className='row flex-center'>
          <div className='column-full crow-facts'>
            <h4> Crow fact #221:</h4>
            <p>
              <i className="fa-solid fa-quote-left fa-quote-left-style" />
              Crows area physically incapable of keeping white jerseys clean
              <i className="fa-sharp fa-solid fa-quote-right fa-quote-right-style"/>
            </p>
            <h3> - Chris Reichel</h3>
          </div>
        </div>
        <footer>
          <p> &copy; Copyright 2022. Made by Gooogl3</p>
        </footer>
      </div>
    );
  }
}
