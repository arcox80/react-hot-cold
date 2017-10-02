import React from 'react';
import Modal from './modal.js';
import Form from './form.js';
import Guesses from './guesses.js';
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
      hotOrCold: 'Make your Guess!'
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
      this.setState({hotOrCold: 'You Won! Click New Game to play again!'});
    } else if (numGuess < 1 || numGuess > 100 || isNaN(numGuess) === true) {
      alert('Please choose a number between 1 and 100');
    } else {
      for (let i = 0; i < newGuessArray.length; i++) {
        if (numGuess === newGuessArray[i]) {
          alert('You already guessed that number! Please choose another.');
        }
      }
      if (Math.abs(this.state.number - numGuess) < 10) {
        this.setState({hotOrCold: 'HOT'});
      } else if (Math.abs(this.state.number - numGuess) < 20 && Math.abs(this.state.number - numGuess) > 9){
        this.setState({hotOrCold: 'WARM'});
      } else if(Math.abs(this.state.number - numGuess) < 30 && Math.abs(this.state.number - numGuess) > 19){
        this.setState({hotOrCold: 'COOL'});
      } else {
        this.setState({hotOrCold: 'COLD'});
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

    return (
      <div>
        <header>
          <nav className="game-nav">
            <ul>
              <li>
                <button className="instructions" onClick={this.handleShow}>Instructions</button>
              </li>
              <li>
                <form>
                  <button className="new-game" formAction="/index.html">New Game</button>
                </form>
              </li>
            </ul>
          </nav>
          {modal}
          <h1 className="title">HOT or COLD</h1>
        </header>
        <section className="game">
          <h2 id="feedback">{this.state.hotOrCold}</h2>
          <Form 
            value={this.state.guess}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
          <div>
            <p>Guess #<span id="count">{this.state.turn}</span>!</p>
            <Guesses guessList={this.state.guessArray} />
          </div>
        </section>
      </div>
    );
  }
}