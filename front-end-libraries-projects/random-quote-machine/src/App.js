import React, { Component } from 'react';

import './App.css';

export class App extends Component {

  render() {
    return (
      <div >

        <div class="quote-box">
          <div class="quote-text">
            <i class="fa fa-quote-left"> </i><span id="text"></span>
          </div>
          <div class="quote-author">
            - <span id="author"></span>
          </div>
          <div class="buttons">
            <a class="button" id="tweet-quote" title="Tweet this quote!" target="_blank">
              <i class="fa fa-twitter"></i>
            </a>
            <a class="button" id="tumblr-quote" title="Post this quote on tumblr!" target="_blank">
              <i class="fa fa-tumblr"></i>
            </a>
            <button class="button" id="new-quote">New quote</button>
          </div>
        </div>
        <div class="footer"> by <a href="http://codepen.io/hezag/">hezag</a></div>

      </div>
    );
  }

}

export default App;
