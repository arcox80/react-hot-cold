import React from 'react';
import Modal from './modal.js';
import Form from './form.js';
import Guesses from './guesses.js';
import Start from './start.js';
import Winner from './winner.js';
import '../index.css';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      guess: '',
      guessArray: [],
      turn: 0,
      number: '',
      won: false
    };
    
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
      const magicNum = Math.floor(Math.random() * 100) + 1;
      this.setState({number: magicNum});
  }

  handleShow() {
    this.setState({showModal: true});
  }
  
  handleHide() {
    this.setState({showModal: false});
  }

  handleChange(event) {
    this.setState({guess: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    let numGuess = Number.parseInt(this.state.guess, 10);
    let newGuessArray = [...this.state.guessArray];
    if (numGuess === this.state.number) {
      this.setState({won: true});
    } else if (numGuess < 1 || numGuess > 100) {
      alert('Please choose a number between 1 and 100');
    } else {
      for (let i = 0; newGuessArray.length; i++) {
        if (numGuess === newGuessArray[i]) {
          alert('You already guessed that number! Please choose another.');
        }
      }
      this.setState({
        guessArray: [...this.state.guessArray, numGuess],
        turn: this.state.turn + 1
      });
      console.log(this.state);
    }
  }

  render() {
    const modal = this.state.showModal ? (
      <Modal>
        <div className="overlay" id="modal">
          <div className="content">
            <h3>What do I do?</h3>
            <div>
              <p>This is a Hot or Cold Number Guessing Game. The game goes like this: </p>
              <ul>
                <li>1. I pick a <strong>random secret number</strong> between 1 to 100 and keep it hidden.</li>
                <li>2. You need to <strong>guess</strong> until you can find the hidden secret number.</li>
                <li>3. You will <strong>get feedback</strong> on how close ("hot") or far ("cold") your guess is.</li>
              </ul>
              <p>So, Are you ready?</p>
              <button className="close" onClick={this.handleHide}>Got It!</button>
            </div>
          </div>
        </div>
      </Modal>
    ) : null;
    const guesses = (this.state.guessArray.length > 0) ? (<Guesses value={this.state.guessArray[(this.state.turn - 1)]} />) : null;
    return (
      <div>
        <header>
          <nav className="game-nav">
            <ul>
              <li>
                <button className="instructions" onClick={this.handleShow}>Instructions</button>
              </li>
              <li>
                <button className="new-game">New Game</button>
              </li>
            </ul>
          </nav>
          {modal}
          <h1 className="title">HOT or COLD</h1>
        </header>
        <section className="game">
          { this.state.won ? <Winner /> : <Start /> }
          <Form 
            value={this.state.guess}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
          <div>
            <p>Guess #<span id="count">{this.state.turn}</span>!</p>
            <ul id="guessList" className="guessBox clearfix">
              {guesses}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}