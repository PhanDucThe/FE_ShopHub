import React, { useState } from "react";
import {
  faSearch,
  faShoppingCart,
  faHeart,
  faBell,
  faMapPin,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AccountDropdown from "./AccountDropdown";
import { Link } from "react-router-dom";

const Header = () => {
  const [cartCount] = useState(3);

  return (
    <header className="w-full bg-white shadow-lg sticky z-50">
      {/* Top Bar */}
      <div className="bg-blue-600 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
                <span>Hotline: 1900-1234</span>
              </div>
              <div className="flex items-center space-x-1">
                <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
                <span>support@shophub.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Link to="#">
                  <FontAwesomeIcon icon={faMapPin} className="w-4 h-4" />
                  <span>Giao hàng toàn quốc</span>
                </Link>
              </div>
              <Link to="#">
                <span>Theo dõi đơn hàng</span>
              </Link>
              <Link to="#">
                <span>Trở thành người bán</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-8lg mx-auto px-4 py-4">
        <div className="flex items-center justify-around">
          {/* Logo */}
          <Link to={"/"}>
            <div className="flex items-center">
              <div className="w-24 h-24 rounded-lg flex items-center justify-center">
                <img src="./src/assets/images/logos/logo.png" alt="logo" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-blue-600">ShopHub</h1>
                <p className="text-base text-gray-500">Mua sắm thông minh</p>
              </div>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm, thương hiệu và tên shop..."
                className="w-full px-4 py-3 pl-12 pr-4 border-2 border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none"
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Tìm
              </button>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-6">
            {/* Wishlist */}
            <div className="flex flex-col items-center cursor-pointer hover:text-blue-600 transition-colors">
              <FontAwesomeIcon icon={faHeart} className="w-6 h-6" />
              <span className="text-xs mt-1">Yêu thích</span>
            </div>

            {/* Notifications */}
            <div className="flex flex-col items-center cursor-pointer hover:text-blue-600 transition-colors relative">
              <FontAwesomeIcon icon={faBell} className="w-6 h-6" />
              <span className="text-xs mt-1">Thông báo</span>
              <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </div>
            </div>

            {/* Cart */}
            <div className="flex flex-col items-center cursor-pointer hover:text-blue-600 transition-colors relative">
              <FontAwesomeIcon icon={faShoppingCart} className="w-6 h-6" />
              <span className="text-xs mt-1">Giỏ hàng</span>
              {cartCount > 0 && (
                <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </div>
              )}
            </div>

            {/* Account */}
            <AccountDropdown />
          </div>
        </div>
      </div>

      {/* Promotion Banner */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div>
                <Link className="flex items-center space-x-2" to={"#"}>
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">🚚</span>
                  </div>
                  <span className="text-sm font-medium">
                    FREESHIP cho đơn từ 99K
                  </span>
                </Link>
              </div>

              <div>
                <Link className="flex items-center space-x-2" to={"#"}>
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">⚡</span>
                  </div>
                  <span className="text-sm font-medium">
                    Giao hàng trong 2h
                  </span>
                </Link>
              </div>

              <div>
                <Link to={"#"} className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">🎁</span>
                  </div>
                  <span className="text-sm font-medium">Ưu đãi đến 50%</span>
                </Link>
              </div>

              <div>
                <Link className="flex items-center space-x-2" to={"#"}>
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">↩️</span>
                  </div>
                  <span className="text-sm font-medium">
                    Đổi trả trong 30 ngày
                  </span>
                </Link>
              </div>
            </div>

            <Link className="flex items-center space-x-2" to={"#"}>
              <div className="text-sm font-medium">
                🔥 FLASH SALE - Kết thúc trong:
                <span className="ml-2 bg-white text-red-600 px-2 py-1 rounded font-bold">
                  12:34:56
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
