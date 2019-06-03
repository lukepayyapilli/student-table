import React, { Component } from 'react';

export default class StudentRow extends Component {

  render() {
    const { data } = this.props;
    // add checkbox for each row //
    let row = [<td key={"checkbox" + data.id}><input type="checkbox"/></td>];
    for (let key in data) {
      row.push(<td key={key}>{data[key]}</td>);
    }
    return (
      <tr>{row}</tr>
    )
  }
}
