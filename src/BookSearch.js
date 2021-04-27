import { Component } from 'react';
import './BookSearch.css';

export default class BookSearch extends Component {
  state = {
    nameSearch: '',
    sortField: '',
  }

  handleNameChange = ({ target }) => {
    this.setState({ nameSearch: target.value });
  }

  handleSearchChange = ({ target }) => {
    this.setState({ sortField: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state);
  }

  render() {
    const { nameSearch, sortField } = this.state;
    return (
      <form className="BookSearch" onSubmit={this.handleSubmit}>
        <input name="nameSearch" value={nameSearch} onChange={this.handleNameChange} />
        <select name="sortField" value={sortField} onChange={this.handleSearchChange}>
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