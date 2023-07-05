'use client';

import { useWebContext } from '../../context/appContext';
import { Contract } from 'ethers';
import abi from './abi.json';
import { useMemo } from 'react';

const useCounterContract = (contractAddress) => {
  const { signer } = useWebContext();

  const counterContract = useMemo(() => {
    if (!signer || !contractAddress) return null;
    return new Contract(contractAddress, abi, signer);
  }, [signer, contractAddress]);

  return counterContract;
};

export default useCounterContract;
