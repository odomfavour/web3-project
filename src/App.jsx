// import { useState } from 'react';
import './App.css';
import BackgroundColorChange from './components/BackgroundColorChange';
import CharacterFrequencyInput from './components/CharacterFrequencyInput';
import TimeDisplay from './components/TimeDisplay';
// import WalletConnect from './components/WalletConnect';

function App() {
  return (
    <>
      {/* <h1 className='text-3xl font-bold underline'>Hello world!</h1> */}
      {/* <WalletConnect /> */}
      <BackgroundColorChange />
      <CharacterFrequencyInput />
      <TimeDisplay />
    </>
  );
}

export default App;
