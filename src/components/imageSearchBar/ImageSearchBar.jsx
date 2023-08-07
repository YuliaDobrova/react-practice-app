// =========React=Component====================================

import React, { Component } from 'react';
import MyButton from '../shared/button/MyButton';
import MyInput from '../shared/input/MyInput';
import sprite from '../../images/sprite.svg';
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
              // autoFocus
              placeholder="Search images"
              value={this.state.query}
              onChange={this.onHandleInputChange}
            />

            <MyButton type="submit" className="SearchFormBtn">
              <div className="search-button-wapper">
                <span className="search-button">Search</span>
                <div className="search-button-icon-container">
                  <svg className="search-button-icon" width="18" height="18">
                    <use href={sprite + '#icon-search'}></use>
                  </svg>
                </div>
              </div>
            </MyButton>
          </form>
        </header>
      </>
    );
  }
}

export default ImageSearchbar;

// =============React=HOOKS=======================

// import React, { useState } from 'react';
// import MyButton from '../shared/button/MyButton';
// import MyInput from '../shared/input/MyInput';
// import './ImageSearchBar.css';

// const ImageSearchbar = () => {
//   const [query, setQuery] = useState('');
//   // const [page, setPage] = useState(1);

//   const onHandleInputChange = event => {
//     setQuery(event.currentTarget.value);
//   };

//   const onInputQuery = async query => {
//     setQuery(query);
//   };

//   const onHandleSubmit = event => {
//     event.preventDefault();
//     onInputQuery(query);
//     setQuery('');
//   };

//   return (
//     <>
//       <header className="Searchbar">
//         <form className="SearchForm" onSubmit={onHandleSubmit}>
//           <MyInput
//             className="SearchForm-input"
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             value={query}
//             onChange={onHandleInputChange}
//           />
//           <MyButton type="submit" className="SearchFormBtn">
//             <span className="SearchForm-button-label">Search</span>
//           </MyButton>
//         </form>
//       </header>
//     </>
//   );
// };

// export default ImageSearchbar;
