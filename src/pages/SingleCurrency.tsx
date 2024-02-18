import { useParams } from "react-router-dom";

const SingleCurrency = () => {
  const { currency } = useParams();
  return <div>SingleCurrency info : {currency}</div>;
};

export default SingleCurrency;
