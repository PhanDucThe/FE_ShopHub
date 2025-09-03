import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComments,
  faBalanceScale,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Breadcrumb from "@/components/product/Breadcrumb";
import Specifications from "@/components/product/Specifications";
import renderStars from "@/components/common/renderStars";
import formatPrice from "@/utils/formatPrice";
import ActionButton from "@/components/product/ActionButton";
import ReviewAndQuestion from "@/components/product/ReviewAndQuestion";
import StoreSelection from "@/components/product/StoreSelection";
import Services from "@/components/product/Services";
import ProductImages from "@/components/product/ProductImages";
import mockProduct from "@/utils/mockProduct";

const TvDetail = () => {
  const [products, setProduct] = useState({});

  // get slug
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  // get screen-size
  const screenSize = searchParams.get("screen-size");
  console.log({ slug, screenSize });
  const [selectedSize, setSelectedSize] = useState(screenSize);
  // call api
  useEffect(() => {
    const fetchApi = async () => {
      let res = await axios.get(
        `http://localhost:8081/api/v1/products/${slug}?screen-size=${screenSize}`
      );
      setProduct(res.data.data);
    };
    fetchApi();
  }, [slug, screenSize]);

  // 2. Function để lấy giá theo size đã chọn
  const getCurrentPrice = () => {
    const selectedOption = products?.availableOptions?.["Screen Size"]?.find(
      (size) => size.slug === selectedSize
    );

    return {
      salePrice: selectedOption?.salePrice,
      originalPrice: selectedOption?.originalPrice,
    };
  };

  // 3. Lấy current price
  const currentPrice = getCurrentPrice();

  return (
    <>
      <Header />
      <div className="min-h-screen">
        {/* Breadcrumb */}
        <Breadcrumb product={products} />
        <div className="max-w-7xl mx-auto px-4 py-1">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column - Images */}
            <div className="lg:col-span-6">
              {/* Product Title và Actions - Chỉ hiển thị trên desktop */}
              <div className="hidden lg:block mb-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  {products?.productName + " " + mockProduct.subtitle}
                </h1>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    {renderStars(mockProduct.rating)}
                    <span className="ml-1 text-sm font-medium text-gray-700">
                      {mockProduct.rating}
                    </span>
                    <span className="text-sm text-gray-500">
                      ({mockProduct.reviewCount} đánh giá)
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-blue-600">
                  <button className="flex items-center space-x-1 hover:underline">
                    <FontAwesomeIcon icon={faHeart} />
                    <span>Yêu thích</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:underline">
                    <FontAwesomeIcon icon={faComments} />
                    <span>Hỏi đáp</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:underline">
                    <FontAwesomeIcon icon={faBalanceScale} />
                    <span>Thông số</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:underline">
                    <FontAwesomeIcon icon={faShareAlt} />
                    <span>So sánh</span>
                  </button>
                </div>
              </div>

              <ProductImages product={products} />

              {/* Product Features */}
              <div className="bg-white rounded-lg p-4 mt-4">
                <h3 className="font-bold mb-4">Cam kết sản phẩm</h3>
                <div className="space-y-4">
                  {mockProduct.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-red-600 font-bold text-xs">
                          {index + 1}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-sm">{feature.title}</p>
                        {feature.desc && (
                          <p className="text-xs text-gray-600 mt-1">
                            {feature.desc}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <Specifications product={products} />
            </div>

            {/* Right Column - Product Info */}
            <div className="lg:col-span-6">
              {/* Price Box */}
              <div className="bg-blue-50 rounded-lg p-4 mb-6 border border-blue-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Giá sản phẩm</p>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl font-bold text-red-600">
                        {formatPrice(currentPrice.salePrice)}
                      </span>
                      <span className="text-lg text-gray-500 line-through">
                        {formatPrice(currentPrice.originalPrice)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Size Options */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3 text-gray-900">
                  Kích thước màn hình
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {products?.availableOptions?.["Screen Size"]?.map((size) => (
                    <button
                      key={size.slug} // Sử dụng slug thay vì id
                      onClick={() => setSelectedSize(size.slug)} // Hoặc setSelectedSize(size.value)
                      className={`relative p-3 border-2 rounded-lg text-center transition-all ${
                        selectedSize === size.slug // So sánh với slug
                          ? "border-red-500 bg-red-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="text-sm font-medium text-gray-900 whitespace-pre-line">
                        {size.value}{" "}
                        {/* Sử dụng size.value thay vì size.label */}
                      </div>
                      <div className="text-sm text-red-600 font-semibold mt-1">
                        {formatPrice(size.salePrice)}{" "}
                        {/* Sử dụng salePrice từ JSON gốc */}
                      </div>
                      {/* Hiển thị giá gốc nếu có giảm giá */}
                      {size.originalPrice > size.salePrice && (
                        <div className="text-xs text-gray-400 line-through">
                          {formatPrice(size.originalPrice)}
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Smember Benefits */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                    S
                  </span>
                  <span className="text-sm font-medium">
                    Tiết kiệm thêm đến 500.000đ cho Smember
                  </span>
                  <button className="text-red-600 text-sm hover:underline">
                    Kiểm tra giá cuối →
                  </button>
                </div>
              </div>

              {/* Promotion Banner */}
              <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-lg p-4 mb-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="bg-white text-red-600 rounded-full px-3 py-1 text-sm font-bold">
                        Giảm 15%
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-white text-red-600 rounded-full px-3 py-1 text-sm font-bold">
                        Miễn phí lắp đặt
                      </div>
                    </div>
                    <div className="bg-yellow-400 text-red-600 px-4 py-2 rounded-lg font-bold">
                      QUÀ TẶNG
                      <div className="text-xs">ĐẶC BIỆT</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Store Selection */}
              <StoreSelection product={mockProduct} />

              {/* Action Buttons */}
              <ActionButton />

              {/* Services */}
              <Services />
            </div>
          </div>
        </div>
        {/* Reviews and Q&A Section */}
        <ReviewAndQuestion />
      </div>
      <Footer />
    </>
  );
};

export default TvDetail;
