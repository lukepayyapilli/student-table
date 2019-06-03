import React, { Component } from 'react';
import { extractColumnsFromTable } from '../../utils';
import StudentTable from '../../components/StudentTable';

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
    if (!loaded) {
      return (<div> Loading Data...</div>);
    } else if (data) {
      let tableData = this.formatData(data);
      return (
        <StudentTable data={tableData.data} cols={tableData.cols} />
      );
    } else {
      return (<div> Err, something went wrong.</div>);
    }
  }
}
