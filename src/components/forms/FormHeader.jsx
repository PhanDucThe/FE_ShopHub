import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const FormHeader = () => {
  return (
    <div className="mb-8">
      <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
        <span className="hover:text-blue-600 cursor-pointer transition-colors">
          Dashboard
        </span>
        <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4" />
        <span className="hover:text-blue-600 cursor-pointer transition-colors">
          Sản phẩm
        </span>
        <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4" />
        <span className="text-gray-900 font-medium">Thêm mới</span>
      </nav>

      <div className="relative">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Tạo sản phẩm mới
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
        <p className="text-gray-600 mt-4">
          Điền thông tin chi tiết để tạo sản phẩm mới cho cửa hàng của bạn
        </p>
      </div>
    </div>
  );
};

export default FormHeader;
