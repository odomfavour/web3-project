import { useState, useEffect } from 'react';
import Web3 from 'web3';

function WalletConnect() {
  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState('');

  useEffect(() => {
    async function connectWallet() {
      if (typeof window.ethereum !== 'undefined') {
        const web3 = new Web3(window.ethereum);
        try {
          const accounts = await web3.eth.requestAccounts();
          const selectedAddress = accounts[0];
          setAddress(selectedAddress);
          const ethBalance = await web3.eth.getBalance(selectedAddress);
          setBalance(web3.utils.fromWei(ethBalance, 'ether'));
        } catch (error) {
          console.error(error);
        }
      }
    }
    connectWallet();
  }, []);

  return (
    <div>
      <p>Connected Address: {address}</p>
      <p>Balance: {balance} ETH</p>
    </div>
  );
}

export default WalletConnect;
