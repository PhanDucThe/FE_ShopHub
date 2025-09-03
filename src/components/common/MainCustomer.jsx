import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBolt,
  faFire,
  faMobileAlt,
  faLaptop,
  faHeadphones,
  faClock,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductSection from "../product/ProductSection";
import { productApi } from "../../api/productApi";
import VerticalCategoryMenu from "./VerticalCategoryMenu ";

const electronicsAccessories = [
  {
    name: "Sạc dự phòng",
    image:
      "https://cdn.tgdd.vn/Products/Images/57/309433/pin-sac-du-phong-polymer-10000mah-12w-ava-ds609a-thumb-1-600x600.jpg",
  },
  {
    name: "Tai nghe không dây",
    image:
      "https://boba.vn/static/san-pham/am-thanh/tai-nghe/tai-nghe-true-wireless/tau-nghe-bluetooth-khong-day-tws-cho-android-iphon/00sadasd.png",
  },
  {
    name: "Ốp lưng điện thoại",
    image:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/480/056/products/z4293941503577-30a1b60b415d34d14b2d4b9b4eefb4d8-1682411409229.jpg?v=1682423322887",
  },
  {
    name: "Cáp sạc USB-C",
    image:
      "https://nshopvn.com/wp-content/uploads/2023/10/day-cap-sac-du-lieu-usb-type-c-t19k-4.jpg",
  },
  {
    name: "Giá đỡ điện thoại",
    image:
      "https://jola.vn/cdn/720/Product/2bECoWl3E/0347-gia-do-dien-thoai-nhom-at-1-js618.jpg",
  },
  {
    name: "Chuột không dây",
    image: "https://vitinhtranphu.com/uploads/06a967842056fa08a347.jpg",
  },
  {
    name: "Hub USB đa năng",
    image:
      "https://product.hstatic.net/200000373523/product/3ff2523d9ffb84c0e957ee4ab68f12dd_cb091b8d7d06454eb92e0c7fd9a9e9d9.jpg",
  },
  {
    name: "Đế tản nhiệt laptop",
    image:
      "https://muicamau.vn/wp-content/uploads/2024/07/78535_de_lam_mat_laptop_cooling_pad_n192_2_fan__2_.jpg",
  },
];

