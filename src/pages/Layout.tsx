import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
