import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-300 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/employeeFrom">Employee-Form</Link>
              </li>
              <li>
                <Link to="/update">Update</Link>
              </li>
            </ul>
          </div>
          <Link className="btn btn-ghost text-xl">Employee List</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/employeeFrom">Employee-Form</Link>
            </li>
            <li>
              <Link to="/update">Update</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link className="btn">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
