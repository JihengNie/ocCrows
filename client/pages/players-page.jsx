import React from 'react';

export default class PlayersPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sidebarActive: true
    };
  }

  render() {
    return (
      <div>
        <h1> Hello World</h1>
      </div>
    );
  }
}
