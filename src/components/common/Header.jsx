import React, { useState, useEffect } from "react";
import {
  faSearch,
  faShoppingCart,
  faHeart,
  faBell,
  faMapPin,
  faPhone,
  faEnvelope,
  faBars,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AccountDropdown from "./AccountDropdown";
import { Link } from "react-router-dom";

const Header = () => {
  const [cartCount] = useState(3);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const popularSearches = [
    "iPhone 16 Pro Max",
    "Samsung Galaxy S24",
    "MacBook Air M3",
    "AirPods Pro",
    "iPad Pro",
  ];

  const quickCategories = [
    { name: "Điện thoại", icon: "📱", color: "bg-blue-500" },
    { name: "Laptop", icon: "💻", color: "bg-purple-500" },
    { name: "Tablet", icon: "📱", color: "bg-green-500" },
    { name: "Đồng hồ", icon: "⌚", color: "bg-orange-500" },
    { name: "Phụ kiện", icon: "🎧", color: "bg-pink-500" },
  ];

  return (
    <>
      <header
        className={`w-full bg-white transition-all duration-300 ${
          isScrolled ? "shadow-xl" : ""
        }`}
      >
        {/* Top Bar - Hidden on mobile */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm hidden md:block">
          <div className="max-w-7xl mx-auto px-4 py-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 hover:text-blue-200 transition-colors">
                  <FontAwesomeIcon icon={faPhone} className="w-3 h-3" />
                  <span className="font-medium">Hotline: 1900-1234</span>
                </div>
                <div className="flex items-center space-x-2 hover:text-blue-200 transition-colors">
                  <FontAwesomeIcon icon={faEnvelope} className="w-3 h-3" />
                  <span className="font-medium">support@shophub.com</span>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <Link
                  to="#"
                  className="flex items-center space-x-2 hover:text-blue-200 transition-colors"
                >
                  <FontAwesomeIcon icon={faMapPin} className="w-3 h-3" />
                  <span className="font-medium">Giao hàng toàn quốc</span>
                </Link>
                <Link
                  to="#"
                  className="hover:text-blue-200 transition-colors font-medium"
                >
                  Theo dõi đơn hàng
                </Link>
                <Link
                  to="#"
                  className="hover:text-blue-200 transition-colors font-medium"
                >
                  Trở thành người bán
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <FontAwesomeIcon
                icon={isMenuOpen ? faTimes : faBars}
                className="w-5 h-5 text-gray-700"
              />
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br rounded-xl flex items-center justify-center group-hover: transition-all duration-300 group-hover:scale-105">
                <img
                  src="https://res.cloudinary.com/dxy81jyw2/image/upload/v1756352157/logo_l21s7c.png"
                  alt="ShopHub"
                  className="w-14 h-14"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  ShopHub
                </h1>
                <p className="text-xs md:text-sm text-gray-500 font-medium">
                  Mua sắm thông minh
                </p>
              </div>
            </Link>

            {/* Search Bar - Enhanced */}
            <div className="flex-1 max-w-2xl mx-4 md:mx-8 relative z-50">
              <div
                className={`relative transition-all duration-300 ${
                  isSearchFocused ? "transform scale-105" : ""
                }`}
              >
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 z-10"
                  />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() =>
                      setTimeout(() => setIsSearchFocused(false), 200)
                    }
                    placeholder="Tìm kiếm sản phẩm, thương hiệu..."
                    className="w-full h-12 md:h-14 pl-12 pr-20 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 text-sm md:text-base shadow-sm focus:shadow-md"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 md:px-6 py-2 md:py-2.5 rounded-lg transition-all duration-300 font-medium text-sm md:text-base shadow-md hover:shadow-lg">
                    Tìm
                  </button>
                </div>

                {/* Search Dropdown */}
                {isSearchFocused && (
                  <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-xl shadow-xl mt-2 z-50 overflow-hidden">
                    {searchQuery === "" ? (
                      <div className="p-4">
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">
                            Tìm kiếm phổ biến
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {popularSearches.map((search, index) => (
                              <button
                                key={index}
                                className="px-3 py-1.5 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 rounded-full text-sm transition-colors"
                                onClick={() => setSearchQuery(search)}
                              >
                                {search}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">
                            Danh mục nổi bật
                          </h4>
                          <div className="grid grid-cols-5 gap-2">
                            {quickCategories.map((category, index) => (
                              <Link
                                key={index}
                                to="#"
                                className="flex flex-col items-center p-2 hover:bg-gray-50 rounded-lg transition-colors"
                              >
                                <div
                                  className={`w-8 h-8 ${category.color} rounded-lg flex items-center justify-center text-white text-sm mb-1`}
                                >
                                  {category.icon}
                                </div>
                                <span className="text-xs text-gray-600">
                                  {category.name}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="p-4">
                        <div className="text-sm text-gray-500 mb-2">
                          Kết quả tìm kiếm cho "{searchQuery}"
                        </div>
                        {/* Search results would go here */}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-2 md:space-x-4">
              {/* Wishlist - Hidden on mobile */}
              <Link
                to="#"
                className="hidden md:flex flex-col items-center p-2 rounded-lg hover:bg-gray-100 transition-colors group"
              >
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="w-5 h-5 text-gray-600 group-hover:text-red-500 transition-colors"
                  />
                </div>
                <span className="text-xs mt-1 text-gray-600 group-hover:text-red-500 transition-colors">
                  Yêu thích
                </span>
              </Link>

              {/* Notifications */}
              <Link
                to="#"
                className="hidden md:flex flex-col items-center p-2 rounded-lg hover:bg-gray-100 transition-colors group relative"
              >
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faBell}
                    className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors"
                  />
                  <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center animate-pulse">
                    2
                  </div>
                </div>
                <span className="text-xs mt-1 text-gray-600 group-hover:text-blue-600 transition-colors">
                  Thông báo
                </span>
              </Link>
              {/* Cart */}
              <div className="relative group">
                <Link
                  to="#"
                  className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-100 transition-colors group relative"
                >
                  <div className="relative">
                    <FontAwesomeIcon
                      icon={faShoppingCart}
                      className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors"
                    />
                    {cartCount > 0 && (
                      <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center animate-bounce">
                        {cartCount}
                      </div>
                    )}
                  </div>
                  <span className="text-xs mt-1 text-gray-600 group-hover:text-blue-600 transition-colors hidden md:block">
                    Giỏ hàng
                  </span>
                </Link>

                {/* Cart Dropdown */}
                <div className="absolute right-0 top-full mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-4 border-b border-gray-100">
                    <h3 className="font-semibold text-gray-800">
                      Giỏ hàng ({cartCount})
                    </h3>
                  </div>

                  {cartCount > 0 ? (
                    <>
                      {/* Cart Items Container with Scroll */}
                      <div className="max-h-64 overflow-y-auto">
                        <div className="p-2">
                          {/* Sample cart items - replace with your actual cart data */}
                          <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex-shrink-0">
                              <img
                                src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max_2.png"
                                alt="Product"
                                className="w-full h-full object-cover rounded-lg"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-medium text-gray-800 truncate">
                                Bộ nhớ/ Ram Desktop Kingston Fury Beast 16GB
                              </h4>
                              <p className="text-xs text-gray-500">
                                1 x 16GB, Đen
                              </p>
                              <p className="text-sm font-semibold text-red-600">
                                1.690.000đ
                              </p>
                            </div>
                            <button className="text-gray-400 hover:text-red-500 transition-colors">
                              <FontAwesomeIcon
                                icon={faTimes}
                                className="w-4 h-4"
                              />
                            </button>
                          </div>

                          <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex-shrink-0">
                              <img
                                src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_ng_n_2__9_14.png"
                                alt="Product"
                                className="w-full h-full object-cover rounded-lg"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-medium text-gray-800 truncate">
                                Máy tính xách tay/ Laptop LG Gram 14T90S-G
                              </h4>
                              <p className="text-xs text-gray-500">Đen</p>
                              <p className="text-sm font-semibold text-red-600">
                                26.490.000đ
                              </p>
                            </div>
                            <button className="text-gray-400 hover:text-red-500 transition-colors">
                              <FontAwesomeIcon
                                icon={faTimes}
                                className="w-4 h-4"
                              />
                            </button>
                          </div>

                          <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex-shrink-0">
                              <img
                                src="/api/placeholder/48/48"
                                alt="Product"
                                className="w-full h-full object-cover rounded-lg"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-medium text-gray-800 truncate">
                                Túi đeo lưng/ Balo laptop Targus 15.6 TSB883
                              </h4>
                              <p className="text-xs text-gray-500">
                                1 sản phẩm
                              </p>
                              <p className="text-sm font-semibold text-red-600">
                                48.770.000đ
                              </p>
                            </div>
                            <button className="text-gray-400 hover:text-red-500 transition-colors">
                              <FontAwesomeIcon
                                icon={faTimes}
                                className="w-4 h-4"
                              />
                            </button>
                          </div>
                          <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex-shrink-0">
                              <img
                                src="/api/placeholder/48/48"
                                alt="Product"
                                className="w-full h-full object-cover rounded-lg"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-medium text-gray-800 truncate">
                                Túi đeo lưng/ Balo laptop Targus 15.6 TSB883
                              </h4>
                              <p className="text-xs text-gray-500">
                                1 sản phẩm
                              </p>
                              <p className="text-sm font-semibold text-red-600">
                                48.770.000đ
                              </p>
                            </div>
                            <button className="text-gray-400 hover:text-red-500 transition-colors">
                              <FontAwesomeIcon
                                icon={faTimes}
                                className="w-4 h-4"
                              />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Cart Footer */}
                      <div className="p-4 border-t border-gray-100 bg-gray-50">
                        <div className="flex justify-between items-center mb-3">
                          <span className="font-semibold text-gray-800">
                            Tổng tiền (3) sản phẩm
                          </span>
                          <span className="font-bold text-lg text-red-600">
                            76.950.000đ
                          </span>
                        </div>
                        <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                          Xem giỏ hàng
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="p-8 text-center">
                      <div className="text-gray-400 mb-2">
                        <FontAwesomeIcon
                          icon={faShoppingCart}
                          className="w-12 h-12"
                        />
                      </div>
                      <p className="text-gray-500 mb-4">
                        Giỏ hàng của bạn đang trống
                      </p>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Tiếp tục mua sắm
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Account */}
              <div className="hidden md:block">
                <AccountDropdown />
              </div>

              {/* Mobile Account */}
              <Link
                to="#"
                className="md:hidden flex items-center p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <FontAwesomeIcon
                  icon={faUser}
                  className="w-5 h-5 text-gray-600"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMenuOpen(false)}
          >
            <div
              className="bg-white w-80 h-full shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Menu</h3>
                  <button onClick={() => setIsMenuOpen(false)}>
                    <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-4 space-y-4">
                <Link
                  to="#"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100"
                >
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="w-5 h-5 text-red-500"
                  />
                  <span>Yêu thích</span>
                </Link>
                <Link
                  to="#"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100"
                >
                  <FontAwesomeIcon
                    icon={faBell}
                    className="w-5 h-5 text-blue-500"
                  />
                  <span>Thông báo</span>
                </Link>
                <Link
                  to="#"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100"
                >
                  <FontAwesomeIcon
                    icon={faMapPin}
                    className="w-5 h-5 text-green-500"
                  />
                  <span>Theo dõi đơn hàng</span>
                </Link>
                <Link
                  to="#"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100"
                >
                  <FontAwesomeIcon
                    icon={faUser}
                    className="w-5 h-5 text-purple-500"
                  />
                  <span>Trở thành người bán</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
