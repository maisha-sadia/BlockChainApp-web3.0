import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constant";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.provider.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.provider.Contract(
    contractAddress,
    contractABI,
    signer
  );

  console.log({
    provider,
    signer,
    transactionContract,
  });
};

export const TransactionProvider = ({ children }) => {
  <TransactionContext.Provider value={{ value: "test" }}>
    {children}
  </TransactionContext.Provider>;
};
