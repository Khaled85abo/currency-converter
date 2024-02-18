import { useAppSelector } from "../hooks/redux";
import { Link } from "react-router-dom";
import countPrice from "../utilities/countPrice";
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
            Object.entries(currencies).map(([key, value]) => {
              return (
                <Link to={`/${key}`} key={key}>
                  <div className="grid grid-cols-3">
                    <div className="">
                      <span className="font-bold">{key}: </span>
                      <span className="text-gray-500">{value}</span>
                    </div>
                    <div className="place-self-center">
                      {countPrice({
                        amount,
                        fromCurrency,
                        toCurrency: key,
                        dollarRates: dollarPriceRates,
                      }).toFixed(2)}
                    </div>
                    <div className="place-self-center">
                      {dollarPriceRates
                        ? dollarPriceRates[key]?.toFixed(2)
                        : "NA"}
                    </div>
                  </div>
                  <hr className="my-2" />
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default List;
