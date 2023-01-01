import React from 'react';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      message: null
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handleMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };
    const requestObj = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    fetch('/api/uploads/contact', requestObj)
      .then(result => result.json())
      .then(result => {
        if (result.error) {
          alert('Message failed to send');
          return;
        }
        event.target.reset();
        this.setState({
          name: null,
          email: null,
          message: null
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className='contact-form-holder-styles'>
        <h1> Get in touch! </h1>
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
          <input
            className='contact-form-input-styles'
            type='email'
            onChange={this.handleEmailChange}
            placeholder='Email'
            autoComplete="off"
            required
          />
          <textarea
            className='contact-form-input-styles'
            type='textarea'
            onChange={this.handleMessageChange}
            placeholder='Message'
            autoComplete="off"
            required
          />
          <input
          className='submit-button'
            type='submit'
          />
        </form>
      </div>
    );
  }
}
