'use client';
import React, { useEffect } from 'react';
import useGetCount from '../blockchain/actions/useGetCount';
import address from '../blockchain/contracts/address.json';
import { useWebContext } from '../context/appContext';

const CounterBtn = () => {
  const { increaseCount, decreaseCount, getCount } = useGetCount(address.sepolia);
  const { count, setCount, isWeb3, connectToEthereum } = useWebContext();

  const updateUI = async () => {
    const countWeb3 = await getCount();
    setCount(countWeb3);
  };

  const handleIncreaseClick = async () => {
    await increaseCount();
    updateUI();
  };

  const handleDecreaseClick = async () => {
    await decreaseCount();
    updateUI();
  };

  useEffect(() => {
    if (isWeb3) {
      updateUI();
    }
  }, [isWeb3, connectToEthereum]);

  return (
    <>
      {isWeb3 ? (
        <>
          <button className='bg-blue-500 w-10 rounded-md text-3xl' onClick={handleDecreaseClick}>
            -
          </button>
          <h2 className='text-2xl'>{count}</h2>
          <button className='bg-blue-500 w-10 rounded-md text-3xl' onClick={handleIncreaseClick}>
            +
          </button>
        </>
      ) : (
        <h1>Your are not connected to Web3</h1>
      )}
    </>
  );
};

export default CounterBtn;
