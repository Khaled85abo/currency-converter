const Header = () => {
  return (
    <header>
      <nav className="bg-header_bg text-white py-4 px-8 md:flex justify-between">
        <img src="" alt="logo" />
        <div>
          <ul className="md:flex gap-4 text-white">
            <li className="">Send Money</li>
            <li>Converter</li>
            <li>Tools</li>
          </ul>
        </div>
        <div>
          <ul className="md:flex gap-4">
            <li>Sign in</li>
            <li>Register</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
