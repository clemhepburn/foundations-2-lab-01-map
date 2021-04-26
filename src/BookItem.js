import React, { Component } from 'react';
import './BookItem.css';

class BookItem extends Component {

  render() {
    
    return (
      <li className="BookItem">
        <h2>a book</h2>
        <img src='books/funnyweather.jpg' alt='book cover'/>
      </li>
    );
  }
}

export default BookItem;