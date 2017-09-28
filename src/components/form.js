import React from 'react';

export default function Form(props) {
    return (
      <form onSubmit={props.onSubmit}>
        <input type="text"
          name="userGuess"
          id="userGuess"
          className="text"
          maxLength="3"
          autoComplete="off"
          placeholder="Enter Your Guess"
          onChange={props.onChange}
          required
        />
        <input type="submit"
          name="submit"
          id="guessButton"
          className="button"
          value="Guess"
        />
      </form>
    );
}
