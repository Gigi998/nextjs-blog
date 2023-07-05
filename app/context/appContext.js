'use client';

import { ethers } from 'ethers';
import { useState, useContext, createContext } from 'react';

const Web3Context = createContext();

export const Web3Provider = ({ children }) => {
  const [web3, setWeb3] = useState('');
  const [signer, setSigner] = useState('');
  const [currentAddress, setCurrentAddress] = useState('');
  const [chainId, setChainId] = useState('');
  const [isWeb3, setIsWeb3] = useState(false);
  const [count, setCount] = useState('');

  const connectToEthereum = async (connector) => {
    try {
      const provider = await connector.connect();

      const Web3 = new ethers.BrowserProvider(provider, 'any');
      const Signer = await Web3.getSigner();
      const CurrentAddress = (await Signer.getAddress()).toLowerCase();
      const ChainId = (await Web3.getNetwork()).chainId.toString();
      setWeb3(Web3);
      setSigner(Signer);
      setCurrentAddress(CurrentAddress);
      setChainId(ChainId);
      setIsWeb3(true);
    } catch (error) {
      console.log(error);
    }
  };

  const disconnect = async () => {
    setIsWeb3(false);
    setSigner('');
    setChainId('');
    setCurrentAddress('');
  };

  return (
    <Web3Context.Provider
      value={{
        connectToEthereum,
        disconnect,
        isWeb3,
        setIsWeb3,
        currentAddress,
        signer,
        count,
        setCount,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};

export const useWebContext = () => {
  return useContext(Web3Context);
};
