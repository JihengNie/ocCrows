import React from 'react';

export default class PlayerCard extends React.Component {

  render() {
    return (
      <div className='column-one-third'>
        <div className='player-card-holder'>
          <div className='player-card-image-holder'>
            <img src='/images/Zamin.gif'/>
          </div>
          <h1> Player Name</h1>
          <h2> Player Number</h2>
          <h3> Player Nickname </h3>
        </div>
      </div>
    );
  }
}
