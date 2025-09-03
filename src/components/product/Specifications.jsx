import React from "react";

const Specifications = ({ product }) => {
  return (
    <>
      <div className="bg-white rounded-lg border mt-6">
        <div className="flex items-center justify-between p-5 border-b">
          <h3 className="font-semibold text-gray-900">Thông số kỹ thuật</h3>
          <button className="text-blue-600 text-sm flex items-center">
            Xem tất cả
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div>
          {product?.specification?.map((spec, index) => (
            <div
              key={index}
              className="grid grid-cols-5 border-b last:border-b-0"
            >
              <div className="col-span-2 bg-gray-50 p-4 text-gray-700 font-medium">
                {spec.name}
              </div>
              <div className="col-span-3 p-4 text-gray-900">
                <div className="leading-relaxed">
                  {spec.value.split("\n").map((line, lineIndex) => (
                    <div key={lineIndex} className="mb-1 last:mb-0">
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Specifications;
