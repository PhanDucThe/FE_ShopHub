import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComments,
  faBalanceScale,
  faShareAlt,
  faGift,
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

const SmartWatchDetail = () => {
  const [products, setProduct] = useState({});
  // get slug
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  // lấy storage và color
  const version = searchParams.get("version");
  const color = searchParams.get("color");
  const [selectedVersion, setSelectedVersion] = useState(version);
  const [selectedColor, setSelectedColor] = useState(color);

  useEffect(() => {
    const fetchApi = async () => {
      let res = await axios.get(
        `http://localhost:8081/api/v1/products/${slug}?version=${version}&color=${color}`
      );
      setProduct(res.data.data);
    };
    fetchApi();
  }, [slug, version, color]);

  // Tìm storage option được chọn để hiển thị colors
  const getSelectedStorageOption = () => {
    return products?.availableOptions?.Version?.find(
      (option) => option.slug === selectedVersion
    );
  };

  // 2. Function lấy variant hiện tại dựa trên cả 2 options
  const getCurrentVariant = () => {
    // Tìm storage được chọn
    const versionOption = products?.availableOptions?.Version?.find(
      (version) => version.slug === selectedVersion
    );

    // Tìm color trong storage đã chọn
    const colorOption = versionOption?.Color?.find(
      (color) => color.slug === selectedColor
    );

    return colorOption;
  };

  // 3. Lấy current variant và giá
  const currentVariant = getCurrentVariant();

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

              {/* Main Product Card with Gradient Background */}
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
                        {formatPrice(currentVariant?.salePrice)}
                      </span>
                      <span className="text-lg text-gray-500 line-through">
                        {formatPrice(currentVariant?.originalPrice)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Version */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                  Phiên bản
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {products?.availableOptions?.Version?.map((option) => (
                    <button
                      key={option.slug}
                      onClick={() => {
                        setSelectedVersion(option.slug);
                        setSelectedColor(selectedColor);
                      }}
                      className={`relative p-4 rounded-xl border-2 text-center font-semibold transition-all ${
                        selectedVersion === option.slug
                          ? "border-red-500 bg-red-50 text-red-700"
                          : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                      }`}
                    >
                      {option.highlight && (
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      )}
                      {option.value}
                    </button>
                  ))}
                </div>
              </div>

              {selectedVersion && getSelectedStorageOption() && (
                <div className="animate-in slide-in-from-bottom duration-300">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">
                    Màu sắc
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {getSelectedStorageOption()?.Color?.map((color) =>
                      color.available === true ? (
                        <button
                          key={color.slug}
                          onClick={() => setSelectedColor(color.slug)}
                          className={`relative p-4 rounded-xl border-2 text-left transition-all ${
                            selectedColor === color.slug
                              ? "border-red-500 bg-red-50"
                              : "border-slate-200 bg-white hover:border-slate-300"
                          }`}
                        >
                          {color.highlight && (
                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                              <svg
                                className="w-3 h-3 text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          )}

                          <div className="flex items-center space-x-3">
                            {/* Color Preview - Small Square */}
                            <div className="w-10 h-10 rounded-lg shadow-sm overflow-hidden border border-slate-200">
                              <img
                                src={color.image}
                                alt={color.value}
                                className="w-full h-full object-cover"
                              />
                            </div>

                            <div className="flex-1">
                              <div className="font-semibold text-slate-900 text-sm mb-1">
                                {color.value}
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="font-bold text-red-600">
                                  {formatPrice(color.salePrice)}
                                </div>
                                {color.originalPrice !== color.salePrice && (
                                  <div className="text-sm text-slate-500 line-through">
                                    {formatPrice(color.originalPrice)}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </button>
                      ) : (
                        ""
                      )
                    )}
                  </div>
                </div>
              )}

              {/* Smember Benefits */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 mt-2">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                    S
                  </span>
                  <span className="text-sm font-medium">
                    Tiết kiệm thêm đến 300.000đ cho Smember
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
                        Giảm 10%
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-white text-red-600 rounded-full px-3 py-1 text-sm font-bold">
                        Giảm 10%
                      </div>
                    </div>
                    <div className="bg-yellow-400 text-red-600 px-4 py-2 rounded-lg font-bold">
                      QUÀ TẶNG
                      <div className="text-xs">ĐẶC BIỆT</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Promotions */}
              <div className="bg-white rounded-lg p-4 mb-6">
                <h3 className="font-semibold mb-3 text-gray-900">
                  Ưu đãi thêm
                </h3>
                <div className="space-y-3">
                  {mockProduct.promotions.map((promo, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <FontAwesomeIcon
                        icon={faGift}
                        className="text-red-500 mt-1"
                      />
                      <span className="text-sm">{promo}</span>
                    </div>
                  ))}
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
        <ReviewAndQuestion />
      </div>
      <Footer />
    </>
  );
};

export default SmartWatchDetail;
