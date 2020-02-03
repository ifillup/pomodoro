import React from 'react';

const Instructions = () => {
  return (
    <div>
      <ol>
        <li>Decide on the task to be done.</li>
        <li>Set the pomodoro timer</li>
        <li>Work on the task.</li>
        <li>
          End work when the timer rings and put a checkmark on a piece of paper.
        </li>
        <li>If you have fewer than four checkmarks, take a short break</li>
        <li>
          After four pomodoros, take a longer break (15–30 minutes), reset your
          checkmark count to zero, then go to step 1.
        </li>
      </ol>
    </div>
  );
};

export default Instructions;
