'use client';

import React from 'react';
import metaMaskConnector from '../connectors/metaMask';
import { useWebContext } from '../context/appContext';

const ConnectBtn = () => {
  const { connectToEthereum, isWeb3, currentAddress, disconnect } = useWebContext();

  return (
    <>
      <button
        className='ml-auto border-2 border-black rounded-md p-2 bg-blue-500 text-white'
        onClick={() => {
          connectToEthereum(metaMaskConnector);
        }}
        disabled={isWeb3}
      >
        {!isWeb3
          ? 'Connect'
          : `${currentAddress.slice(0, 6)}...${currentAddress.slice(currentAddress.length - 4)}`}
      </button>
      {isWeb3 && (
        <button
          onClick={() => disconnect()}
          className='ml-2 border-2 border-black rounded-md p-2 bg-blue-500 text-white'
        >
          Disconnect
        </button>
      )}
    </>
  );
};

export default ConnectBtn;
