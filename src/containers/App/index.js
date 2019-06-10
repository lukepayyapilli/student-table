import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { loadTableData, saveSortFields } from '../../actions/tableActions';
import StudentTableContainer from '../StudentTableContainer';

function mapState(state) {
  return {
    loaded: state.tableData.loaded,
    data: state.tableData.data,
    fields: state.tableData.fields
  }
}

function mapDispatch(dispatch) {
  return {
    loadTableData: () => { loadTableData(dispatch) },
    saveSortFields: (fields) => { saveSortFields(dispatch, fields)}
  }
};

class App extends Component {
  render() {
      return (
        <Router>
          <Route exact path="/" render={(route) => <StudentTableContainer route={route} {...this.props} />} />
        </Router>
      );
    }
  }

export default connect(mapState, mapDispatch)(App);
