import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import PlayerCard from '../components/player-card';

export default class PlayersPage extends React.Component {

  render() {
    return (
      <div className='container'>
        <Header />
        <div className='row player-card-container'>
          <PlayerCard number={1} name="Jacob" nickname="Classic" imgSrc='/team/classics.jpg' />
          <PlayerCard number={0} name="Chris" nickname="Dino" imgSrc='/team/chris.jpg'/>
          <PlayerCard number={2} name="Issac" nickname="OtherName" imgSrc='/team/Issac.jpg' />
          <PlayerCard number={3} name="Player baz" nickname="YesName" imgSrc='/team/moose.jpg' />
          <PlayerCard number={4} name="Player etc" nickname="NameName" imgSrc='/team/reno.jpg' />
          <PlayerCard number={0} name="Chris" nickname="Dino" imgSrc='/team/chris.jpg' />

        </div>
        <Footer />
      </div>
    );
  }
}
