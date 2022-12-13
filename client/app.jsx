import React from 'react';
import LandingPage from './pages/landing-page';
import parseRoute from './lib/parseRoute';
import PlayersPage from './pages/players-page';
import SchedulePage from './pages/schedule-page';
import HistoryPage from './pages/history-page';
import ContactPage from './pages/contact-page';

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
    else if (route === 'schedule') return <SchedulePage />;
    else if (route === 'history') return <HistoryPage />;
    else if (route === 'contact') return <ContactPage />;
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
