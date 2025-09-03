import React from "react";

const PromotionBadge = ({ percentDiscount }) => {
  return (
    <>
      <div className="absolute top-3 left-3 z-20">
        <div className="relative">
          <div className="bg-gradient-to-br from-red-500 to-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-md shadow-lg transform rotate-0 group-hover:rotate-[-2deg] transition-transform duration-300">
            -Giảm {percentDiscount} %
          </div>
          <div className="absolute -bottom-1 left-1/2 w-3 h-3 bg-red-600 transform -translate-x-1/2 rotate-45 z-0"></div>
        </div>
      </div>
    </>
  );
};

export default PromotionBadge;