const MainCustomer = () => {
  // Get Product TopDeal
  const [productTopDeal, setProductTopDeal] = useState([]);
  useEffect(() => {
    const fetchProductTopDeal = async () => {
      const response = await productApi.getProductTopDeal();
      setProductTopDeal(response.data);
    };
    fetchProductTopDeal();
  }, []);

  // Get new Product
  const [newProduct, setNewProduct] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const res = await productApi.getNewProduct();
      setNewProduct(res.data);
    };
    fetchApi();
  }, []);

  // Get Product Is Smart Phone And Tablet
  const [smartPhone, setSmartPhone] = useState([]);
  useEffect(() => {
    const fetchProductSmartPhone = async () => {
      const response = await productApi.getSmartPhoneAndTalet();
      setSmartPhone(response.data);
    };
    fetchProductSmartPhone();
  }, []);

  // Get Laptop and PC
  const [laptop, setLaptop] = useState([]);
  useEffect(() => {
    const fetchProductLaptop = async () => {
      const response = await productApi.getLaptopAndPc();
      setLaptop(response.data);
    };
    fetchProductLaptop();
  }, []);

  // Get Audio Equipments
  const [auidoEquipment, setAudioEquipment] = useState([]);
  useEffect(() => {
    const fetchProductAudioEquipment = async () => {
      const response = await productApi.getAudioEquipment();
      setAudioEquipment(response.data);
    };
    fetchProductAudioEquipment();
  }, []);

  const [category, setCategory] = useState([]);
  // Get data category
  useEffect(() => {
    const fetchApi = async () => {
      const response = await axios.get(
        `http://localhost:8081/api/v1/categories`
      );
      setCategory(response.data.data);
    };
    fetchApi();
  }, []);

  // get Apple Watch
  const [appleWatch, setAppleWatch] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const res = await productApi.getAppleWatch();
      setAppleWatch(res.data);
    };
    fetchApi();
  }, []);

  // get Cammera.
  const [camera, setCamera] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const res = await productApi.getCamera();
      setCamera(res.data);
    };
    fetchApi();
  }, []);

  const bannerImages = [
    {
      url: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Siêu Sale Mùa Hè",
      discount: "50%",
    },
    {
      url: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Ưu Đãi Đặc Biệt",
      discount: "60%",
    },
    {
      url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1399&q=80",
      title: "Deal Sốc Cuối Tuần",
      discount: "70%",
    },
  ];

  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
    }, 4000); // Chuyển banner mỗi 5 giây

    return () => clearInterval(interval);
  });

  return (
    <>
      <div className="flex justify-around p-4 relative bg-slate-100">
        {/* Danh mục sản phẩm */}
        <div className="w-2/12 rounded-lg bg-white shadow-md p-4 sticky top-4 h-fit z-50">
          <VerticalCategoryMenu categorys={category} />
        </div>

        {/* Nội dung chính - Scrollable */}
        <div className="w-9/12 rounded-lg bg-white shadow-md p-6">
          {/* Banner với chuyển động */}
          <div className="relative h-96 overflow-hidden rounded-lg shadow-lg">
            {bannerImages.map((banner, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentBanner ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={banner.url}
                  alt={`Banner ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/70 to-transparent flex items-center px-12">
                  <div className="max-w-md space-y-4">
                    <h2 className="text-4xl font-bold text-white">
                      {banner.title}
                    </h2>
                    <p className="text-white/90 text-xl">
                      Giảm giá đến {banner.discount} cho tất cả sản phẩm
                    </p>
                    <Button
                      variant="secondary"
                      size="lg"
                      className="hover:scale-105 transition-transform"
                    >
                      Khám phá ngay{" "}
                      <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {bannerImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentBanner(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentBanner ? "bg-white" : "bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          {/* Danh sách sản phẩm top deal */}
          <ProductSection
            products={productTopDeal}
            icon={faFire}
            primaryText={"TOP DEAL"}
            secondaryText="SIÊU RẺ"
            iconBgColor="bg-red-600"
            primaryTextColor="text-red-600"
            secondaryTextColor="text-gray-900"
            underlineColor="decoration-red-600"
            showViewAll={true}
          />
          {/* Danh sách mới về */}
          <ProductSection
            products={newProduct}
            icon={faBolt}
            primaryText={"HÀNG MỚI VỀ"}
            secondaryText="SIÊU HÓT"
            iconBgColor="bg-teal-500"
            primaryTextColor="text-teal-600"
            secondaryTextColor="text-gray-900"
            underlineColor="decoration-teal-500"
            showViewAll={true}
          />
          {/* Điện thoại và  máy tính bảng */}
          <ProductSection
            products={smartPhone}
            icon={faMobileAlt}
            primaryText={"ĐIỆN THOẠI & MÁY TÍNH BẢNG"}
            secondaryText="THÔNG MINH"
            iconBgColor="bg-blue-500"
            primaryTextColor="text-blue-600"
            secondaryTextColor="text-gray-900"
            underlineColor="decoration-blue-500"
            showViewAll={true}
          />
          {/* Thiết bị đeo tay thông minh */}
          <ProductSection
            products={appleWatch}
            icon={faClock} // hoặc faWatch, faHeart
            primaryText={"THIẾT BỊ ĐEO TAY THÔNG MINH"}
            secondaryText="SỨC KHỎE" // hoặc "THEO DÕI", "THỂ THAO"
            iconBgColor="bg-green-500"
            primaryTextColor="text-green-600"
            secondaryTextColor="text-gray-900"
            underlineColor="decoration-green-500"
            showViewAll={true}
          />
          {/* Camera */}
          <ProductSection
            products={camera}
            icon={faCamera} // hoặc faCameraRetro, faVideo
            primaryText={"TIVI"}
            secondaryText="SIÊU MỎNG" // hoặc "CHỤP ẢNH", "KỶ NIỆM"
            iconBgColor="bg-orange-500"
            primaryTextColor="text-orange-600"
            secondaryTextColor="text-gray-900"
            underlineColor="decoration-orange-500"
            showViewAll={true}
          />
          {/* LapTop và máy tính để bàn */}
          <ProductSection
            products={laptop}
            icon={faLaptop}
            primaryText={"LAPTOP & PC"}
            secondaryText="HIỆU NĂNG"
            iconBgColor="bg-slate-500"
            primaryTextColor="text-slate-600"
            secondaryTextColor="text-gray-900"
            underlineColor="decoration-slate-500"
            showViewAll={true}
          />
          {/* Thiết bị âm Thanh */}
          <ProductSection
            products={auidoEquipment}
            icon={faHeadphones}
            primaryText={"THIẾT BỊ ÂM THANH"}
            secondaryText="SỐNG ĐỘNG"
            iconBgColor="bg-purple-500"
            primaryTextColor="text-purple-600"
            secondaryTextColor="text-gray-900"
            underlineColor="decoration-purple-500"
            showViewAll={true}
          />
          {/* Linh kiện máy tính. */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            {/* Header */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 6h16v2H4zm0 5h16v6H4zm16-8H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  PHỤ KIỆN MÁY TÍNH
                </h2>
              </div>
              <p className="text-gray-600 text-lg font-medium">
                NÂNG CAP TRẢI NGHIỆM
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mt-3 rounded-full ml-0"></div>
            </div>

            <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
              {electronicsAccessories.map((item, index) => (
                <div
                  className="flex flex-col items-center justify-center p-4 bg-zinc-50 rounded-2xl hover:bg-zinc-100 transition-colors duration-200 cursor-pointer group"
                  key={index}
                >
                  <div className="w-16 h-16 mb-3 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-700 text-center leading-tight">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCustomer;
