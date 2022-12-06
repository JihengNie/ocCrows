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
          <PlayerCard/>
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
        </div>
        <Footer />
      </div>
    );
  }
}
