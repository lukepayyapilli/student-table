import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StudentRowCell from '../StudentRowCell';

export default class StudentRow extends Component {

  render() {
    const { data, display } = this.props;
    const style = {
      display: display ? "" : "none"
    }
    // add checkbox for each row //
    let row = [<td style={style} key={"checkbox" + data.id}><input type="checkbox"/></td>];
    for (let key in data) {
      row.push(<StudentRowCell key={data[key]} style={style} data={data[key]} />);
    }
    return (
      <tr>{row}</tr>
    )
  }
}

StudentRow.propTypes = {
    data: PropTypes.object.isRequired,
    display: PropTypes.bool.isRequired
};
