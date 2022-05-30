import { useCallback, useEffect, useState } from 'react';

import { useWeb3React } from "@web3-react/core";
import {
  getFarmContract,
  getWethContract,
  getFarms,
  getTotalLPWethValue,
} from '../contracts/utils';
import useTally from './useTally';
import useBlock from './useBlock';


const useAllStakedValue = () => {
  const [balances, setBalance] = useState([]);
  const { account } = useWeb3React();
  const tally = useTally();
  const farms = getFarms(tally);
  const farmContract = getFarmContract(tally);
  const wethContact = getWethContract(tally);
  const block = useBlock();

  const fetchAllStakedValue = useCallback(async () => {
    const balances = await Promise.all(
      farms.map(
        ({
          pid,
          lpContract,
          tokenContract,
        }) =>
          getTotalLPWethValue(
            farmContract,
            wethContact,
            lpContract,
            tokenContract,
            pid,
          ),
      ),
    );

    setBalance(balances);
  }, [ farmContract, farms, wethContact]);

  useEffect(() => {
    if (account && farmContract && tally) {
      fetchAllStakedValue()
    }
  }, [account, block, farmContract, setBalance, tally, fetchAllStakedValue])
  console.log("balances = ", balances);
  return balances;
}

export default useAllStakedValue;
