import React from 'react';
import LandingPage from './pages/landing-page';
import parseRoute from './lib/parseRoute';
import PlayersPage from './pages/players-page';
import SchedulePage from './pages/schedule-page';
import HistoryPage from './pages/history-page';
import ContactPage from './pages/contact-page';
import AppContext from './lib/app-context';
import CrowFacts from './pages/crow-fact-page';
import Messages from './pages/messages';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash),
      sidebarActive: false
    };
    this.renderPage = this.renderPage.bind(this);
    this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
  }

  handleHamburgerClick() {
    this.setState({ sidebarActive: !this.state.sidebarActive });
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
    else if (route === 'crow-facts') return <CrowFacts />;
    else if (route === 'messages') return <Messages />;
    else return <LandingPage />;

  }

  render() {
    const { sidebarActive } = this.state;
    const { handleHamburgerClick } = this;
    const contextValue = { sidebarActive, handleHamburgerClick };
    return (
      <AppContext.Provider value={contextValue}>
        {this.renderPage()}
      </AppContext.Provider>
    );
  }
}
