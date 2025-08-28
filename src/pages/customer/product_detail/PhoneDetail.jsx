import { useState, useEffect } from "react";
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
  faComments,
  faBalanceScale,
  faShareAlt,
  faPhone,
  faGift,
} from "@fortawesome/free-solid-svg-icons";
import Header from "@/components/common/Header";
import { Link, useParams, useSearchParams } from "react-router-dom";
import axios from "axios";

const PhoneDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedStore, setSelectedStore] = useState("Hồ Chí Minh");
  const [selectedDistrict, setSelectedDistrict] = useState("Quận/Huyện");
  const [products, setProduct] = useState({});

  // get slug
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  // lấy storage và color
  const storage = searchParams.get("storage");
  const color = searchParams.get("color");
  const [selectedStorage, setSelectedStorage] = useState(storage);
  const [selectedColor, setSelectedColor] = useState(color);
  useEffect(() => {
    const fetchApi = async () => {
      let res = await axios.get(
        `http://localhost:8081/api/v1/products/${slug}?storage=${storage}&color=${color}`
      );
      setProduct(res.data.data);
      console.log(res.data.data);
    };
    fetchApi();
  }, [slug, storage, color]);

  // Tìm storage option được chọn để hiển thị colors
  const getSelectedStorageOption = () => {
    return products?.availableOptions?.Storage?.find(
      (option) => option.slug === selectedStorage
    );
  };

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
      Chip: "A18 Pro",
      RAM: "8GB",
      "Dung lượng pin": "4685 mAh",
    },
    promotions: [
      "Đặc quyền trợ giá lên đến 3 triệu khi thu cũ lên đời iPhone",
      "Trả góp 0% lãi suất - lãi đến 12 tháng, trả trước từ 30% qua OTTO hoặc qua thẻ tín dụng",
      "Tặng combo 3 voucher tổng trị giá đến 2 triệu mua các sản phẩm tivi, gia dụng, đồng hồ thể em",
      "Tặng SimEsim Viettel 5G có 60GB data/ngày kèm TV360 4K - miễn phí 1 tháng sử dụng (Chỉ áp dụng tại cửa hàng)",
    ],
    stores: [
      {
        name: "134 Nguyễn Thái Học, P. Phạm Ngũ Lão, Q.1, TP HCM",
        phone: "0287000132",
        status: "Còn hàng",
      },
      {
        name: "55B Trần Quang Khải, P. Tân Định, Q.1",
        phone: "0287683355",
        status: "Còn hàng",
      },
      {
        name: "168 Lê Thị Riêng, P. Bến Thành, Q.1",
        phone: "0287123456",
        status: "Hết hàng",
      },
    ],
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN").format(price) + "đ";
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
    <>
      <Header />
      <div className="min-h-screen">
        {/* Breadcrumb */}
        <div className=" border-gray-100">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <nav className="flex items-center text-sm space-x-2">
              <Link
                to="/"
                className="flex items-center text-gray-500 hover:text-blue-600 transition-colors"
              >
                <FontAwesomeIcon icon={faHome} className="w-4 h-4 mr-1" />
                <span>Trang chủ</span>
              </Link>
              <FontAwesomeIcon
                icon={faAngleRight}
                className="text-gray-300 text-xs"
              />

              <Link
                to="/dien-thoai"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                Điện thoại
              </Link>
              <FontAwesomeIcon
                icon={faAngleRight}
                className="text-gray-300 text-xs"
              />

              <Link
                to="/apple"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                Apple
              </Link>
              <FontAwesomeIcon
                icon={faAngleRight}
                className="text-gray-300 text-xs"
              />

              <Link
                to="/iphone-16-series"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                iPhone 16 Series
              </Link>
              <FontAwesomeIcon
                icon={faAngleRight}
                className="text-gray-300 text-xs"
              />

              <span className="text-gray-900 font-medium">
                iPhone 16 Pro Max 256GB
              </span>
            </nav>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-1">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column - Images */}
            <div className="lg:col-span-6">
              {/* Product Title và Actions - Chỉ hiển thị trên desktop */}
              <div className="hidden lg:block mb-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  {products?.productName + " " + product.subtitle}
                </h1>
                {/* <p className="text-gray-600 mb-3">{product.subtitle}</p> */}
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
                  {products?.productName}
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
                        src={
                          selectedImage
                            ? products?.images?.find(
                                (img) => img?.id === selectedImage
                              )?.url
                            : products?.currentVariant?.image
                        }
                        alt={
                          selectedImage
                            ? products?.images?.find(
                                (img) => img?.id === selectedImage
                              )?.alt
                            : products?.productName
                        }
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Product Highlights */}
                  <div className="w-2/3 pl-6 text-white">
                    <h2 className="text-xl font-bold mb-4">
                      TÍNH NĂNG NỔI BẬT
                    </h2>
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
                    icon={faAngleRight}
                    className="text-gray-400 rotate-180"
                  />
                </button>
                {products?.images?.map((image) => (
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
                  <FontAwesomeIcon
                    icon={faAngleRight}
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
              <div className="bg-white rounded-lg border mt-6">
                <div className="flex items-center justify-between p-5 border-b">
                  <h3 className="font-semibold text-gray-900">
                    Thông số kỹ thuật
                  </h3>
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
                  {products?.specification?.map((spec, index) => (
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
                        {formatPrice(products?.currentVariant?.salePrice)}
                      </span>
                      <span className="text-lg text-gray-500 line-through">
                        {formatPrice(products?.currentVariant?.originalPrice)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Storage Selection */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                  Phiên bản
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {products?.availableOptions?.Storage?.map((option) => (
                    <button
                      key={option.slug}
                      onClick={() => {
                        setSelectedStorage(option.slug);
                        setSelectedColor("");
                      }}
                      className={`relative p-4 rounded-xl border-2 text-center font-semibold transition-all ${
                        selectedStorage === option.slug
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

              {/* Colors - Chỉ hiển thị khi đã chọn storage */}
              {selectedStorage && getSelectedStorageOption() && (
                <div className="animate-in slide-in-from-bottom duration-300">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">
                    Màu sắc
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {getSelectedStorageOption()?.Color?.map((color) => (
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
                    ))}
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
                  {product.promotions.map((promo, index) => (
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
                            <span
                              className={`text-sm font-medium ${
                                store.status === "Còn hàng"
                                  ? "text-green-600"
                                  : "text-red-600"
                              }`}
                            >
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

              {/* Services */}
              <div className="bg-white rounded-lg p-4 border mt-6">
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center space-x-3 text-sm">
                    <FontAwesomeIcon
                      icon={faShield}
                      className="text-green-600"
                    />
                    <span>Bảo hành chính hãng Apple 12 tháng</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <FontAwesomeIcon
                      icon={faTruck}
                      className="text-green-600"
                    />
                    <span>Giao hàng miễn phí toàn quốc</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <FontAwesomeIcon
                      icon={faExchangeAlt}
                      className="text-green-600"
                    />
                    <span>Đổi trả trong 30 ngày nếu lỗi nhà sản xuất</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <FontAwesomeIcon
                      icon={faCreditCard}
                      className="text-green-600"
                    />
                    <span>Hỗ trợ trả góp 0% qua thẻ tín dụng</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhoneDetail;
