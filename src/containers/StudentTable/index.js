import React, { Component } from 'react';

export default class StudentTable extends Component {

  componentDidMount() {
    this.props.loadTableData();
  }
  
  render() {
    return (
      <div>I'm a table </div>
    )
  }
}
