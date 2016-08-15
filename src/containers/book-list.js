import React, {Component} from 'react';
import {connect} from 'react-redux';

import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
            onClick={() => this.props.selectBook(book)}
            key={book.title}
            className='list-group-item'>
            {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // Return value will be available inside props
  return {
    books: state.books
  };
}

// Anything returned from this function will be available as props on the BookList container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, result is passed to all reducers
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

// Promote BookList component to a container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
