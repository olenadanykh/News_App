/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { render } from 'react-dom';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allArticles: [],
    };
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

  render() {
    const { allArticles } = this.state;
    console.log('state', this.state);

    const article = allArticles.map((el, i) => (
      <div key={i}>
        <h1>{el.title }</h1>
        <p>
          Section:
          {el.subsection}
        </p>
        <h2>{el.abstract}</h2>
        <img src={el.multimedia[0].url} style={{ width: '200px', height: '150px' }} />
        <p>{el.created_date}</p>
        <h5 onClick={() => window.open(el.url)}>{el.url}</h5>
      </div>
    ));
    return (
      <div>
        <h1> Top_News</h1>
        <ul>
          {article}
        </ul>
      </div>
    );
  }
}
