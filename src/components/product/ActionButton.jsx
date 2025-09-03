import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const ActionButton = ({ variantId, quantity }) => {
  const handleToCart = () => {
    // dùng axios để call api thôi. hiện tại mình yêu cầu là phải đăng nhập vào mới có tư cách
    // thêm sản phẩm vào giỏ hàng.
    console.log(variantId);
    console.log(quantity);
  };

  return (
    <>
      <div className="space-y-3">
        <div className="flex space-x-3">
          <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium">
            Trả góp 0%
          </button>
          <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors">
            MUA NGAY
          </button>
          <button
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            onClick={handleToCart}
          >
            <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
            Thêm vào giỏ
          </button>
        </div>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
          Liên hệ
        </button>
      </div>
    </>
  );
};

export default ActionButton;
