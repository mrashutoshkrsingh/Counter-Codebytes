import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(null);

  const onStartOrPauseTimer = () => {
    if (!timer) {
      let newTimer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
      setTimer(newTimer);
    } else {
      clearInterval(timer);
      setTimer(null);
    }
  };

  const resetTimer = () => {
    clearInterval(timer);
    setTimer(null);
    setCount(0);
  };
  return (
    <div>
      <div>Counter: {count}</div>
      <button onClick={onStartOrPauseTimer} style={{ margin: "10px" }}>
        {count === 0 && !timer ? "Start" : timer ? "Pause" : "Play"}
      </button>
      {timer && count !== 0 && (
        <button onClick={resetTimer} style={{ margin: "10px" }}>
          Reset
        </button>
      )}
    </div>
  );
}
