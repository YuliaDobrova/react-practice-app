import React, { Component } from 'react';
import MyButton from '../shared/button/MyButton';
import MyInput from '../shared/input/MyInput';
import './ImageSearchBar.css';

class ImageSearchbar extends Component {
  state = {
    query: '',
    page: 1,
  };

  onHandleInputChange = event => {
    this.setState({ query: event.currentTarget.value });
  };

  onHandleSubmit = event => {
    event.preventDefault();
    this.props.onChange(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <>
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.onHandleSubmit}>
            <MyInput
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={this.state.query}
              onChange={this.onHandleInputChange}
            />
            <MyButton type="submit" className="SearchFormBtn">
              <span className="SearchForm-button-label">Search</span>
            </MyButton>
          </form>
        </header>
      </>
    );
  }
}

export default ImageSearchbar;
