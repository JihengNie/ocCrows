import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import CrowFactDisplay from '../components/crow-facts-view';

export default class CrowFacts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: null,
      fact: null
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleFactChange = this.handleFactChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleFactChange(event) {
    this.setState({ fact: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = {
      name: this.state.name,
      fact: this.state.fact
    };
    const requestObj = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    fetch('/api/uploads/crow-facts', requestObj)
      .then(result => result.json())
      .then(result => {
        if (result.error) {
          alert('Message failed to send');
          return;
        }
        event.target.reset();
        this.setState({
          name: null,
          fact: null
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className='container'>
        <Header />
        <div className='contact-form-holder-styles'>
          <h1> Add a new crow fact!</h1>
          <form className='contact-form-styles' onSubmit={this.handleSubmit}>
            <input
              className='contact-form-input-styles'
              type='text'
              onChange={this.handleNameChange}
              autoFocus
              placeholder='Name'
              autoComplete="off"
              required
            />
            <textarea
              className='contact-form-input-styles'
              type='textarea'
              onChange={this.handleFactChange}
              placeholder='fact'
              autoComplete="off"
              required
            />
            <input
              className='submit-button'
              type='submit'
            />
          </form>
        </div>
        <CrowFactDisplay/>
        <Footer />
      </div>
    );
  }
}
