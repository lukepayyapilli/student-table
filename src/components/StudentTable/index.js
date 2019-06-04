import React, { Component } from 'react';
import StudentRow from '../StudentRow';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './table.scss';


export default class StudentTable extends Component {

  render() {
    let { cols, data } = this.props;
    // initialize table header with checkbox //
    let tableHeader = [<th key={"checkbox-header"}><label>Select All <br/><input type="checkbox" /></label></th>];
    cols.forEach((col) => { tableHeader.push(<th onClick={this.onClickColumnHeader} data-column={col} key={col}>{_.startCase(col)}</th>) });

    let rows = _.map(data, (obj, index) => {
      return (<StudentRow key={obj.id} data={obj} />)
      ;}
    );

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
