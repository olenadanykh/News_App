/* eslint-disable no-useless-constructor */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import '../style/Article.css';

export default class Article extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { allArticles } = this.props;
    const article = allArticles.map((el, i) => {
      if (!el.title) {
        return (
          <div key={i} className="search-article">
            <div className="search-text">
              <h1>{el.abstract}</h1>
              <h2>{el.lead_paragraph}</h2>
              <button onClick={() => window.open(el.url || el.web_url)}> Read More </button>
            </div>
          </div>
        );
      }
      if (el.multimedia) {
        return (
          <div key={i} className="article">
            <img className="image" src={el.multimedia[0].url} />
            <div className="text">
              <h1>{el.title }</h1>
              <h2>{el.abstract}</h2>
              {/* <p>{el.created_date || el.pub_date}</p> */}
              <button onClick={() => window.open(el.url || el.web_url)}> Read More </button>

            </div>
          </div>
        );
      }
    });
    return (
      <div>
        <ul className="container">
          {article}
        </ul>
      </div>
    );
  }
}
