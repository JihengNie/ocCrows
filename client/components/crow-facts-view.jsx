import React from 'react';

export default class CrowFactDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      crowFacts: null
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.createTable = this.createTable.bind(this);
  }

  handleButtonClick() {
    const requestObj = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch('/api/crow-facts', requestObj)
      .then(result => result.json())
      .then(result => {
        if (result.length > 0) {
          this.setState({
            crowFacts: result
          });
        } else {
          alert('No facts avilable');
        }
      })
      .catch(err => console.error(err));
  }

  createTable(object) {
    const tableData = object;
    const tableHeader = Object.keys(tableData[0]);
    const tableHeaderHTML = [];
    const tableRowHTML = [];
    for (let i = 0; i < tableHeader.length; i++) {
      tableHeaderHTML.push(
        <th key={i}> {tableHeader[i]} </th>
      );
    }
    for (let i = 0; i < object.length; i++) {
      tableRowHTML.push(
        <tr key={i}>
          <td> {object[i].number} </td>
          <td> {object[i].name} </td>
          <td> {object[i].fact} </td>
        </tr>
      );
    }
    return (
      <table border="1">
        <tr> {tableHeaderHTML} </tr>
        {tableRowHTML}
      </table>
    );
  }

  render() {
    const factTable = this.state.crowFacts ? this.createTable(this.state.crowFacts) : null;
    return (
      <div className='container'>
        <button onClick={this.handleButtonClick}> View Current Facts </button>
        <div className='crow-fact-table-styles'>
          {factTable}
        </div>
      </div>
    );
  }
}
