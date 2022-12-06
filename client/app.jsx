import React from 'react';
import LandingPage from './landing-page';
import parseRoute from '.lib/parseRoute';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', event => {
      this.setState({
        route: parseRoute(window.location.hash)
      });
    });
  }

  render() {
    return <LandingPage />;
  }
}
