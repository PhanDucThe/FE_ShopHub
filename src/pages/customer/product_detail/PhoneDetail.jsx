import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faStar,
  faShoppingCart,
  faStarHalfAlt,
  faChevronLeft,
  faChevronRight,
  faHome,
  faAngleRight,
  faComments,
  faBalanceScale,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";

const PhoneDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedStorage, setSelectedStorage] = useState("256GB");
  const [selectedColor, setSelectedColor] = useState("Titan Tự Nhiên");
  const [selectedStore, setSelectedStore] = useState("Hồ Chí Minh");
  const [selectedDistrict, setSelectedDistrict] = useState("Quận/Huyện");

  const product = {
    name: "iPhone 16 Pro Max 256GB",
    subtitle: "Chính hãng VN/A",
    rating: 4.9,
    reviewCount: 330,
    price: 29990000,
    originalPrice: 34990000,
    images: [
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://api.cellphones.com.vn/v2/media/catalog/product/i/p/iphone-16-pro-max-1.jpg",
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://api.cellphones.com.vn/v2/media/catalog/product/i/p/iphone-16-pro-max-2.jpg",
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://api.cellphones.com.vn/v2/media/catalog/product/i/p/iphone-16-pro-max-3.jpg",
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://api.cellphones.com.vn/v2/media/catalog/product/i/p/iphone-16-pro-max-4.jpg",
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://api.cellphones.com.vn/v2/media/catalog/product/i/p/iphone-16-pro-max-5.jpg",
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://api.cellphones.com.vn/v2/media/catalog/product/i/p/iphone-16-pro-max-6.jpg",
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://api.cellphones.com.vn/v2/media/catalog/product/i/p/iphone-16-pro-max-7.jpg",
    ],
    storageOptions: [
      { id: "1TB", label: "1TB", price: 39990000 },
      { id: "512GB", label: "512GB", price: 34990000 },
      { id: "256GB", label: "256GB", price: 29990000, highlight: true },
    ],
    colors: [
      {
        id: "titan-tu-nhien",
        name: "Titan Tự Nhiên",
        price: 30290000,
        image: "titan-natural.jpg",
      },
      {
        id: "titan-den",
        name: "Titan Đen",
        price: 30290000,
        image: "titan-black.jpg",
      },
      {
        id: "titan-trang",
        name: "Titan Trắng",
        price: 30290000,
        image: "titan-white.jpg",
      },
      {
        id: "titan-sa-mac",
        name: "Titan Sa Mạc",
        price: 29990000,
        image: "titan-desert.jpg",
        highlight: true,
      },
    ],
    highlights: [
      "Camera Ultra Wide 48MP lần đầu tiên tích hợp, nâng tầm camera Telephoto 5x chụp xa tối ưu",
      "Video 4K Dolby Vision ở 120 fps cùng nhiều chế động quay video độc đáo, iPhone thành máy quay chuyên nghiệp trong tầm tay",
      "Ngoài ra, chip A18 Pro mang lại hiệu suất vượt trội cho cả việc chụp ảnh và chơi game",
    ],
    features: [
      {
        icon: "🔒",
        title: "Máy mới 100%, chính hãng Apple Việt Nam",
        desc: "Cellphones hiện là đại lý bán lẻ uỷ quyền iPhone chính hãng VN/A của Apple Việt Nam",
      },
      {
        icon: "🎁",
        title: "1 ĐỔI 1 trong 30 ngày nếu có lỗi phần cứng từ nhà sản xuất",
        desc: "Bảo hành 12 tháng tại trung tâm bảo hành chính hãng Apple Care và Xem chi tiết",
      },
      {
        icon: "📱",
        title:
          "iPhone 16 Pro Max có dung lượng lớn (8 GB, Cáp Sạc USB-C (1m), Tài liệu",
        desc: "",
      },
      {
        icon: "💰",
        title:
          "Giá sản phẩm đã bao gồm VAT, giá bán có thể thay đổi theo chính sách của hãng",
        desc: "",
      },
    ],
    specs: {
      "Kích thước màn hình": "6.9 inches",
      "Công nghệ màn hình": "Super Retina XDR OLED",
      "Camera sau":
        "Camera chính: 48MP, f/1.78, 24mm, 2μm, chống rung quang học; chế độ chuyển cảm biến thể thể thứ hai, Focus Pixels 100%",
      "Camera trước":
        "12MP, f/2.2, Tự động lấy nét với Focus Pixels, Retina Flash",
    },
    promotions: [
      "Đặc quyền trợ giá lên đến 3 triệu khi thu cũ lên đời iPhone",
      "Trả góp 0% lãi suất - lãi đến 12 tháng, trả trước từ 30% qua OTTO hoặc qua thẻ tín dụng",
      "Tặng combo 3 voucher tổng trị giá đến 2 triệu mua các sản phẩm tivi, gia dụng, đồng hồ thể em",
      "Tặng SimEsim Viettel 5G có 60GB data/ngày kèm TV360 4K - miễn phí 1 tháng sử dụng (Chỉ áp dụng tại cửa hàng)",
    ],
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN").format(price) + "đ";
  };

  const getSelectedPrice = () => {
    const storage = product.storageOptions.find(
      (s) => s.id === selectedStorage
    );
    return storage ? storage.price : product.price;
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
            <span>Điện thoại</span>
            <FontAwesomeIcon
              icon={faAngleRight}
              className="text-gray-400 text-xs"
            />
            <span>Apple</span>
            <FontAwesomeIcon
              icon={faAngleRight}
              className="text-gray-400 text-xs"
            />
            <span>iPhone 16 Series</span>
            <FontAwesomeIcon
              icon={faAngleRight}
              className="text-gray-400 text-xs"
            />
            <span className="text-gray-900">
              iPhone 16 Pro Max 256GB | Chính hãng VN/A
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

            {/* Main Product Card with Gradient Background */}
            <div className="bg-gradient-to-br from-pink-400 via-pink-300 to-orange-300 rounded-2xl p-6 mb-4">
              <div className="flex">
                {/* Product Image */}
                <div className="w-1/3">
                  <div className="bg-white rounded-xl p-4">
                    <img
                      src={product.images[selectedImage]}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Product Highlights */}
                <div className="w-2/3 pl-6 text-white">
                  <h2 className="text-xl font-bold mb-4">TÍNH NĂNG NỔI BẬT</h2>
                  <ul className="space-y-3 text-sm">
                    {product.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="flex space-x-2 overflow-x-auto mb-4">
              <button className="flex-shrink-0 w-12 h-12 border rounded-lg flex items-center justify-center bg-white">
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="text-gray-400"
                />
              </button>
              {product.images.slice(0, 6).map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-12 h-12 border-2 rounded-lg overflow-hidden ${
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
              <button className="flex-shrink-0 w-12 h-12 border rounded-lg flex items-center justify-center bg-white">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-gray-400"
                />
              </button>
            </div>

            {/* Product Features */}
            <div className="bg-white rounded-lg p-4">
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

            {/* Specifications */}
            <div className="bg-white rounded-lg p-4 mt-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold">Thông số kỹ thuật</h3>
                <button className="text-blue-600 text-sm">Xem tất cả</button>
              </div>
              <div className="space-y-3">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div
                    key={key}
                    className="grid grid-cols-3 gap-4 py-2 border-b border-gray-100 last:border-b-0"
                  >
                    <div className="text-sm text-gray-600">{key}</div>
                    <div className="col-span-2 text-sm text-gray-900">
                      {value}
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
              <p className="text-sm text-gray-600 mb-1">Giá sản phẩm</p>
              <div className="flex items-center space-x-3">
                <span className="text-2xl font-bold text-red-600">
                  {formatPrice(getSelectedPrice())}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              </div>
            </div>

            {/* Storage Options */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3 text-gray-900">Phiên bản</h3>
              <div className="grid grid-cols-3 gap-3">
                {product.storageOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedStorage(option.id)}
                    className={`relative p-3 border-2 rounded-lg text-center transition-all ${
                      selectedStorage === option.id
                        ? "border-red-500 bg-red-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {option.highlight && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                        HOT
                      </span>
                    )}
                    <div className="font-medium text-gray-900">
                      {option.label}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Color Options */}
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
                      <div className="w-8 h-8 bg-gray-300 rounded"></div>
                      <div>
                        <div className="font-medium text-gray-900">
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

            {/* Promotions */}
            <div className="bg-white rounded-lg p-4 mb-6">
              <h3 className="font-bold mb-4 text-red-600">🎁 Khuyến mãi</h3>
              <div className="space-y-3">
                {product.promotions.map((promo, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <span className="text-red-500 font-bold text-sm">
                      {index + 1}.
                    </span>
                    <p className="text-sm text-gray-700">{promo}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                THÊM VÀO GIỎ HÀNG
              </button>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                MUA NGAY
              </button>
              <div className="grid grid-cols-2 gap-3">
                <button className="border border-gray-300 py-2 rounded-lg text-sm hover:bg-gray-50">
                  Mua trả góp 0%
                </button>
                <button className="border border-gray-300 py-2 rounded-lg text-sm hover:bg-gray-50">
                  Thu cũ đổi mới
                </button>
              </div>
            </div>

            {/* Store Selection */}
            <div className="mt-6 bg-white rounded-lg p-4">
              <h3 className="font-semibold mb-3">Chọn địa chỉ nhận hàng</h3>
              <div className="space-y-3">
                <select
                  value={selectedStore}
                  onChange={(e) => setSelectedStore(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-2"
                >
                  <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                  <option value="Hà Nội">Hà Nội</option>
                  <option value="Đà Nẵng">Đà Nẵng</option>
                </select>
                <select
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-2"
                >
                  <option value="Quận/Huyện">Quận/Huyện</option>
                  <option value="Quận 1">Quận 1</option>
                  <option value="Quận 3">Quận 3</option>
                  <option value="Quận 7">Quận 7</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneDetail;
