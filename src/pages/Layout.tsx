import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-auto">
        <div className="container h-screen mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;