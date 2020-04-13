import React, { Component } from 'react';
import './quote.css';

export class Quote extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const btnStyle = {
            backgroundColor: this.props.color
        }
        return (
            <div className="wrapper">
                <div id="quote-box">
                    <p id="text">
                        {this.props.text}
                    </p>
                    <div id="author">
                        <span>- {this.props.author}</span>
                    </div>
                    <div className="buttons">
                        <div id="social-media">
                            <a id="tweet-quote">tweet</a>
                        </div>
                        <button id="new-quote" style={btnStyle} onClick={this.props.onClick}>
                            New quote
                        </button>
                    </div>
                </div>
                <div className="footer">
                    by <a href="https://codepen.io/ayub23" target="_blank">ayub23</a>
                </div>
            </div>
        );
    }
}

export default Quote;
