import { Component } from 'react';
import './BookSearch.css';

export default class BookSearch extends Component {

  render() {
    return (
      <form className="BookSearch">
        <input/>
        <select>
          <option value="">Sort By...</option>
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="Genre">Genre</option>
        </select>  
        <button>📚</button>
        
      </form>
    );
  }
}