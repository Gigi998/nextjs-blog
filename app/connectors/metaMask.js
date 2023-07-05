import detectEthereumProvider from '@metamask/detect-provider';

const connect = async () => {
  const provider = await detectEthereumProvider();

  if (provider) {
    try {
      await provider.request({ method: 'eth_requestAccounts' });
      return provider;
    } catch (error) {
      throw new Error('User Rejected');
    }
  } else {
    return <h1>No metamask</h1>;
  }
};

export default {
  connect,
};
