import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogoutDrop = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    window.location.href = "/login"; // or use navigate if available
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" className="logo" />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              className={selectedMenu === 0 ? activeMenuClass : menuClass}
              onClick={() => handleMenuClick(0)}
            >
              <p>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              className={selectedMenu === 1 ? activeMenuClass : menuClass}
              onClick={() => handleMenuClick(1)}
            >
              <p>Orders</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              className={selectedMenu === 2 ? activeMenuClass : menuClass}
              onClick={() => handleMenuClick(2)}
            >
              <p>Holdings</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              className={selectedMenu === 3 ? activeMenuClass : menuClass}
              onClick={() => handleMenuClick(3)}
            >
              <p>Positions</p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              className={selectedMenu === 4 ? activeMenuClass : menuClass}
              onClick={() => handleMenuClick(4)}
            >
              <p>Funds</p>
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              className={selectedMenu === 5 ? activeMenuClass : menuClass}
              onClick={() => handleMenuClick(5)}
            >
              <p>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar" onDrop={handleLogoutDrop}>
            ZU
          </div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
