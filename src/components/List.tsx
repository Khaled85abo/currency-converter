import { useAppSelector } from "../hooks/redux";

const List = () => {
  const currency = useAppSelector((state) => state.currency.chosenCurrency);
  return (
    <div>
      <hr className="p-2 my-8 bg-black" />
      <div className="bg-theme-primary-bg text-theme-text-primary-color">
        <h1>The primary currency is :</h1>
        <h3>{currency}</h3>
      </div>
    </div>
  );
};

export default List;
