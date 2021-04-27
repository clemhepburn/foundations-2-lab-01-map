import { Component } from 'react';
import './App.css';
import React from 'react';
import Header from './Header';
import books from './books';
import BookList from './BookList';
import Footer from './Footer';
import BookSearch from './BookSearch';

class App extends Component {
  handleSearch = (search) => {
    console.log(search);
  }
  render() {
    return (
      <div className="App">
  
        <Header />

        <BookSearch onSearch={this.handleSearch} />

        <main>
          <BookList books={books} />
        </main>
        <Footer />
      </div>
    );
  }

}

export default App;
