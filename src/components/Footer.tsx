const Footer = () => {
  return (
    <div className="bg-header_bg text-white py-10 px-16 min-h-56 md:flex justify-around">
      <div>
        <h3 className="mb-3">Transfer Money</h3>
        <ul className="flex flex-col gap-2">
          <li>US Money transfer</li>
          <li>UK money transfer</li>
          <li>SW Money transfer</li>
          <li>FR money transfer</li>
        </ul>
      </div>
      <div>
        <h3 className="mb-3">Apps</h3>
        <ul className="flex flex-col gap-2">
          <li>Money Transfer & Currency Apps</li>
          <li>iOS Money Transfer App</li>
          <li>Salesforce App</li>
          <li>Slack App</li>
        </ul>
      </div>
      <div>
        <h3 className="mb-3">Tools & Resources</h3>
        <ul className="flex flex-col gap-2">
          <li>Blog</li>
          <li>Travel Expenses Calculator</li>
          <li>IBAN Calculator</li>
          <li>Currency Newsletters</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
