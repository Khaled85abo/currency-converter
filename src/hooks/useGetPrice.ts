import { useLazyGetDollarPriceQuery } from "../redux/features/currency/currencyApi";
import { useAppSelector } from "./redux";
import useGetTimestampDiff from "./useGetTimestampDiff";

const useGetPrice = () => {
  const [fetchRates] = useLazyGetDollarPriceQuery();
  let dollarRates = useAppSelector((state) => state.currency.dollarPriceRates);
  // const isOutdated = useGetTimestampDiff();
  const isOutdated = () => false;
  const getPrice = async ({
    amount,
    toCurrency,
    fromCurrency = "USD",
  }: {
    amount: number;
    toCurrency: string;
    fromCurrency: string;
  }) => {
    if (isOutdated() || !dollarRates) {
      console.log(
        "%cFetching new dollar rates: ",
        "padding: 3px 8px; color: white; background: black"
      );
      const { data } = await fetchRates({});
      dollarRates = data["rates"] as { [key: string]: number };
    }
    if (fromCurrency == toCurrency) {
      return amount;
    }
    if (fromCurrency == "USD") {
      return dollarRates[toCurrency] * amount;
    }
    if (toCurrency == "USD") {
      return amount / dollarRates[fromCurrency];
    }
    // Manage two different currencies
    // 1 - get the price of fromCurrency in dollars
    const priceInDollarsFromCurrency = amount / dollarRates[fromCurrency];
    // 2 - get the price of toCurrency in dollars
    const priceInDollarsToCurrency =
      dollarRates[toCurrency] * priceInDollarsFromCurrency;
    return priceInDollarsToCurrency;
  };
  return { getPrice };
};

export default useGetPrice;
