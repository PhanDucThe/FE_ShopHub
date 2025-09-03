import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import PromotionBadge from "./PromotionBadge";

const ProductImages = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  return (
    <>
      <div className="bg-white rounded-lg p-4">
        {/* Main Image */}
        <div className="relative mb-4">
          <div className="aspect-video bg-gray-50 rounded-lg overflow-hidden">
            <img
              src={
                selectedImage
                  ? product?.images?.find((img) => img?.id === selectedImage)
                      ?.url
                  : product?.currentVariant?.image
              }
              alt={
                selectedImage
                  ? product?.images?.find((img) => img?.id === selectedImage)
                      ?.alt
                  : product?.productName
              }
              className="w-full h-full object-contain"
            />
          </div>

          {/* Promotion Badge */}
          <PromotionBadge
            percentDiscount={product?.currentVariant?.price?.percentDiscount}
          />
        </div>

        {/* Thumbnail Images */}
        <div className="flex space-x-2 overflow-x-auto mb-4">
          <button className="flex-shrink-0 w-12 h-12 border rounded-lg flex items-center justify-center bg-white">
            <FontAwesomeIcon
              icon={faAngleRight}
              className="text-gray-400 rotate-180"
            />
          </button>
          {product?.images?.map((image) => (
            <button
              key={image?.id}
              onClick={() => setSelectedImage(image?.id)}
              className={`flex-shrink-0 w-12 h-12 border-2 rounded-lg overflow-hidden ${
                selectedImage === image?.id
                  ? "border-blue-500"
                  : "border-gray-200"
              }`}
            >
              <img
                src={image?.url}
                alt={image?.alt}
                className="w-full h-full object-contain"
              />
            </button>
          ))}
          <button className="flex-shrink-0 w-12 h-12 border rounded-lg flex items-center justify-center bg-white">
            <FontAwesomeIcon icon={faAngleRight} className="text-gray-400" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductImages;
