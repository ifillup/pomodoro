import React from 'react';

function Controls({ resetTimer, startTimer }) {
  return (
    <div>
      <button id='start_stop' onClick={startTimer}>
        Start
      </button>
      <button id='reset' onClick={resetTimer}>
        Reset
      </button>
    </div>
  );
}

export default Controls;
