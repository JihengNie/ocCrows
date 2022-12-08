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
          <PlayerCard number={0} name="Jiheng Nie" nickname="Google" imgSrc='/images/Zamin.gif'/>
          <PlayerCard number={1} name="Player foo" nickname="Nickname" imgSrc='/images/Zamin.gif' />
          <PlayerCard number={2} name="Player bar" nickname="OtherName" imgSrc='/images/Zamin.gif' />
          <PlayerCard number={3} name="Player baz" nickname="YesName" imgSrc='/images/Zamin.gif' />
          <PlayerCard number={4} name="Player etc" nickname="NameName" imgSrc='/images/Zamin.gif' />
        </div>
        <Footer />
      </div>
    );
  }
}
