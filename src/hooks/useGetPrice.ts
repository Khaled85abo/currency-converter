const getPrice = (
  amount: number,
  dollarRates: Record<string, number>,
  toCurrency: string,
  fromCurrency: string = "USD"
) => {
  if (fromCurrency == "USD") {
    return dollarRates[toCurrency] * amount;
  }
};

export default getPrice;
