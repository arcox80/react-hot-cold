import React from 'react';

export default function Guesses(props) {
  const guessArr = props.guessList.map((guess, index) => (
      <li key={index}>
          {guess}
      </li>
  ));

  return (
      <ul id="guessList" className="guessBox clearfix">
          {guessArr}
      </ul>
  );
};