import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faStar,
  faShoppingCart,
  faShield,
  faTruck,
  faExchangeAlt,
  faCreditCard,
  faStarHalfAlt,
  faHome,
  faAngleRight,
  faEye,
  faComments,
  faBalanceScale,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";

const LaptopDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(
    "8CPU-8GPU-16GB-256GB"
  );
  const [selectedColor, setSelectedColor] = useState("Đen");
  const [isFavorite, setIsFavorite] = useState(false);

  const product = {
    name: "MacBook Air M4 13 inch 2025 10CPU 8GPU 16GB 256GB",
    subtitle: "Chính hãng Apple Việt Nam",
    rating: 5,
    reviewCount: 13,
    price: 24290000,
    originalPrice: 26990000,
    images: [
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://api.cellphones.com.vn/v2/media/catalog/product/m/a/macbook-air-m2-2024-1.jpg",
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://api.cellphones.com.vn/v2/media/catalog/product/m/a/macbook-air-m2-2024-2.jpg",
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://api.cellphones.com.vn/v2/media/catalog/product/m/a/macbook-air-m2-2024-3.jpg",
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://api.cellphones.com.vn/v2/media/catalog/product/m/a/macbook-air-m2-2024-4.jpg",
    ],
    variants: [
      {
        id: "10CPU-10GPU-24GB-1TB",
        label: "10CPU - 10GPU\n24GB - 1TB\nSạc 70W",
        price: 34990000,
      },
      {
        id: "10CPU-10GPU-24GB-512GB",
        label: "10CPU - 10GPU\n24GB - 512GB\nSạc 70W",
        price: 31990000,
      },
      {
        id: "10CPU-10GPU-16GB-1TB",
        label: "10CPU - 10GPU\n16GB - 1TB",
        price: 31990000,
      },
      {
        id: "10CPU-10GPU-24GB-256GB",
        label: "10CPU - 10GPU\n24GB - 256GB",
        price: 28990000,
      },
      {
        id: "10CPU-10GPU-16GB-512GB",
        label: "10CPU - 10GPU\n16GB - 512GB",
        price: 28990000,
      },
      {
        id: "10CPU-8GPU-16GB-256GB",
        label: "10CPU - 8GPU\n16GB - 256GB\nSạc 70W",
        price: 26990000,
      },
      {
        id: "8CPU-8GPU-16GB-256GB",
        label: "10CPU - 8GPU\n16GB - 256GB",
        price: 24290000,
        highlight: "Cấu hình tùy chỉnh",
      },
    ],
    colors: [
      {
        id: "anh-sao",
        name: "Ánh sao",
        price: 24590000,
        image: "macbook-anh-sao.jpg",
      },
      {
        id: "xanh-da-troi",
        name: "Xanh da trời",
        price: 24790000,
        image: "macbook-xanh.jpg",
      },
      {
        id: "den-xanh-tham",
        name: "Đen xanh thẫm",
        price: 24290000,
        image: "macbook-den.jpg",
        highlight: true,
      },
      { id: "bac", name: "Bạc", price: 24590000, image: "macbook-bac.jpg" },
    ],
    features: [
      {
        icon: "🔒",
        title: "Máy mới 100%, đầy đủ phụ kiện từ nhà sản xuất",
        desc: "Sản phẩm có đầy đủ phụ kiện đi kèm theo tiêu chuẩn của Apple Việt Nam phần mềm chính hãng.",
      },
      {
        icon: "🎁",
        title: "1 ĐỔI 1 trong 30 ngày nếu có lỗi phần cứng từ nhà sản xuất",
        desc: "Bảo hành 12 tháng tại trung tâm bảo hành chính hãng Apple Care và Xem chi tiết",
      },
      {
        icon: "📱",
        title:
          "MacBook Air bộ Tập hợp bao gồm USB-C Cáp USB-C sang MagSafe 3 (2 m)",
        desc: "",
      },
    ],
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN").format(price) + "đ";
  };

  const getSelectedVariantPrice = () => {
    const variant = product.variants.find((v) => v.id === selectedVariant);
    return variant ? variant.price : product.price;
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className="text-yellow-400 text-xs"
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <FontAwesomeIcon
          key="half"
          icon={faStarHalfAlt}
          className="text-yellow-400 text-xs"
        />
      );
    }

    return stars;
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center text-sm text-gray-600 space-x-2">
            <FontAwesomeIcon icon={faHome} className="text-gray-500" />
            <span>Trang chủ</span>
            <FontAwesomeIcon
              icon={faAngleRight}
              className="text-gray-400 text-xs"
            />
            <span>Laptop</span>
            <FontAwesomeIcon
              icon={faAngleRight}
              className="text-gray-400 text-xs"
            />
            <span>Mac</span>
            <FontAwesomeIcon
              icon={faAngleRight}
              className="text-gray-400 text-xs"
            />
            <span>MacBook M4</span>
            <FontAwesomeIcon
              icon={faAngleRight}
              className="text-gray-400 text-xs"
            />
            <span className="text-gray-900">
              MacBook Air M4 13 inch 2025 10CPU 8GPU 16GB 256GB | Chính hãng
              Apple Việt Nam
            </span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column - Images */}
          <div className="lg:col-span-6">
            {/* Product Title và Actions - Chỉ hiển thị trên desktop */}
            <div className="hidden lg:block mb-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <p className="text-gray-600 mb-3">{product.subtitle}</p>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {renderStars(product.rating)}
                  <span className="ml-1 text-sm font-medium text-gray-700">
                    {product.rating}
                  </span>
                  <span className="text-sm text-gray-500">
                    ({product.reviewCount} đánh giá)
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

            {/* Product Title Mobile */}
            <div className="lg:hidden mb-4">
              <h1 className="text-xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <p className="text-gray-600 text-sm mb-2">{product.subtitle}</p>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  {renderStars(product.rating)}
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {product.rating}
                </span>
                <span className="text-sm text-gray-500">
                  ({product.reviewCount} đánh giá)
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4">
              {/* Main Image */}
              <div className="relative mb-4">
                <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Action Icons */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2">
                  <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center text-gray-600 hover:text-blue-600">
                    <FontAwesomeIcon icon={faEye} />
                  </button>
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={`w-10 h-10 rounded-lg shadow-md flex items-center justify-center ${
                      isFavorite
                        ? "bg-red-100 text-red-500"
                        : "bg-white text-gray-600 hover:text-red-500"
                    }`}
                  >
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                  <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center text-gray-600 hover:text-blue-600">
                    <FontAwesomeIcon icon={faComments} />
                  </button>
                  <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center text-gray-600 hover:text-blue-600">
                    <FontAwesomeIcon icon={faBalanceScale} />
                  </button>
                  <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center text-gray-600 hover:text-blue-600">
                    <FontAwesomeIcon icon={faShareAlt} />
                  </button>
                </div>
              </div>

              {/* Thumbnail Images */}
              <div className="flex space-x-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-16 h-16 border-2 rounded-lg overflow-hidden ${
                      selectedImage === index
                        ? "border-blue-500"
                        : "border-gray-200"
                    }`}
                  >
                    <img
                      src={image}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Features */}
            <div className="bg-white rounded-lg p-4 mt-4">
              <h3 className="font-bold mb-4">Cam kết sản phẩm</h3>
              <div className="space-y-4">
                {product.features.map((feature, index) => (
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
                      {formatPrice(getSelectedVariantPrice())}
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Variants */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3 text-gray-900">Phiên bản</h3>
              <div className="grid grid-cols-3 gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant.id)}
                    className={`relative p-3 border-2 rounded-lg text-left transition-all ${
                      selectedVariant === variant.id
                        ? "border-red-500 bg-red-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {variant.highlight && (
                      <span className="absolute -top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                        {variant.highlight}
                      </span>
                    )}
                    <div className="text-sm font-medium text-gray-900 whitespace-pre-line">
                      {variant.label}
                    </div>
                    <div className="text-sm text-red-600 font-semibold mt-1">
                      {formatPrice(variant.price)}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3 text-gray-900">Màu sắc</h3>
              <div className="grid grid-cols-2 gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color.name)}
                    className={`relative p-3 border-2 rounded-lg text-left transition-all ${
                      selectedColor === color.name
                        ? "border-red-500 bg-red-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {color.highlight && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                        HOT
                      </span>
                    )}
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {color.name}
                        </div>
                        <div className="text-sm text-red-600 font-semibold">
                          {formatPrice(color.price)}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <span className="text-2xl font-bold text-red-600">
                  {formatPrice(getSelectedVariantPrice())}
                </span>
                <span className="text-sm text-gray-500">
                  {formatPrice(product.originalPrice)}
                </span>
                <button className="bg-blue-100 text-blue-600 px-3 py-1 rounded text-sm font-medium">
                  Trả góp 0%
                </button>
              </div>

              <div className="flex space-x-3">
                <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  Mua Ngay
                </button>
                <button className="w-12 h-12 border-2 border-red-600 text-red-600 rounded-lg flex items-center justify-center hover:bg-red-50">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Liên hệ
                </button>
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-lg p-4 border">
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center space-x-3 text-sm">
                  <FontAwesomeIcon icon={faShield} className="text-green-600" />
                  <span>Bảo hành chính hãng Apple 12 tháng</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <FontAwesomeIcon icon={faTruck} className="text-green-600" />
                  <span>Miễn phí giao hàng toàn quốc</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <FontAwesomeIcon
                    icon={faExchangeAlt}
                    className="text-green-600"
                  />
                  <span>Đổi trả trong 15 ngày đầu</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <FontAwesomeIcon
                    icon={faCreditCard}
                    className="text-green-600"
                  />
                  <span>Hỗ trợ trả góp 0% lãi suất</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaptopDetail;
