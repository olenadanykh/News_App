/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import Navbar from './Navbar';
import Article from './Article';
import '../style/App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allArticles: [],
      searchVal: '',
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3000/home')
      .then(res => res.json())
      .then((data) => {
        console.log(data.results);
        this.setState({
          allArticles: data.results,
        });
      })
      .catch(err => console.log(err));
  }

  handleClick(e) {
    e.preventDefault();
    // this.setState({ endpoint: e.target.id });
    const val = e.target.id;
    fetch(`http://localhost:3000/${val}`)
      .then(res => res.json())
      .then((data) => {
        console.log(data.results);
        this.setState({
          allArticles: data.results,
        });
      })
      .catch(err => console.log(err));
  }

  handleChange(event) {
    this.setState({ searchVal: event.target.value });
  }

  handleSearch(event) {
    const { searchVal } = this.state;
    event.preventDefault();
    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=[${searchVal}]&api-key=ZR52hAUWcADFYvAQCDJfJghhtwRxe4Dm`)
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          allArticles: data.response.docs,
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { allArticles, searchVal, endpoint } = this.state;
    const { handleClick, handleSearch, handleChange } = this;
    return (
      <div className="app">
        <div className="navbar">
          <Navbar
            handleClick={handleClick}
            handleSearch={handleSearch}
            handleChange={handleChange}
            endpoint={endpoint}
            searchVal={searchVal}
          />

        </div>
        <div className="article-container">
          <Article
            allArticles={allArticles}
          />

        </div>
      </div>
    );
  }
}
