import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBolt,
  faFire,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import axios from "axios";
import { newProducts } from "./productsData";
import ProductSection from "./ProductSection";
import { productApi } from "../../api/productApi";
import VerticalCategoryMenu from "./VerticalCategoryMenu ";

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
  }, []);

  return (
    <>
      <div className="flex justify-around p-4 relative bg-slate-100">
        {/* Danh mục sản phẩm */}
        <div className="w-2/12 rounded-lg bg-white shadow-md p-4 sticky top-4 h-fit z-50">
          {/* <h4 className="text-lg font-bold mb-4 text-blue-600 border-b pb-2">
            DANH MỤC
          </h4>
          <div className="space-y-3">
            {category.map((value) => (
              <div
                key={value["id"]}
                className="flex items-center p-2 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
              >
                <img
                  src={value["image"]}
                  alt={value["name"]}
                  className="w-8 h-8 object-cover rounded mr-3 flex-shrink-0"
                />
                <span className="text-gray-700 hover:text-blue-600 transition-colors">
                  {value["name"]}
                </span>
              </div>
            ))}
          </div> */}
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
            products={newProducts}
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
            icon={faBolt}
            primaryText={"ĐIỆN THOẠI & MÁY TÍNH BẢNG"}
            secondaryText="SIÊU HÓT"
            iconBgColor="bg-teal-500"
            primaryTextColor="text-teal-600"
            secondaryTextColor="text-gray-900"
            underlineColor="decoration-teal-500"
            showViewAll={true}
          />
          {/* LapTop và máy tính để bàn */}
          <ProductSection
            products={laptop}
            icon={faBolt}
            primaryText={"LAPTOP & PC"}
            secondaryText="SIÊU HÓT"
            iconBgColor="bg-teal-500"
            primaryTextColor="text-teal-600"
            secondaryTextColor="text-gray-900"
            underlineColor="decoration-teal-500"
            showViewAll={true}
          />
          {/* Thiết bị âm Thanh */}
          <ProductSection
            products={auidoEquipment}
            icon={faBolt}
            primaryText={"THIẾT BỊ ÂM THANH"}
            secondaryText="SIÊU HÓT"
            iconBgColor="bg-teal-500"
            primaryTextColor="text-teal-600"
            secondaryTextColor="text-gray-900"
            underlineColor="decoration-teal-500"
            showViewAll={true}
          />
          {/* Thiết bị đeo thông minh */}
          {/* <ProductSection
            products={newProducts}
            icon={faBolt}
            primaryText={"HÀNG MỚI VỀ"}
            secondaryText="SIÊU HÓT"
            iconBgColor="bg-teal-500"
            primaryTextColor="text-teal-600"
            secondaryTextColor="text-gray-900"
            underlineColor="decoration-teal-500"
            showViewAll={true}
          /> */}
        </div>
      </div>
    </>
  );
};

export default MainCustomer;
