import React, { Component } from 'react';
import './BookItem.css';


class BookItem extends Component {

  render() {
    const book = this.props.book;
    return (
      <li className="BookItem">
        <h2>{book.name}</h2>
        <img src={book.image} alt={book.name} />
        <p>{book.genre}</p>
        <p>{book.year}</p>
      </li>
    );
  }
}

export default BookItem;