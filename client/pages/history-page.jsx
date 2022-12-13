import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import SectionTitle from '../components/section-title';
import SectionText from '../components/section-text';

export default class HistoryPage extends React.Component {

  render() {
    return (
      <div className='container'>
        <Header />
        <SectionTitle text='2019' />
        <div className='row'>
          <SectionText
              title="Apr 19, 2019"
              content="Mikael Agopian and Holden Thompson created the club."
          />
          <SectionText
              title="May 4, 2019"
              content="First day of tryouts. 35 attended!"
            />
          <SectionText
            title="June 16, 2019"
            content="First tournment for Crows. Lunchbox got injuried."
          />
          <SectionText
            title="July 27, 2019"
            content="Tournment in Torrance. Got jerseys, went 0-3, but feeling 100%."
          />
        </div>
        <SectionTitle text='2020' />
        <div className='row'>
          <SectionText
            title="Year of 2020"
            content="We do not talk about 2020."
          />
        </div>
        <SectionTitle text='2021' />
        <div className='row'>
          <SectionText
            title="Aug 29, 2021"
            content="Fitst win at Shootout with 15 players! Also, Google got his first sky ever."
          />
          <SectionText
            title="Sep 20, 2021"
            content="18 Crows went to sectionals. Did not go too well, but fired up for next year!"
          />
        </div>
        <SectionTitle text='2022' />
        <div className='row'>
          <SectionText
            title="June 25, 2022"
            content="Crows went to SD Slammer. Did pretty well."
          />
          <SectionText
            title="July 23, 2022"
            content="Crows rocked Shootout! Start of the riverary against Hazard. Hazard won on U-point."
          />
          <SectionText
            title="Sep 10, 2022"
            content="Crows performed at Sectionals. Beat Hazard 14-6. Ended 4th our of 15 in the section."
          />
          <SectionText
            title="Sep 24, 2022"
            content="Attended Regionals in Arizona!"
          />
        </div>
        <Footer />
      </div>
    );
  }
}
