import React, { createContext } from 'react'
import { useContext, useState, useEffect} from 'react';
import axios from 'axios';
import { CoinList } from './Config/api';

const Crypto = createContext()

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState('NGN');
  const [symbol, setSymbol] = useState('₦');
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const fetchCoins = async () => {
    setLoading(true);
      const {data} = await axios.get(CoinList(currency));

      setCoins(data);
      setLoading(false);
      
   };

useEffect(() => {
  if (currency=== 'NGN') setSymbol('₦');
  else if(currency=== 'USD') setSymbol('$');
  else if(currency=== 'CNY') setSymbol('¥');

}, [currency])


  return (
    <Crypto.Provider value={{currency, symbol, setCurrency, coins, loading, fetchCoins}}>
      {children}
    </Crypto.Provider>
  )
}

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};
