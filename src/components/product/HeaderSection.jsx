import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faFire } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../ui/button";

const HeaderSection = ({
  icon = faFire, // Đổi icon mặc định thành faFire
  primaryText = "TOP DEAL", // Đổi text mặc định
  secondaryText = "SIÊU RẺ", // Đổi text mặc định
  iconBgColor = "bg-red-600", // Đổi màu mặc định thành đỏ
  primaryTextColor = "text-red-600",
  secondaryTextColor = "text-gray-900",
  underlineColor = "decoration-red-600",
  showViewAll = true,
}) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center space-x-3">
        <div className={`${iconBgColor} p-2 rounded-full shadow-md`}>
          <FontAwesomeIcon icon={icon} className="text-white text-xl" />
        </div>
        <h3 className="text-3xl font-extrabold">
          <span className={primaryTextColor}>{primaryText}</span> -
          <span
            className={`${secondaryTextColor} ml-2 underline ${underlineColor} decoration-dotted`}
          >
            {secondaryText}
          </span>
        </h3>
      </div>

      {showViewAll && (
        <Button
          variant="outline"
          className="flex items-center text-blue-600 hover:text-blue-800"
        >
          Xem tất cả <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </Button>
      )}
    </div>
  );
};

export default HeaderSection;
