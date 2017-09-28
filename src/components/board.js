import React from 'react';
import Form from './form.js';
import Guesses from './guesses.js';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <section className="game">
            <h2 id="feedback">Make your Guess!</h2>
            <Form />
            <Guesses />
        </section>
    );
  }
}
