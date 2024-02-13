import { useAppSelector } from "../hooks/redux";

const List = () => {
  const currency = useAppSelector((state) => state.currency.chosenCurrency);
  return (
    <div>
      <hr className="p-2 my-8 bg-black" />
      <h1>{currency}</h1>
    </div>
  );
};

export default List;
