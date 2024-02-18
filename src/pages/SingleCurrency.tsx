import { useParams } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";

const SingleCurrency = () => {
  const currencies = useAppSelector((state) => state.currency.currencies);
  const { currency } = useParams();
  if (!currencies || !currency) return;
  return (
    <div className="container m-auto my-3 min-h-[50vh]">
      <h2 className="text-2xl">
        {currency} : {currencies[currency]}
      </h2>
    </div>
  );
};

export default SingleCurrency;
