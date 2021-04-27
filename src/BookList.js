import React, { Component } from 'react';
import BookItem from './BookItem';
import './BookList.css';

class BookList extends Component {

  render() {
    const books = this.props.books;
    return (
      <ul className="BookList">
        {books.map(book => (
          <BookItem key={book.name} book={book}/>
        ))}

      </ul>
    );
  }
}

export default BookList;