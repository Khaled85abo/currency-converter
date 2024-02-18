import { useAppSelector } from "../hooks/redux";

const List = () => {
  const fromCurrency = useAppSelector((state) => state.currency.fromCurrency);
  const currencies = useAppSelector((state) => state.currency.currencies);
  return (
    <div className="container m-auto mt-12">
      <div className="bg-theme-primary-bg text-theme-primary-text-color">
        <h1>The primary currency is :</h1>
        <h3>{fromCurrency}</h3>
        <div>
          {currencies &&
            Object.entries(currencies).map(([key, value]) => (
              <div key={key}>
                <span>{key}: </span>
                <span>{value}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default List;
