import React from "react";
import logo from "../../assets/images/icons/logo.svg";
import search from "../../assets/images/icons/search.svg";
import register from "../../assets/images/icons/register.svg";
import wishlist from "../../assets/images/icons/wishlist.svg";
import cart from "../../assets/images/icons/cart.svg";
import "./style.css";

function index() {
  return (
    <header className="header">
      <div className="header-top">
        <ul className="header-list container d-flex justify-content-end">
          <li className="header-list-item ms-4">
            <span>Trợ giúp</span>
          </li>
          <li className="header-list-item ms-4">
            <span>Hệ thống cửa hàng</span>
          </li>
          <li className="header-list-item ms-4">
            <span>English</span>
          </li>
          <li className="header-list-item ms-4">
            <span>Tiếng Việt</span>
          </li>
        </ul>
      </div>
      <div className="header-body pb-2 pt-2">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="header-group d-flex align-items-center">
            <h1 className="header-title mb-0">
              <img className="header-logo" src={logo} alt="logo" />
            </h1>
            <nav className="nav">
              <ul className="nav-list d-flex">
                <li className="nav-list-item ms-4">
                  <span>Nữ</span>
                </li>
                <li className="nav-list-item ms-4">
                  <span>Nam</span>
                </li>
                <li className="nav-list-item ms-4">
                  <span>Trẻ em</span>
                </li>
                <li className="nav-list-item ms-4">
                  <span>Trẻ sơ sinh</span>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-function">
            <ul className="function-list d-flex align-items-center">
              <li className="function-list-item ms-5">
                <img src={search} alt="search" />
              </li>
              <li className="function-list-item ms-5">
                <img src={register} alt="register" />
              </li>
              <li className="function-list-item ms-5">
                <img src={wishlist} alt="wishlist" />
              </li>
              <li className="function-list-item ms-5">
                <img src={cart} alt="cart" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
export default index;
