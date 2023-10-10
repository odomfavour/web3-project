import { useState, useEffect } from 'react';

function rgbToHex(r, g, b) {
  return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
}

function BackgroundColorChange() {
  const [bgColor, setBgColor] = useState('#FFFFFF');

  useEffect(() => {
    function handleMouseMove(event) {
      const x = event.clientX;
      const y = event.clientY;
      const hexColor = rgbToHex(x % 255, y % 255, 100);
      setBgColor(hexColor);
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className='h-screen transition-background'
      style={{ backgroundColor: bgColor }}
    >
      <h1 className='text-2xl pt-8'>
        Move your mouse to change background color
      </h1>
    </div>
  );
}

export default BackgroundColorChange;
