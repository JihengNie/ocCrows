import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default class ContactPage extends React.Component {

  render() {
    return (
      <div className='container'>
        <Header />
        <div className='contact-text-holder flex-center flex-column'>
          <h1> <u>Contact Us Here:</u></h1>
          <div className='row'>
            <div className='column-third-always'>
              <a href="https://www.instagram.com/crowsultimate/"><i className="fa-brands fa-2x fa-instagram logo-circle" /></a>
              <h4 className='text-center'> Instagram</h4>
            </div>
            <div className='column-third-always '>
              <a href="https://discord.gg/zcN5uK9PRN"><i className="fa-brands fa-2x fa-discord fa-discord-style logo-circle" /></a>
              <h4 className='text-center'> Discord</h4>
            </div>
            <div className='column-third-always '>
              <a href="https://oculti.org/club-teams"><img src='images/oc-ulti.jpg' className='logo-circle oc-ulti'/></a>
              <h4 className='text-center'> OC Ulti</h4>
            </div>
          </div>
        </div>
        <div className='row margin-sides-4rem'>
          <div className='column-one-third'>
            <div className='zamin-img-holder flex-center'>
              <img src='/images/Zamin.gif' />
            </div>
          </div>
          <div className='column-two-third'>
            <div className='contact-form-holder-styles'>
              <h1> Get in touch! </h1>
              <form className='contact-form-styles'>
                <input
                  className='contact-form-input-styles'
                  type='text'
                  autoFocus
                  placeholder='Name'
                  autoComplete="off"
                  required
                />
                <input
                  className='contact-form-input-styles'
                  type='email'
                  placeholder='Email'
                  autoComplete="off"
                  required
                />
                <textarea
                  className='contact-form-input-styles'
                  type='textarea'
                  placeholder='Message'
                  autoComplete="off"
                  required
                />
                <input
                  type='submit'
                />
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
