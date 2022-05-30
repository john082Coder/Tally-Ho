import { useEffect, useState } from 'react';
import Web3 from 'web3';
import { useWeb3React } from "@web3-react/core";

const useBlock = () => {
  const [block, setBlock] = useState(0);
  const {  connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error,} = useWeb3React();
    const  [ethereum, setEthereum] = useState();
    
    useEffect(() => {
      if(library)
        setEthereum(library.provider);
  }, [library]);

  useEffect(() => {
    if (!ethereum) return;
    const web3 = new Web3(ethereum);

    const interval = setInterval(async () => {
      const latestBlockNumber = await web3.eth.getBlockNumber();
      if (block !== latestBlockNumber) {
        setBlock(latestBlockNumber);
      }
    }, 1000);

    return () => clearInterval(interval)
  }, [block, ethereum]);

  return block;
}

export default useBlock;
