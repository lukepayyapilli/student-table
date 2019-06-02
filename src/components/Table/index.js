import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './table.scss';

export default class Table extends React.Component {

  render() {
    const { cols, data } = this.props;
    let tableHeader = [];
    cols.forEach(function(col) {
        tableHeader.push(<th>{col}</th>)
    });

    let table = _.map(data, function(obj) {
        let rows = [];
        for (let key in obj) {
            rows.push(<td>{obj[key]}</td>);
        }
        return (<tr>{rows}</tr>)
    });

    return (
        <div className="table-component">
            <table className="table">
                <thead>
                    <tr>{tableHeader}</tr>
                </thead>
                <tbody>
                    {table}
                </tbody>
            </table>
        </div>
    );
  }
}

Table.propTypes = {
    data: PropTypes.object.isRequired,
    cols: PropTypes.array.isRequired
};
