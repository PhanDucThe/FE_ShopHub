import React from "react";
import { Button } from "@/components/ui/button"; // Điều chỉnh đường dẫn nếu cần
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { useNavigate } from "react-router";

const ForbiddenPage = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Main content - sử dụng min-h để đảm bảo chiều cao tối thiểu */}
      <div className="min-h-[500px] bg-gray-50 flex justify-center items-center px-4">
        <div className="max-w-md w-full text-center">
          {/* 404 Number with Box */}
          <div className="relative mb-8">
            <div className="text-8xl font-bold text-gray-300 leading-none">
              4
              <span className="relative inline-block">
                0{/* 3D Box */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-12">
                  <div className="relative w-full h-full">
                    {/* Box front face */}
                    <div className="absolute inset-0 bg-white border-2 border-gray-300 rounded transform rotate-3d shadow-lg">
                      <div className="flex items-center justify-center h-full">
                        <div className="w-8 h-2 bg-blue-500 rounded"></div>
                      </div>
                    </div>
                    {/* Box top face */}
                    <div className="absolute -top-2 left-1 w-full h-3 bg-gray-200 border border-gray-300 rounded transform skew-x-12 skew-y-3"></div>
                    {/* Box right face */}
                    <div className="absolute -right-2 top-1 w-3 h-full bg-gray-100 border border-gray-300 transform skew-y-12 skew-x-3"></div>
                    {/* Lock */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-4 bg-gray-400 rounded-t-full">
                      <div className="absolute bottom-0 w-full h-2 bg-gray-500 rounded-b"></div>
                    </div>
                  </div>
                </div>
              </span>
              3
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            Truy cập bị từ chối
          </h1>

          {/* Back to Home Button */}
          <Button
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
            onClick={handleClick}
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            Quay lại trang chủ
          </Button>

          {/* Decorative dots */}
          <div className="flex justify-center gap-2 mt-12">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ForbiddenPage;
