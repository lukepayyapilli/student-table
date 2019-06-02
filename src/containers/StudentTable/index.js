import React, { Component } from 'react';
import { extractColumnsFromTable } from '../../utils';
import Table from '../../components/Table';

export default class StudentTable extends Component {

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
        <Table data={tableData.data} cols={tableData.cols} />
      );
    } else {
      return (<div> Err, something went wrong.</div>);
    }
  }
}
