import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
