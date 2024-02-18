import { useLazyGetDollarPriceQuery } from "../redux/features/currency/currencyApi";
import { useAppSelector } from "./redux";
import useGetTimestampDiff from "./useGetTimestampDiff";

const useGetPrice = async (
  amount: number,
  toCurrency: string,
  fromCurrency: string = "USD"
) => {
  const [fetchRates] = useLazyGetDollarPriceQuery();
  let dollarRates = useAppSelector((state) => state.currency.dollarPriceRates);
  const isOutdated = useGetTimestampDiff();
  if (isOutdated() || !dollarRates) {
    const { data } = await fetchRates({});
    dollarRates = data["rates"];
  }
  if (fromCurrency == toCurrency) {
    return amount;
  }
  if (fromCurrency == "USD") {
    return dollarRates[toCurrency] * amount;
  }
  if (toCurrency == "USD") {
    return dollarRates[fromCurrency] / amount;
  }
};

export default useGetPrice;
