import React, { useCallback } from "react";
import classNames from "classnames";
import { MdExplore } from "react-icons/md";
import { RiHomeHeartFill } from "react-icons/ri";
import { RiTeamFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

const Tabbar = ({ navigationData, currentRoute, setCurrentRoute }) => {
  // Function to return the icon for each tab
  const getTabIcon = useCallback((item) => {
    switch (item) {
      case "Home":
        return <RiHomeHeartFill />;
      case "Explore":
        return <MdExplore />;
      case "Aboutus":
        return <RiTeamFill />;
      case "Profile":
        return <CgProfile />;
      default:
        return null;
    }
  }, []);

  return (
    <nav className="flex md:hidden flex-row items-center justify-around px-8 h-18 bg-white visible md:invisible fixed bottom-0 w-full rounded-t-3xl text-2xl">
      {navigationData.map((item, index) => (
        <span
          key={index}
          className={classNames(
            "text-gray-400 hover:text-gray-700 cursor-pointer w-18 h-10 flex items-center justify-center",
            currentRoute === item &&
              "bg-gradient-to-t from-white to-gray-100 border-t-3 border-gray-700 text-gray-700"
          )}
          onClick={() => setCurrentRoute(item)}
          title={item}
        >
          <div>

          <span className="-mb-1">{getTabIcon(item)}</span>
          
          </div>
        </span>
      ))}
    </nav>
  );
};

export default Tabbar;
