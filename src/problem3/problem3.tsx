
const getPriority = (blockchain: string | undefined): number => {
  switch (blockchain) {
      case 'Osmosis':
        return 100;
      case 'Ethereum':
        return 50;
      case 'Arbitrum':
        return 30;
      case 'Zilliqa':
        return 20;
      case 'Neo':
        return 20;
      default:
        return -99;
  }
};

type WalletBalance = {
  currency: string;
  amount: number;
  blockchain?: string; // Added blockchain field
}

type FormattedWalletBalance = {
  formatted: string;
  // Including priority for easier debugging (optional)
  priority: number;
} & WalletBalance

type Props = {} & BoxProps

const WalletPage: React.FC<Props> = (props: Props) => {
  const { children, ...rest } = props;
  const balances = useWalletBalances();
  const prices = usePrices();

  // Process balances: calculate priority once, filter, sort, and format.
  const processedBalances = useMemo((): FormattedWalletBalance[] => {
    return balances
      .map((balance: WalletBalance) => ({
        ...balance,
        priority: getPriority(balance.blockchain),
      }))
      .filter((balance) => balance.priority > -99 && balance.amount > 0) // Filtering valid and positive balances.
      .sort((a, b) => {
        if (a.priority === b.priority) return 0;
        return b.priority - a.priority;
      })
      .map((balance) => ({
        ...balance,
        formatted: balance.amount.toFixed(2), // Format to two decimals.
      }));
  }, [balances]);

  const rows = processedBalances.map((balance, index) => {
    const usdValue = prices[balance.currency] * balance.amount;
    return (
      <WalletRow
        className={classes.row} // Assuming classes.row is defined elsewhere.
        key={`${balance.blockchain}-${balance.currency}-${index}`} // Using composite key.
        amount={balance.amount}
        usdValue={usdValue}
        formattedAmount={balance.formatted}
      />
    );
  });

  return <div {...rest}>{rows}</div>;
};

export default WalletPage;