import React, { useState, useEffect } from 'react';

import Break from './components/Break';
import Session from './components/Session';
import SessionTimer from './components/SessionTimer';
import Instructions from './components/Instructions';
import Controls from './components/Controls';
const MAX_SESSION_LENGTH = 60 * 60;
function App() {
  const [state, setstate] = useState({
    breakLength: 300,
    sessionLength: 1500,
    timerRef: null,
    running: false
  });
  const [timer, setTimer] = useState(state.sessionLength);
  useEffect(() => {
    if (timer < 1) {
      attention();
      resetTimer();
    }
  }, [timer]);
  const incrementSessionLength = () => {
    state.sessionLength + 60 > MAX_SESSION_LENGTH
      ? setstate({ ...state, sessionLength: MAX_SESSION_LENGTH })
      : setstate({ ...state, sessionLength: state.sessionLength + 60 });
  };
  const decrementSessionLength = () => {
    state.sessionLength - 60 < 0
      ? setstate({ ...state, sessionLength: 0 })
      : setstate({ ...state, sessionLength: state.sessionLength - 60 });
  };
  const attention = () => {
    let audio = new Audio('/alarm.mp3');

    audio.play();
  };
  const startTimer = () => {
    if (state.timerRef) return;
    let ref = setInterval(() => {
      setTimer(timer => timer - 1);
    }, 1000);
    setstate({ ...state, timerRef: ref });
  };
  const resetTimer = () => {
    if (!state.timerRef) return;
    clearInterval(state.timerRef);
    setstate({ ...state, timerRef: null });
    setTimer(state.sessionLength);
  };

  return (
    <div className='App'>
      <Instructions />
      <Break breakLength={state.breakLength} />
      <Session
        incrementSessionLength={incrementSessionLength}
        decrementSessionLength={decrementSessionLength}
        sessionLength={state.sessionLength}
      />
      <SessionTimer timer={timer} />
      <Controls startTimer={startTimer} resetTimer={resetTimer} />
    </div>
  );
}

export default App;
