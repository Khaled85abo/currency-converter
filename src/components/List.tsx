import { useAppSelector } from "../hooks/redux";
import { Link } from "react-router-dom";
const List = () => {
  const { fromCurrency, toCurrency, currencies } = useAppSelector(
    (state) => state.currency
  );

  return (
    <div className="container m-auto mt-12">
      <div className="bg-theme-primary-bg text-theme-primary-text-color">
        <h2 className="text-2xl">Prices for your base currency :</h2>
        <hr className="my-2" />
        <h3>{fromCurrency}</h3>
        <h3>{toCurrency}</h3>
        <div>
          <div>
            <div className="grid grid-cols-3">
              <div className="font-bold place-self-center">Currency</div>
              <div className="font-bold place-self-center">
                Price to {fromCurrency}
              </div>
              <div className="font-bold place-self-center">Price to USD</div>
            </div>
            <hr className="my-2" />
          </div>
          {currencies &&
            Object.entries(currencies).map(([key, value]) => (
              <Link to={`/${key}`}>
                <div key={key} className="grid grid-cols-3">
                  <div className="">
                    <span className="font-bold">{key}: </span>
                    <span className="text-gray-500">{value}</span>
                  </div>
                  <div className="place-self-center">10.98</div>
                  <div className="place-self-center">12.98</div>
                </div>
                <hr className="my-2" />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default List;
