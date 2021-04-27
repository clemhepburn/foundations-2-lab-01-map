import { Component } from 'react';
import './App.css';
import React from 'react';
import Header from './Header';
import books from './books';
import BookList from './BookList';
import Footer from './Footer';
import BookSearch from './BookSearch';

class App extends Component {

  render() {
    return (
      <div className="App">
  
        <Header />
        <main>
          <BookList books={books} />
        </main>
        <Footer />
      </div>
    );
  }

}

export default App;
