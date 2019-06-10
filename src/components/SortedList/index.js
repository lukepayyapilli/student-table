import { Component } from 'react';
import _ from 'lodash';

export default class SortedList extends Component {
  sort = (data, fields) => {
    return _.sortBy(data, fields);
  }
  render() {
    const { children, data, sortFields } = this.props;
    const sortedData = this.sort(data, sortFields);
    return children({
      sortedData: sortedData
    });
  }
}
