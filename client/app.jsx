import React from 'react';
import LandingPage from './pages/landing-page';
import parseRoute from './lib/parseRoute';
import PlayersPage from './pages/players-page';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
    this.renderPage = this.renderPage.bind(this);
  }

  componentDidMount() {
    window.addEventListener('hashchange', event => {
      this.setState({
        route: parseRoute(window.location.hash)
      });
    });
  }

  renderPage() {
    const route = this.state.route.path;
    if (route === 'players') return <PlayersPage/>;
    else return <LandingPage />;

  }

  render() {
    return (
      <>
        {this.renderPage()}
      </>
    );
  }
}
