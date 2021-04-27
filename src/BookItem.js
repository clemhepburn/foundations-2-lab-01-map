import React, { Component } from 'react';
import './BookItem.css';


class BookItem extends Component {

  render() {
    const book = this.props.book;
    return (
      <li className="BookItem">
        <h2>{book.name}</h2>
        <p>{book.author}</p>
        <img src={book.image} alt={book.name} />
        <p>{book.type}</p>
        <p>{book.year}</p>
      </li>
    );
  }
}

export default BookItem;