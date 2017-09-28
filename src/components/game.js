import React from 'react';
import Board from './board.js';
import '../index.css';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <header>
            <nav className="game-nav">
              <ul>
                <li>
                  <a href="#" className="instructions">Instructions</a>
                </li>
                <li>
                  <a href="#" className="new-game">New Game</a>
                </li>
              </ul>
            </nav>
            <h1 className="title">HOT or COLD</h1>
            <Board />
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
                  <a class="close" href="#">Got It!</a>
                </div>
              </div>
            </div>
          </header>
        );
    }
}