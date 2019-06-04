import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

export default class StudentRowCell extends Component {

  render() {
    const { data } = this.props;
    return (
      <td>{_.startCase(data)}</td>
    )
  }
}

StudentRowCell.propTypes = {
    data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};
