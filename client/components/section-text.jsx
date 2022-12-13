import React from 'react';

export default class SectionText extends React.Component {
  render() {
    return (
      <div className='column-one-fourth flex-center'>
        <div className='section-text-holder'>
          <h1 className='section-text-title'>
            {this.props.title}
          </h1>
          <p className='section-text-content'>{this.props.content}</p>
        </div>
      </div>
    );
  }
}
