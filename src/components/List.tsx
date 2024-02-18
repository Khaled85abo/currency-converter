import { useAppSelector } from "../hooks/redux";
import { Link } from "react-router-dom";
import countPrice from "../utilities/countPrice";
import { useSpring, animated } from "@react-spring/web";

const List = () => {
  const { fromCurrency, toCurrency, currencies, dollarPriceRates, amount } =
    useAppSelector((state) => state.currency);

  if (!amount || !fromCurrency || !toCurrency || !dollarPriceRates) {
    return <div className="h-[100px]"></div>;
  }

  return (
    <div className="container m-auto mt-12">
      <div className="bg-theme-primary-bg text-theme-primary-text-color">
        <div>
          <div>
            <div className="grid grid-cols-3">
              <div className="font-bold place-self-center">Currency</div>
              <div className="font-bold place-self-center">
                {amount} {fromCurrency} =
              </div>
              <div className="font-bold place-self-center">Price to USD</div>
            </div>
            <hr className="my-2" />
          </div>
          {currencies &&
            Object.entries(currencies).map(([currency, value], index) => (
              <CurrencyRow
                key={currency}
                index={index}
                currency={currency}
                value={value}
                amount={amount}
                fromCurrency={fromCurrency}
                dollarRates={dollarPriceRates}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default List;

type CurrencyRowType = {
  currency: string;
  value: string;
  amount: number;
  fromCurrency: string;
  dollarRates: { [key: string]: number };
  index: number;
};
const CurrencyRow = ({
  amount,
  currency,
  fromCurrency,
  value,
  dollarRates,
  index,
}: CurrencyRowType) => {
  const springs = useSpring({
    from: { x: -30, opacity: 0 },
    to: { x: 0, opacity: 100 },
    delay: index * 50,
  });
  return (
    <animated.div style={{ ...springs }}>
      <Link to={`/${currency}`}>
        <div className="grid grid-cols-3">
          <div className="">
            <span className="font-bold">{currency}: </span>
            <span className="text-gray-500">{value}</span>
          </div>
          <div className="place-self-center">
            {countPrice({
              amount,
              fromCurrency,
              toCurrency: currency,
              dollarRates,
            }).toFixed(2)}
          </div>
          <div className="place-self-center">
            {dollarRates ? dollarRates[currency]?.toFixed(2) : "NA"}
          </div>
        </div>
        <hr className="my-2" />
      </Link>
    </animated.div>
  );
};
