import { Link } from "react-router-dom";
import Converter from "./Converter";
const Header = () => {
  return (
    <header className="bg-header_bg text-white py-4 px-8">
      <nav className="md:flex justify-between">
        <Link to="/">
          <img src="" alt="logo" />
        </Link>
        <div>
          <ul className="md:flex gap-4">
            <li>
              <Link to="/">Send Money</Link>
            </li>
            <li>
              <Link to="/">Converter </Link>
            </li>
            <li>
              <Link to="/">Tools</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="md:flex gap-4">
            <li>
              <Link to="/">Sign in</Link>
            </li>
            <li>
              <Link to="/">Register</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="my-12">
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
    </header>
  );
};

export default Header;
