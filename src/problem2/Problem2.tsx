'use client'
import CurrencySwapForm from "./components/CurrencySwapForm"
import { Loader, Text } from "@mantine/core"
import styles from "./Problem2.module.scss"
import { useEffect, useState } from "react"
import axios from "axios"
import TokenCard from "./components/TokenCard"

export type Prices = {
  currency: string;
  date: string;
  price: number;
}
const Problem2 = () => {
  const [tokenList, setTokenList] = useState<Prices[]>([])
  const [loadingTokenList, setLoadingTokenList] = useState<boolean>(true)
  const [fetchError, setFetchError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchTokenList() {
      try {
        const { data } = await axios.get(
          'https://interview.switcheo.com/prices.json'
        );
        setTokenList(data);
      } catch (err: unknown) {
        let errorMessage = 'Failed to fetch token prices.';
        if (err instanceof Error) {
          errorMessage = err.message;
        }
        setFetchError(errorMessage);
      } finally {
        setLoadingTokenList(false);
      }
    }
    fetchTokenList();
  }, []);

  if (loadingTokenList) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <Loader />
      </div>
    )
  }
  if (fetchError) {
    return <Text color="red">{fetchError}</Text>
  }
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        {tokenList.map((token,index) => (
          <TokenCard token={token} key={index}/>
        ))}
      </div>
      <div className={styles.rightContainer}>
        <CurrencySwapForm prices={tokenList}/>
      </div>
    </div>
  )
}

export default Problem2