import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
    render() {
        if(!this.props.activeBook) {
            return <div>Select a book to get started.</div>;
        }

        return (
            <div>
                <h3>{this.props.activeBook.title}</h3>
                <h6>{this.props.activeBook.pages}</h6>
            </div>
        )
    }
}

function mapStateToProps(state) {
  return {
    activeBook: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
