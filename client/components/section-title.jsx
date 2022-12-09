import React from 'react';

export default class SectionTitle extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='column-full-always'>
            <h1 className='section-title-style' id={this.props.text}>
              <span className='section-title-style-text'>
                <span className='orange'> # </span>
                {this.props.text}</span>
              <hr className='horzontial-line'/>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}
