import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShield,
  faTruck,
  faExchangeAlt,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <>
      <div className="bg-white rounded-lg p-4 border mt-6">
        <div className="grid grid-cols-1 gap-3">
          <div className="flex items-center space-x-3 text-sm">
            <FontAwesomeIcon icon={faShield} className="text-green-600" />
            <span>Bảo hành chính hãng Apple 12 tháng</span>
          </div>
          <div className="flex items-center space-x-3 text-sm">
            <FontAwesomeIcon icon={faTruck} className="text-green-600" />
            <span>Giao hàng miễn phí toàn quốc</span>
          </div>
          <div className="flex items-center space-x-3 text-sm">
            <FontAwesomeIcon icon={faExchangeAlt} className="text-green-600" />
            <span>Đổi trả trong 30 ngày nếu lỗi nhà sản xuất</span>
          </div>
          <div className="flex items-center space-x-3 text-sm">
            <FontAwesomeIcon icon={faCreditCard} className="text-green-600" />
            <span>Hỗ trợ trả góp 0% qua thẻ tín dụng</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
