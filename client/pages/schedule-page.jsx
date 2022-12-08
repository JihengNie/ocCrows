import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import SectionTitle from '../components/section-title';

export default class SchedulePage extends React.Component {

  render() {
    return (
      <div className='container'>
        <Header />
        <SectionTitle text='2019'/>
        <SectionTitle text='2020' />
        <SectionTitle text='Soomething Longger text' />
        <Footer />
      </div>
    );
  }
}
