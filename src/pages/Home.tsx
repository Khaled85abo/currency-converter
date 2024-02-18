import Converter from "../components/Converter";
import List from "../components/List";

const Home = () => {
  return (
    <div>
      <div className="py-12  bg-header_bg text-white h-[45vh]">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">
            Trusted Global Currency Converter & Money Transfers
          </h1>
          <p>
            Best source for currency conversion, sending money online and
            tracking exchange rates
          </p>
        </div>
      </div>
      <Converter />
      <List />
    </div>
  );
};

export default Home;
