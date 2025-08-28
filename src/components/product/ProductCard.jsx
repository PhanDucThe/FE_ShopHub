import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";
import {
  faStar,
  faStarHalfAlt,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import formatPrice from "../../utils/formatPrice";
import toSlug from "@/utils/toSlug";

const ProductCard = ({ product }) => {
  let navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  // chuyen qua trang chi tiet san pham
  const handleClick = (product) => {
    if (product.categoryName === "Điện thoại") {
      const valueStorage = toSlug(product?.option.Storage);
      const valueColor = toSlug(product?.option.Color);
      navigate(
        `/iphone-detail/${product?.productSlug}?storage=${valueStorage}&color=${valueColor}`
      );
    } else if (product.categoryName === "Đồng hồ") {
      navigate("/smart-watch-detai");
    } else if (product.categoryName === "Laptop") {
      navigate("/laptop-detail");
    } else {
      navigate("/tivi-detail");
    }
  };
  return (
    <div
      className="group relative bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer hover:cursor-grab active:cursor-grabbing"
      onClick={() => handleClick(product)}
    >
      {/* Tag giảm giá */}
      <div className="absolute top-3 left-3 z-20">
        <div className="relative">
          <div className="bg-gradient-to-br from-red-500 to-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-md shadow-lg transform rotate-0 group-hover:rotate-[-2deg] transition-transform duration-300">
            -Giảm {product.price?.percentDiscount} %
          </div>
          <div className="absolute -bottom-1 left-1/2 w-3 h-3 bg-red-600 transform -translate-x-1/2 rotate-45 z-0"></div>
        </div>
      </div>

      {/* Nút yêu thích */}
      <button
        onClick={toggleFavorite}
        className={`absolute top-3 right-3 z-10 p-2 rounded-full transition-all cursor-pointer
          ${
            isFavorite
              ? "bg-red-100 text-red-500 shadow-inner border border-red-200"
              : "bg-white text-gray-400 hover:text-red-500 shadow-md border border-gray-100"
          }`}
      >
        <FontAwesomeIcon icon={faHeart} className="w-4 h-4" />
      </button>

      {/* Ảnh sản phẩm */}
      <div className="aspect-square overflow-hidden rounded-t-lg">
        <img
          src={product?.image}
          alt={product?.productName}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Thông tin sản phẩm */}
      <div className="p-4">
        <h4 className="font-medium text-gray-800 mb-2 line-clamp-2 h-12 hover:text-blue-600 transition-colors">
          {product["productName"]}
        </h4>

        {/* Số lượng lượt đánh giá */}
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400 mr-2">
            {[...Array(5)].map((_, i) => {
              // Hiển thị sao đầy nếu index nhỏ hơn rating nguyên
              if (
                i < Math.floor(Number.parseFloat(product["reviews"]["rating"]))
              ) {
                return (
                  <FontAwesomeIcon key={i} icon={faStar} className="w-3 h-3" />
                );
              }
              // Hiển thị sao rưỡi nếu là phần lẻ 0.5
              else if (
                i === Math.floor(product.rating) &&
                product.rating % 1 >= 0.5
              ) {
                return (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStarHalfAlt}
                    className="w-3 h-3"
                  />
                );
              }
              // Còn lại hiển thị sao rỗng
              else {
                return (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className="w-3 h-3 text-gray-300"
                  />
                );
              }
            })}
          </div>
          <span className="text-xs text-gray-500">
            ({product["reviews"]["reviewCount"]})
          </span>
        </div>

        <div className="mb-3">
          <div className="text-red-500 font-bold text-xl">
            {formatPrice(product.price?.salePrice)}
          </div>
          <div className="flex items-center">
            <span className="text-base text-gray-400 line-through mr-2">
              {formatPrice(product.price?.originalPrice)}
            </span>
            <span className="text-xs bg-red-50 text-red-500 px-1.5 py-0.5 rounded-md cursor-default">
              Tiết kiệm{" "}
              {formatPrice(
                product.price?.originalPrice - product.price?.salePrice
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
