import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { loadTableData } from '../../actions/tableActions';
import StudentTable from '../StudentTable';

function mapState(state) {
  return {
    loaded: state.tableReducer.loaded,
    data: state.tableReducer.data
  }
}

function mapDispatch(dispatch) {
  return {
    loadTableData: () => { loadTableData(dispatch) }
  }
};

class App extends Component {

  render() {
      return (
        <Router>
          <Route exact path="/" render={(route) => <StudentTable route={route} {...this.props} />} />
        </Router>
      );
    }
  }

export default connect(mapState, mapDispatch)(App);
