import React, { Component } from 'react';
import './App.css';
import Button from './Button';

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    quote: [],
  };
}
  componentDidMount() {
  this.fetchQuotes();
  }
  fetchQuotes = () => {
    fetch(`https://thesimpsonsquoteapi.glitch.me/quotes`)
    .then(response => response.json())
    .then(data => this.setState({ quote: data} ))
    }

  
    render() {
      console.log(this.state.quote)
    return (
      <div className="App">
        <header className="App-header">
          <Button selectQuote={this.fetchQuotes}/>


        {this.state.quote.map((quote) => {
            return <div key={quote.id}>
                <h2>{quote.character}</h2>
                <img src={quote.image} alt="simpsons" />
                <p>{quote.quote}</p>
            </div>
          })}
        </header>
      </div>
    );
  }
}

export default App;
