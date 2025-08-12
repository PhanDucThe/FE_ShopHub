import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const VerticalCategoryMenu = ({ categorys }) => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const handleCategoryClick = (category) => {
    console.log("Category clicked:", category.slug);
    // Thêm logic điều hướng ở đây
  };

  const handleSubcategoryClick = (subcategory) => {
    console.log("Subcategory clicked:", subcategory.slug);
    // Thêm logic điều hướng ở đây
  };
  return (
    <>
      <div className="w-full">
        <h4 className="text-lg font-bold mb-4 text-blue-600 border-b pb-2 flex items-center">
          <div className="w-1 h-6 bg-blue-600 mr-2"></div>
          DANH MỤC SẢN PHẨM
        </h4>

        <div className="space-y-1">
          {categorys.map((category) => (
            <div
              key={category.id}
              className="relative group"
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Main Category */}
              <button
                onClick={() => handleCategoryClick(category)}
                className={`w-full flex items-center justify-between p-3 text-left hover:bg-blue-50 rounded-lg transition-all duration-200 border border-transparent hover:border-blue-100 ${
                  hoveredCategory === category.id
                    ? "bg-blue-50 border-blue-100 shadow-sm"
                    : ""
                }`}
              >
                <div className="flex items-center flex-1">
                  <img
                    src={category.category?.image}
                    alt={category.category?.name}
                    className="w-8 h-8 object-cover rounded-lg mr-3 flex-shrink-0"
                  />
                  <span
                    className={`text-gray-700 font-medium transition-colors ${
                      hoveredCategory === category.id
                        ? "text-blue-600"
                        : "hover:text-blue-600"
                    }`}
                  >
                    {category.category?.name}
                  </span>
                </div>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className={`w-4 h-4 text-gray-400 transition-all duration-200 ${
                    hoveredCategory === category.id
                      ? "text-blue-500 translate-x-1"
                      : ""
                  }`}
                />
              </button>

              {/* Subcategories Dropdown */}
              {hoveredCategory === category.id && (
                <div className="absolute left-full top-0 ml-2 w-80 bg-white border border-gray-200 rounded-lg shadow-xl z-[9999] animate-in slide-in-from-left-2 duration-200">
                  <div className="p-4">
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                        <img
                          src={category.category?.image}
                          alt={category.category?.name}
                          className="w-6 h-6 object-cover rounded mr-2"
                        />
                        {category.category?.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {category.category?.description}
                      </p>
                    </div>
                    {/* con */}
                    <div className="grid grid-cols-1 gap-2 max-h-96 overflow-y-auto">
                      {category.subcategories.map((subcategory) => (
                        <button
                          key={subcategory.slug}
                          onClick={() => handleSubcategoryClick(subcategory)}
                          className="flex items-start p-3 text-left hover:bg-gray-50 rounded-lg transition-colors duration-200 group/item border border-transparent hover:border-gray-100"
                        >
                          <img
                            src={subcategory.image}
                            alt={subcategory.name}
                            className="w-12 h-12 object-cover rounded-lg mr-3 flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-medium text-gray-900 group-hover/item:text-blue-600 transition-colors duration-200">
                              {subcategory.name}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                              {subcategory.description}
                            </p>
                          </div>
                          <FontAwesomeIcon
                            icon={faChevronRight}
                            className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VerticalCategoryMenu;
