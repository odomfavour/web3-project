import { useState } from 'react';

function TimeDisplay() {
  const [clickCount, setClickCount] = useState(0);
  const [currentTime, setCurrentTime] = useState('');

  const handleClick = () => {
    setClickCount(clickCount + 1);
    const currentTime = new Date().toLocaleTimeString();
    console.log(`Current Time: ${currentTime}`);
    setCurrentTime(currentTime);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className='rounded-md text-white bg-blue-600 p-3'
      >
        Show Current Time
      </button>
      <p>The current Time is: {currentTime}</p>
      <p>Button Click Count: {clickCount}</p>
    </div>
  );
}

export default TimeDisplay;
