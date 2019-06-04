import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import StudentTableContainer from '../StudentTableContainer';
import { extractColumnsFromTable, mock_data } from '../../utils';

it('renders without crashing for initial state', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <StudentTableContainer loadTableData={() => {return false}} loaded={false} data={[]}/>
  ,div);
});
it('renders without crashing for initial state', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <StudentTableContainer loadTableData={() => {return true;}} loaded={true} data={mock_data}/>
  ,div);
});
