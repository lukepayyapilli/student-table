import React, { Component } from 'react';
import StudentRow from '../StudentRow';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './table.scss';

export default class StudentTable extends Component {

  render() {
    const { cols, data } = this.props;
    // initialize table header with checkbox //
    let tableHeader = [<th key={"checkbox-header"}><label><input type="checkbox" />Select All</label></th>];
    cols.forEach((col) => { tableHeader.push(<th data-column={col} key={col}>{col}</th>) });
    let rows = _.map(data, (obj) => { return (<StudentRow key={obj.id} data={obj} />);});

    return (
        <div className="table-component">
            <table className="table">
                <thead>
                  <tr>{tableHeader}</tr>
                </thead>
                <tbody>
                  {rows}
                </tbody>
            </table>
        </div>
    );
  }
}

StudentTable.propTypes = {
    data: PropTypes.array.isRequired,
    cols: PropTypes.array.isRequired
};
