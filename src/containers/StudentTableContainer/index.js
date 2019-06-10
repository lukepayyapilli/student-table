import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { extractColumnsFromTable } from '../../utils';
import StudentTable from '../../components/StudentTable';
const ROWS_PER_PAGE = 10;

export default class StudentTableContainer extends Component {

  formatData = (data) => {
    return {
      cols: extractColumnsFromTable(data),
      data: data
    }
  }

  componentDidMount() {
    const { loadTableData } = this.props;
    loadTableData();
  }

  render() {
    const { loaded, data } = this.props;
    // loading state //
    if (!loaded) {
      return (<div> Loading Data...</div>);
    } else if (data) {
      let tableData = this.formatData(data);
      return (
        <StudentTable data={tableData.data} cols={tableData.cols} rowsPerPage={ROWS_PER_PAGE} length={tableData.data.length} {...this.props} />
      );
    // error state //
    } else {
      return (<div> Err, something went wrong.</div>);
    }
  }
}

StudentTableContainer.propTypes = {
    loadTableData: PropTypes.func.isRequired,
    loaded: PropTypes.bool.isRequired,
    data: PropTypes.array.isRequired
};
