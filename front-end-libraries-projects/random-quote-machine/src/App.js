import React, { Component } from 'react';
import './App.css';
import Quote from './components/quote/quote';

const quoteURI = 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=';
const apiKey = 'OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V';
const colors = ['#16a085', '#27ae60', '#2c3e50', 
                '#f39c12', '#e74c3c', '#9b59b6', 
                '#FB6964', '#342224', "#472E32", 
                "#BDBB99", "#77B1A9", "#73A857"];
export class App extends Component {
  
  constructor() {
    super();
    this.state = {
      color: '#16a085',
      text: '',
      author: ''
    }
  }

  componentWillMount() {
    this.setNewQuote();
  }

  setNewQuote = () => {
    this.getNewQuote().then(response => {
      console.log(response);
      this.setState({
        color: this.getNewColor(),
        text: response[0].quote,
        author: response[0].author
      })
    }).catch(error => {
      this.setState({
        text: "Network Error",
        author: ''
      })
    })
  }

  getNewColor = () => {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
  }

  getNewQuote = () => {
    const requestOptions = {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json',
        'X-Mashape-Key': apiKey
      }
    }
    return fetch(quoteURI, requestOptions)
      .then(response => response.json())
  }
  render() {
    const appStyle = {
      backgroundColor: this.state.color,
      color: this.state.color
    };

    return (
      <div className="App" style={appStyle}>
        <Quote 
          color={this.state.color}
          text={this.state.text}
          author={this.state.author}
          onClick={this.setNewQuote}
        />
      </div>
    );
  }
}

export default App;
