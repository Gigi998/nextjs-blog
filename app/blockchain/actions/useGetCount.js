'use client';
import useCounterContract from '../contracts/useCounterContract';

const useGetCount = (contractAddress) => {
  const counterContract = useCounterContract(contractAddress);

  const getCount = async () => {
    const count = await counterContract.getCount();
    return Number(count);
  };

  const increaseCount = async () => {
    try {
      const tx = await counterContract.increase();
      await tx.wait(1);
    } catch (error) {
      console.log(error);
    }
  };

  const decreaseCount = async () => {
    try {
      const tx = await counterContract.decrease();
      await tx.wait(1);
    } catch (error) {
      console.log(error);
    }
  };

  return { increaseCount, decreaseCount, getCount };
};

export default useGetCount;
