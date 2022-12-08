import React from 'react';

export default class PlayerCard extends React.Component {

  render() {
    return (
      <div className='column-one-third'>
        <div className='player-card-holder'>
          <div className='player-card-image-holder'>
            <img src={this.props.imgSrc}/>
            <div className='player-card-text-holder'>
              <h1>
                <span className='player-card-number-style'># {this.props.number} </span>
                <span className='player-card-name-style'> {this.props.name} </span>
              </h1>
              <h3 className='player-card-nickname-style'><em> AKA:  &quot;{this.props.nickname}&quot;</em></h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
