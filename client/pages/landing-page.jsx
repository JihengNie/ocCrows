import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default class LandingPage extends React.Component {

  render() {
    return (
      <div className='container'>
        <Header/>

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

        <Footer/>
      </div>
    );
  }
}
