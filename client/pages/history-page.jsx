import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import SectionTitle from '../components/section-title';

export default class HistoryPage extends React.Component {

  render() {
    return (
      <div className='container'>
        <Header />
        <SectionTitle text='2019' />
        <Footer />
      </div>
    );
  }
}
