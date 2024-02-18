import { useParams } from "react-router-dom";

const SingleCurrency = () => {
  const { currency } = useParams();
  return (
    <div className="container m-auto my-3 min-h-[50vh]">
      <h2 className="text-2xl">SingleCurrency info : {currency}</h2>
    </div>
  );
};

export default SingleCurrency;
