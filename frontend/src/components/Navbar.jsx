import React from "react";
import { CgMonday } from "react-icons/cg";
import classNames from "classnames";
import { Link } from "react-router-dom";

const Navbar = ({ navigationData, currentRoute, setCurrentRoute }) => {
  return (
    <nav className="hidden md:flex flex-row items-center justify-between px-8 h-18 bg-white">
      {/* Logo */}
      <span className="text-5xl text-blue-800 -mb-1">
        <CgMonday />
      </span>

      {/* Navigation Items */}
      <ul className="flex flex-row items-center space-x-4 self-end h-12">
        {navigationData.map((item, index) => (
          <li key={index}>
            <Link
              to={`/${item}`}
              onClick={() => setCurrentRoute(item)}
              className={classNames(
                "text-gray-400 hover:text-gray-700 cursor-pointer font-medium tracking-wide text-sm flex items-center px-6",
                {
                  "text-gray-700 border-b-3 border-gray-700 bg-gradient-to-b from-white to-gray-100":
                    currentRoute === item,
                }
              )}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      {/* Actions (Logout Login button) */}
      <div className="flex flex-row items-center space-x-4 self-end h-12">
        <Link
          to="/signup"
          className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-sm text-gray-900 py-2 px-5 rounded-lg font-medium tracking-wide leading-none"
        >
          Logout
        </Link>
        <Link
          to="/login"
          className="bg-white hover:bg-gray-50 border-2 border-gray-900 text-sm text-gray-900 py-2 px-5 rounded-lg font-medium tracking-wide leading-none"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
