import React, { Component } from 'react';
import BookItem from './BookItem';
import './BookList.css';

class BookList extends Component {

  render() {

    return (
      <ul className="BookList">
        <BookItem />
      </ul>
    );
  }
}

export default BookList;