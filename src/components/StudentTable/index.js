import React, { Component } from 'react';
import StudentRow from '../StudentRow';
import { Paginate } from '../Paginate';
import SortedList from '../SortedList';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './table.scss';

class StudentTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortFields: props.fields || [],
      searchStr: ''
    }
  }

  onClickColumnHeader = (e) => {
    const { sortFields } = this.state;
    let column = e.target.dataset.column;
    sortFields.includes(column) ? sortFields.splice(sortFields.indexOf(column), 1) : sortFields.push(column);
    this.setState({sortFields});
  }

  saveSort = () => {
    const { saveSortFields } = this.props;
    const { sortFields } = this.state;
    saveSortFields(sortFields);
  }

  onUpdateSearch = (e) => {
    this.setState({searchStr: e.target.value});
  }

  render() {
    const { cols, pages, lastItemIndex, firstItemIndex, data } = this.props;
    const { sortFields, searchStr } = this.state;
    let filtered = false;

    // initialize table header with checkbox //
    let tableHeader = [<th key={"checkbox-header"}><label>Select All <br/><input type="checkbox" /></label></th>];
    cols.forEach((col) => { tableHeader.push(<th data-column={col} key={col} onClick={this.onClickColumnHeader}>{_.startCase(col)}</th>) });


    return (
        <div className="table-component">
            <table className="table">
                <thead>
                  <tr>
                    {tableHeader}
                  </tr>
                </thead>
                <tbody>
                  <SortedList sortFields={sortFields} data={data}>
                    {({sortedData}) => {
                      let row_data = sortedData || data;
                      let rows = [];
                      _.map(row_data, (obj, index) => {
                      let i = index + 1;
                      let values = Object.values(obj);
                      values.forEach((val) => { if (val.toString().toLowerCase().indexOf(searchStr) > -1) { filtered = true; return; }})
                      let display = i > firstItemIndex && i <=lastItemIndex && filtered;
                      rows.push(<StudentRow key={obj.id} data={obj} display={display} />);
                      })
                      return rows;
                    }
                  }
                  </SortedList>
                </tbody>
            </table>
            <ul className="page-numbers">
              {pages}
            </ul>
            <input type="text" placeholder="Search" onChange={this.onUpdateSearch}></input>
            <button onClick={this.saveSort}>Save Sort</button>
        </div>
    );
  }
}

export default Paginate(StudentTable);

StudentTable.propTypes = {
    data: PropTypes.array.isRequired,
    cols: PropTypes.array.isRequired
};
