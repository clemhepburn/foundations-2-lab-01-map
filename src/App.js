import { Component } from 'react';
import './App.css';
import React from 'react';
import Header from './Header';
import books from './books';
import BookList from './BookList';

class App extends Component {

  render() {
    return (
      <div className="App">
  
        <Header />
        <main>
          <BookList />
        </main>
      
      </div>
    );
  }

}

export default App;
