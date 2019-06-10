import React, { Component } from 'react';

export const Paginate = (WrappedComponent) => {
  return class PaginatedList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currentPage: 1
      }
    }

    onClickPage = (e) => {
      this.setState({currentPage: e.target.dataset.page});
    }

    render() {
      const { rowsPerPage, length } = this.props;
      const { currentPage } = this.state;
      const lastItemIndex = currentPage * rowsPerPage;
      const firstItemIndex = lastItemIndex - rowsPerPage;

      // page display logic //
      const pages = [];
      for (let i = 1; i <= length/rowsPerPage; i ++) {
        pages.push(i);
      }
      const pageNumbers = pages.map(number => {
        return (
          <li key={number} data-page={number} onClick={this.onClickPage}>
            {number}
          </li>
        );
      })

      return (
        <WrappedComponent
          pages={pageNumbers}
          lastItemIndex={lastItemIndex}
          firstItemIndex={firstItemIndex}
          {...this.props}
        />)
    }
  }
}
