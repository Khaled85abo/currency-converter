import { useAppSelector } from "../hooks/redux";

const List = () => {
  const currency = useAppSelector((state) => state.currency.chosenCurrency);
  return (
    <div className="container m-auto">
      <div className="bg-theme-primary-bg text-theme-primary-text-color">
        <h1>The primary currency is :</h1>
        <h3>{currency}</h3>
      </div>
    </div>
  );
};

export default List;
