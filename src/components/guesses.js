import React from 'react';

export default function Guesses(props) {
    return (
      <div>
        <p>Guess #<span id="count">0</span>!</p>
			  <ul id="guessList" class="guessBox clearfix">
			  </ul>
      </div>
    );
}
