import { Outlet, Link } from "react-router-dom";

import { FaDev } from "react-icons/fa";

import useNavigation from "../components/useNavigation";
import navigationData from "../components/NavigationData";

import Navbar from "../components/Navbar";
import Tabbar from "../components/Tabbar";

import Footer from "../components/Footer";

const Layout = () => {
  const { currentRoute, setCurrentRoute } = useNavigation();

  return (
    <>
    <div className="bg-gray-200 ">
      <Navbar
        navigationData={navigationData}
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
      />
      <Tabbar
        navigationData={navigationData}
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
      />
    </div>
    <Outlet />
    {/* <Footer /> */}
    </>
  );
};

export default Layout;