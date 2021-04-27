import { Component } from 'react';
import './App.css';
import React from 'react';
import Header from './Header';
import books from './books';
import BookList from './BookList';
import Footer from './Footer';
import BookSearch from './BookSearch';

const bookTypes = [...new Set(books.map(c => c.type))];

class App extends Component {
  state = {
    books: books
  }
  
  handleSearch = ({ nameSearch, typeFilter, sortField }) => {
    const nameRegex = new RegExp(nameSearch, 'i');

    const searchedData = books
      .filter(book => {
        return !nameSearch || book.name.match(nameRegex);
      })
      .filter(book => {
        return !typeFilter || book.type === typeFilter;
      })
      .sort((a, b) => {
        if (a[sortField] < b[sortField]) return -1;
        if (a[sortField > b[sortField]]) return 1;
        return 0;
      });


    this.setState({ books: searchedData });
    
  }
  render() {
    const { books } = this.state;
    return (
      <div className="App">
  
        <Header />

        <BookSearch types={bookTypes} onSearch={this.handleSearch} />

        <main>
          <BookList books={books} />
        </main>
        <Footer />
      </div>
    );
  }

}

export default App;
