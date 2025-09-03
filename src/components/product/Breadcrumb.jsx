import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Breadcrumb = ({ product }) => {
  return (
    <>
      <div className="border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center text-sm space-x-2">
            <Link
              to="/"
              className="flex items-center text-gray-500 hover:text-blue-600 transition-colors"
            >
              <FontAwesomeIcon icon={faHome} className="w-4 h-4 mr-1" />
              <span>Trang chủ</span>
            </Link>
            <FontAwesomeIcon
              icon={faAngleRight}
              className="text-gray-300 text-xs"
            />

            <Link
              to="/dien-thoai"
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              {product?.category?.categoryName}
            </Link>
            <FontAwesomeIcon
              icon={faAngleRight}
              className="text-gray-300 text-xs"
            />

            <Link
              to="/apple"
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              {product?.brand?.brandName}
            </Link>
            <FontAwesomeIcon
              icon={faAngleRight}
              className="text-gray-300 text-xs"
            />
            <span className="text-gray-900 font-medium">
              {product?.productName}
            </span>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
