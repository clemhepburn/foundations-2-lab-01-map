import { Component } from 'react';
import './BookSearch.css';

export default class BookSearch extends Component {
  state = {
    nameSearch: '',
    sortField: '',
    typeFilter: ''
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

  componentDidUpdate(prevProp, prevState) {
    if (prevState !== this.state) {
      this.props.onSearch(this.state);
    }
  }

  render() {
    const { nameSearch, sortField, typeFilter } = this.state;
    return (
      <form className="BookSearch" onSubmit={this.handleSubmit}>
        <input name="nameSearch" value={nameSearch} onChange={this.handleNameChange} />
        <select name="sortField" value={sortField} onChange={this.handleSearchChange}>
          <option value="">Sort By...</option>
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="genre">Genre</option>
        </select>  

        <select name="typeFilter" value={typeFilter} onChange={this.handleSearchChange}>
          <option value="">All</option>
          <option value="Art">Art</option>
          <option value="Architecture">Architecture</option>
          <option value="Poetry">Poetry</option>
          <option value="Fiction">Fiction</option>
          <option value="Dance">Dance</option>
        </select>
        <button>📚</button>
        
      </form>
    );
  }
}