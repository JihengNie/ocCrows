import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default class PageName extends React.Component {

  render() {
    return (
      <div className='container'>
        <Header />

        <Footer />
      </div>
    );
  }
}
