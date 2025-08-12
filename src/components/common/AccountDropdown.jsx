import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSignInAlt,
  faUserPlus,
  faUserCircle,
  faBox,
  faHeart,
  faCog,
  faSignOutAlt,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

const AccountDropdown = () => {
  let navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Thay đổi này để test
  const dropdownRef = useRef(null);

  // Đóng dropdown khi click bên ngoài
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogin = () => {
    // Logic đăng nhập
    navigate("/dang-nhap");
    setIsOpen(false);
  };

  const handleRegister = () => {
    // Logic đăng ký
    navigate("/dang-ky");
    setIsOpen(false);
  };

  const handleLogout = () => {
    // Logic đăng xuất
    setIsLoggedIn(false);
    setIsOpen(false);
    console.log("Đăng xuất thành công");
  };

  const handleProfile = () => {
    console.log("Chuyển đến trang thông tin cá nhân");
    setIsOpen(false);
  };

  const handleOrders = () => {
    console.log("Chuyển đến trang đơn hàng");
    setIsOpen(false);
  };

  const handleWishlist = () => {
    console.log("Chuyển đến danh sách yêu thích");
    setIsOpen(false);
  };

  const handleSettings = () => {
    console.log("Chuyển đến cài đặt");
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <div
        className="flex flex-col items-center cursor-pointer hover:text-blue-600 transition-colors group"
        onClick={toggleDropdown}
      >
        <div className="flex items-center">
          <FontAwesomeIcon icon={faUser} className="w-6 h-6" />
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`w-3 h-3 ml-1 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
        <span className="text-xs mt-1">
          {isLoggedIn ? "Xin chào!" : "Tài khoản"}
        </span>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          {!isLoggedIn ? (
            // Menu khi chưa đăng nhập
            <>
              <div className="px-4 py-2 text-sm text-gray-500 border-b border-gray-100">
                Chào mừng bạn đến với cửa hàng!
              </div>
              <button
                onClick={handleLogin}
                className="w-full flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <FontAwesomeIcon
                  icon={faSignInAlt}
                  className="w-4 h-4 mr-3 text-blue-500"
                />
                Đăng nhập
              </button>
              <button
                onClick={handleRegister}
                className="w-full flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <FontAwesomeIcon
                  icon={faUserPlus}
                  className="w-4 h-4 mr-3 text-green-500"
                />
                Đăng ký tài khoản
              </button>
            </>
          ) : (
            // Menu khi đã đăng nhập
            <>
              <div className="px-4 py-2 text-sm border-b border-gray-100">
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faUserCircle}
                    className="w-8 h-8 text-blue-500 mr-3"
                  />
                  <div>
                    <div className="font-semibold text-gray-800">
                      Nguyễn Văn A
                    </div>
                    <div className="text-xs text-gray-500">
                      user@example.com
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={handleProfile}
                className="w-full flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <FontAwesomeIcon
                  icon={faUserCircle}
                  className="w-4 h-4 mr-3 text-blue-500"
                />
                Thông tin cá nhân
              </button>

              <button
                onClick={handleOrders}
                className="w-full flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <FontAwesomeIcon
                  icon={faBox}
                  className="w-4 h-4 mr-3 text-orange-500"
                />
                Đơn hàng của tôi
              </button>

              <button
                onClick={handleWishlist}
                className="w-full flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <FontAwesomeIcon
                  icon={faHeart}
                  className="w-4 h-4 mr-3 text-red-500"
                />
                Danh sách yêu thích
              </button>

              <button
                onClick={handleSettings}
                className="w-full flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <FontAwesomeIcon
                  icon={faCog}
                  className="w-4 h-4 mr-3 text-gray-500"
                />
                Cài đặt tài khoản
              </button>

              <div className="border-t border-gray-100 mt-1 pt-1">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors"
                >
                  <FontAwesomeIcon
                    icon={faSignOutAlt}
                    className="w-4 h-4 mr-3"
                  />
                  Đăng xuất
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default AccountDropdown;
