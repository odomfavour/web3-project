import React, { useState } from 'react';

function CharacterFrequencyInput() {
  const [inputText, setInputText] = useState('');
  const [maxChars, setMaxChars] = useState([]);

  const handleInputChange = (event) => {
    const text = event.target.value;
    setInputText(text);
    findMaxConsecutiveChars(text);
  };

  const findMaxConsecutiveChars = (text) => {
    const charCount = new Map();
    let maxCount = 0;
    for (let i = 0; i < text.length - 1; i++) {
      const currentChar = text[i];
      const nextChar = text[i + 1];
      if (currentChar === nextChar) {
        charCount.set(currentChar, (charCount.get(currentChar) || 0) + 1);
        if (charCount.get(currentChar) > maxCount) {
          maxCount = charCount.get(currentChar);
          setMaxChars([currentChar]);
        } else if (charCount.get(currentChar) === maxCount) {
          setMaxChars((prevMaxChars) => [...prevMaxChars, currentChar]);
        }
      }
    }
  };

  function findPairs(array, target) {
    const pairs = [];
    const seen = new Set();

    for (let i = 0; i < array.length; i++) {
      const num = array[i];
      const complement = target - num;

      if (seen.has(complement) && !seen.has(num)) {
        pairs.push([complement, num]);
        seen.add(num);
      }

      seen.add(complement);
    }

    return pairs;
  }

  // Example usage:
  const array = [3, 1, 4, 1, 5, 9, 2];
  const target = 6;
  const pairs = findPairs(array, target);
  console.log(pairs);

  return (
    <div>
      <input
        type='text'
        value={inputText}
        onChange={handleInputChange}
        placeholder='Enter text'
      />
      <p>Characters with max consecutive counts: {maxChars.join(', ')}</p>
    </div>
  );
}

export default CharacterFrequencyInput;
