/* eslint-disable no-useless-constructor */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import '../style/Navbar.css';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      handleClick, handleSearch, handleChange, searchVal,
    } = this.props;
    return (
      <div>
        <div className="navbar">
          <h1 onClick={handleClick} id="home" className="logo"> Top_News</h1>
          <form onSubmit={handleSearch}>
            <input id="input" className="input" placeholder="  enter keyword ..." type="text" value={searchVal} onChange={handleChange} />
          </form>
          <ul>
            <li className="category" onClick={handleClick} id="home">Home</li>
            <li className="category" onClick={handleClick} id="politics">Politics</li>
            <li className="category" onClick={handleClick} id="business">Business</li>
            <li className="category" onClick={handleClick} id="technology">Technology</li>
            <li className="category" onClick={handleClick} id="sports">Sports</li>
            <li className="category" onClick={handleClick} id="world">World</li>
          </ul>
        </div>
      </div>
    );
  }
}
