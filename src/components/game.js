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
      guess: ''
    };
    
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.setState({guess: event.target.value});
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
                <button className="new-game">New Game</button>
              </li>
            </ul>
          </nav>
          {modal}
          <h1 className="title">HOT or COLD</h1>
        </header>
        <section className="game">
          <h2 id="feedback">Make your Guess!</h2>
          <Form 
            onSubmit={this.handleSubmit}
            value={this.state.guess}
          />
          <Guesses />
        </section>
      </div>
    );
  }
}