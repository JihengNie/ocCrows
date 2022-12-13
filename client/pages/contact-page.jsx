import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default class ContactPage extends React.Component {

  render() {
    return (
      <div className='container'>
        <Header />
        <div className='contact-text-holder flex-center flex-column'>
          <h1> Contact Us Here:</h1>
          <h4> Instagram: crowsultimate</h4>
          <h4> Discord: https://discord.gg/zcN5uK9PRN</h4>
          <h4> OC Ulti: https://oculti.org/club-teams</h4>
        </div>
        <div className='team-img-holder flex-center '>
          <img src='/images/Zamin.gif' />
        </div>
        <Footer />
      </div>
    );
  }
}
