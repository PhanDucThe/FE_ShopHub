import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faStar,
  faShoppingCart,
  faStarHalfAlt,
  faHome,
  faAngleRight,
  faEye,
  faComments,
  faBalanceScale,
  faShareAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const SmartWatchDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("42mm-day-cao-su-size-s-m");
  const [selectedColor, setSelectedColor] = useState("Đen");
  const [selectedStore, setSelectedStore] = useState("Hồ Chí Minh");
  const [selectedDistrict, setSelectedDistrict] = useState("Quận/Huyện");
  const [isFavorite, setIsFavorite] = useState(false);

  const product = {
    name: "Apple Watch Series 10 42mm (GPS) Viền Nhôm Dây Cao Su Size S/M",
    subtitle: "Chính hãng Apple Việt Nam",
    rating: 4.6,
    reviewCount: 7,
    price: 8390000,
    originalPrice: 10990000,
    images: [
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://api.cellphones.com.vn/v2/media/catalog/product/a/p/apple-watch-series-10-1.jpg",
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://api.cellphones.com.vn/v2/media/catalog/product/a/p/apple-watch-series-10-2.jpg",
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://api.cellphones.com.vn/v2/media/catalog/product/a/p/apple-watch-series-10-3.jpg",
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://api.cellphones.com.vn/v2/media/catalog/product/a/p/apple-watch-series-10-4.jpg",
    ],
    sizes: [
      {
        id: "46mm-day-cao-su-size-m-l",
        label: "46mm\nDây Cao Su\nSize M/L",
        price: 9390000,
      },
      {
        id: "46mm-day-vai",
        label: "46mm\nDây vải",
        price: 9390000,
      },
      {
        id: "46mm-day-cao-su-size-s-m",
        label: "46mm\nDây Cao Su\nSize S/M",
        price: 9390000,
      },
      {
        id: "42mm-day-cao-su-size-m-l",
        label: "42mm\nDây Cao Su\nSize M/L",
        price: 8390000,
      },
      {
        id: "42mm-day-vai",
        label: "42mm\nDây vải",
        price: 8390000,
      },
      {
        id: "42mm-day-cao-su-size-s-m",
        label: "42mm\nDây Cao Su\nSize S/M",
        price: 8390000,
        highlight: true,
      },
    ],
    colors: [
      {
        id: "hong",
        name: "Hồng",
        price: 8590000,
        image: "watch-hong.jpg",
      },
      {
        id: "den",
        name: "Đen",
        price: 8390000,
        image: "watch-den.jpg",
        highlight: true,
      },
      {
        id: "bac",
        name: "Bạc",
        price: 8390000,
        image: "watch-bac.jpg",
      },
    ],
    features: [
      {
        icon: "🔒",
        title: "Hàng chính hãng Apple Việt Nam, Mới",
        desc: "",
      },
      {
        icon: "🎁",
        title: "1 ĐỔI 1 trong 30 ngày nếu có lỗi phần cứng từ nhà sản xuất",
        desc: "Bảo hành 12 tháng tại trung tâm bảo hành chính hãng Apple Care và Xem chi tiết",
      },
      {
        icon: "📱",
        title: "Apple Watch Series 10 Dây Cao Su",
        desc: "Cáp Sạc Nhanh Từ Tính Cổ Điều Nổ USB-C",
      },
      {
        icon: "💰",
        title:
          "Giá sản phẩm đã bao gồm thuế VAT, giá bán có thể thay đổi theo chính sách của hãng",
        desc: "",
      },
    ],
    stores: [
      {
        name: "134 Nguyễn Thái Học, P. Phạm Ngũ Lão, Q.1, TP HCM",
        phone: "0287000132",
        status: "Bán đổ",
      },
      {
        name: "55B Trần Quang Khải, P. Tân Định, Q.1",
        phone: "0287683355",
        status: "Bán đổ",
      },
    ],
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN").format(price) + "đ";
  };

  const getSelectedSizePrice = () => {
    const size = product.sizes.find((s) => s.id === selectedSize);
    return size ? size.price : product.price;
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
            <span>Đồng hồ thông minh</span>
            <FontAwesomeIcon
              icon={faAngleRight}
              className="text-gray-400 text-xs"
            />
            <span>Apple Watch</span>
            <FontAwesomeIcon
              icon={faAngleRight}
              className="text-gray-400 text-xs"
            />
            <span>Apple Watch Series 10</span>
            <FontAwesomeIcon
              icon={faAngleRight}
              className="text-gray-400 text-xs"
            />
            <span className="text-gray-900">
              Apple Watch Series 10 42mm (GPS) Viền Nhôm Dây Cao Su Size S/M |
              Chính hãng Apple Việt Nam
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
                      {formatPrice(getSelectedSizePrice())}
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Size Options */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3 text-gray-900">Phiên bản</h3>
              <div className="grid grid-cols-3 gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size.id)}
                    className={`relative p-3 border-2 rounded-lg text-center transition-all ${
                      selectedSize === size.id
                        ? "border-red-500 bg-red-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {size.highlight && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                        HOT
                      </span>
                    )}
                    <div className="text-sm font-medium text-gray-900 whitespace-pre-line">
                      {size.label}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3 text-gray-900">Màu sắc</h3>
              <div className="grid grid-cols-3 gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color.name)}
                    className={`relative p-3 border-2 rounded-lg text-center transition-all ${
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
                    <div className="flex flex-col items-center space-y-2">
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

            {/* Smember Benefits */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <div className="flex items-center space-x-2 mb-2">
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                  S
                </span>
                <span className="text-sm font-medium">
                  Tiết kiệm thêm đến 84.000đ cho Smember
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

            {/* Store Selection */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3 text-gray-900">
                Xem chi nhánh có hàng
              </h3>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <select
                  value={selectedStore}
                  onChange={(e) => setSelectedStore(e.target.value)}
                  className="border border-gray-300 rounded-lg p-2 text-sm"
                >
                  <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                  <option value="Hà Nội">Hà Nội</option>
                  <option value="Đà Nẵng">Đà Nẵng</option>
                </select>
                <select
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.target.value)}
                  className="border border-gray-300 rounded-lg p-2 text-sm"
                >
                  <option value="Quận/Huyện">Quận/Huyện</option>
                  <option value="Quận 1">Quận 1</option>
                  <option value="Quận 3">Quận 3</option>
                  <option value="Quận 7">Quận 7</option>
                </select>
              </div>

              {/* Store List */}
              <div className="space-y-3">
                {product.stores.map((store, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          {store.name}
                        </p>
                        <div className="flex items-center space-x-4 mt-1">
                          <div className="flex items-center space-x-1 text-sm text-gray-600">
                            <FontAwesomeIcon
                              icon={faPhone}
                              className="text-xs"
                            />
                            <span>{store.phone}</span>
                          </div>
                          <span className="text-sm text-red-600 font-medium">
                            {store.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <div className="flex space-x-3">
                <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium">
                  Trả góp 0%
                </button>
                <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  MUA NGAY
                </button>
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                  Thêm vào giỏ
                </button>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Liên hệ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartWatchDetail;
