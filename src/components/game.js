import React from 'react';
import Board from './board.js';
import Modal from './modal.js';
import '../index.css';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false};
    
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  handleShow() {
    this.setState({showModal: true});
  }
  
  handleHide() {
    this.setState({showModal: false});
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
        <Board />
      </header>
    );
  }
}