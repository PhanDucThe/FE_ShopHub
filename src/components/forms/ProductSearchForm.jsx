import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Search,
  Filter,
  RotateCcw,
  ChevronDown,
  ChevronUp,
  Save,
  Calendar,
  Package,
  Tag,
  DollarSign,
  TrendingUp,
  Bookmark,
} from "lucide-react";

// Validation Schema
const validationSchema = Yup.object().shape({
  quickSearch: Yup.string().max(100, "Tối đa 100 ký tự"),
  priceFrom: Yup.number().min(0, "Giá phải lớn hơn 0").nullable(),
  priceTo: Yup.number().min(0, "Giá phải lớn hơn 0").nullable(),
  stockFrom: Yup.number().min(0, "Tồn kho phải lớn hơn hoặc bằng 0").nullable(),
  stockTo: Yup.number().min(0, "Tồn kho phải lớn hơn hoặc bằng 0").nullable(),
  createdFrom: Yup.date().nullable(),
  createdTo: Yup.date().nullable(),
});

const ProductSearchForm = () => {
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [savedFilters, setSavedFilters] = useState([
    { id: 1, name: "Sản phẩm sắp hết hàng", icon: Package },
    { id: 2, name: "Sản phẩm bán chạy", icon: TrendingUp },
    { id: 3, name: "Sản phẩm mới", icon: Calendar },
  ]);

  const initialValues = {
    quickSearch: "",
    category: "",
    brand: "",
    warehouse: "",
    status: "",
    priceFrom: "",
    priceTo: "",
    stockFrom: "",
    stockTo: "",
    stockStatus: "",
    promotion: "",
    createdFrom: "",
    createdTo: "",
    salesPerformance: "",
    color: "",
    size: "",
    memory: "",
    sortBy: "created_desc",
  };

  const handleSubmit = (values) => {
    console.log("Search parameters:", values);
    // Implement search logic here
  };

  const handleReset = (resetForm) => {
    resetForm();
  };

  const handleSaveFilter = (values) => {
    const filterName = prompt("Nhập tên bộ lọc:");
    if (filterName) {
      const newFilter = {
        id: Date.now(),
        name: filterName,
        values: values,
        icon: Bookmark,
      };
      setSavedFilters([...savedFilters, newFilter]);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, resetForm, setFieldValue, handleSubmit }) => (
          <div className="p-6">
            {/* Quick Search Section */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Search size={20} />
                Tìm kiếm nhanh
              </h3>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Field
                  name="quickSearch"
                  type="text"
                  placeholder="Tìm theo tên sản phẩm, SKU, mã vạch... (có thể nhập nhiều mã cách nhau bởi dấu phẩy)"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <ErrorMessage
                  name="quickSearch"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="text-sm text-gray-500 mt-2">
                💡 Tip: Bạn có thể tìm theo tên sản phẩm, mã SKU, hoặc mã vạch.
                Sử dụng dấu phẩy để tìm nhiều mã cùng lúc.
              </div>
            </div>

            {/* Saved Filters */}
            <div className="mb-6">
              <h4 className="text-md font-medium text-gray-700 mb-3">
                Bộ lọc đã lưu
              </h4>
              <div className="flex flex-wrap gap-2">
                {savedFilters.map((filter) => {
                  const IconComponent = filter.icon;
                  return (
                    <button
                      key={filter.id}
                      type="button"
                      className="inline-flex items-center gap-2 px-3 py-2 bg-blue-50 text-blue-700 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors"
                      onClick={() =>
                        filter.values &&
                        Object.keys(filter.values).forEach((key) =>
                          setFieldValue(key, filter.values[key])
                        )
                      }
                    >
                      <IconComponent size={16} />
                      {filter.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Advanced Filters Toggle */}
            <div className="border-t pt-4 mb-4">
              <button
                type="button"
                onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
              >
                <Filter size={20} />
                Bộ lọc nâng cao
                {showAdvancedFilters ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </button>
            </div>

            {/* Advanced Filters */}
            {showAdvancedFilters && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
                {/* Basic Info Filters */}
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-700 border-b pb-2">
                    Thông tin chung
                  </h4>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Danh mục
                    </label>
                    <Field
                      as="select"
                      name="category"
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Tất cả danh mục</option>
                      <option value="dien-thoai">Điện thoại</option>
                      <option value="laptop">Laptop</option>
                      <option value="tablet">Tablet</option>
                      <option value="phu-kien">Phụ kiện</option>
                    </Field>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Thương hiệu
                    </label>
                    <Field
                      as="select"
                      name="brand"
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Tất cả thương hiệu</option>
                      <option value="apple">Apple</option>
                      <option value="samsung">Samsung</option>
                      <option value="xiaomi">Xiaomi</option>
                      <option value="oppo">OPPO</option>
                    </Field>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Kho hàng
                    </label>
                    <Field
                      as="select"
                      name="warehouse"
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Tất cả kho</option>
                      <option value="hanoi">Kho Hà Nội</option>
                      <option value="hcm">Kho TP.HCM</option>
                      <option value="danang">Kho Đà Nẵng</option>
                    </Field>
                  </div>
                </div>

                {/* Status Filters */}
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-700 border-b pb-2">
                    Trạng thái
                  </h4>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Trạng thái sản phẩm
                    </label>
                    <Field
                      as="select"
                      name="status"
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Tất cả trạng thái</option>
                      <option value="active">Đang bán</option>
                      <option value="out_of_stock">Hết hàng</option>
                      <option value="inactive">Ngừng kinh doanh</option>
                      <option value="pending">Chờ duyệt</option>
                    </Field>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Tình trạng tồn kho
                    </label>
                    <Field
                      as="select"
                      name="stockStatus"
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Tất cả</option>
                      <option value="low_stock">Sắp hết hàng (&lt; 10)</option>
                      <option value="out_of_stock">Hết hàng (= 0)</option>
                      <option value="in_stock">Còn hàng (&gt; 0)</option>
                    </Field>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Khuyến mãi
                    </label>
                    <Field
                      as="select"
                      name="promotion"
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Tất cả</option>
                      <option value="has_promotion">Có khuyến mãi</option>
                      <option value="no_promotion">Không khuyến mãi</option>
                    </Field>
                  </div>
                </div>

                {/* Price & Stock Filters */}
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-700 border-b pb-2 flex items-center gap-2">
                    <DollarSign size={16} />
                    Giá & Tồn kho
                  </h4>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Khoảng giá bán
                    </label>
                    <div className="flex gap-2">
                      <Field
                        name="priceFrom"
                        type="number"
                        placeholder="Từ"
                        className="w-1/2 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                      <Field
                        name="priceTo"
                        type="number"
                        placeholder="Đến"
                        className="w-1/2 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <ErrorMessage
                      name="priceFrom"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                    <ErrorMessage
                      name="priceTo"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Số lượng tồn kho
                    </label>
                    <div className="flex gap-2">
                      <Field
                        name="stockFrom"
                        type="number"
                        placeholder="Từ"
                        className="w-1/2 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                      <Field
                        name="stockTo"
                        type="number"
                        placeholder="Đến"
                        className="w-1/2 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <ErrorMessage
                      name="stockFrom"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                    <ErrorMessage
                      name="stockTo"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Hiệu suất bán hàng
                    </label>
                    <Field
                      as="select"
                      name="salesPerformance"
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Tất cả</option>
                      <option value="best_seller">Bán chạy nhất</option>
                      <option value="slow_moving">Bán chậm</option>
                      <option value="not_sold">Chưa bán được</option>
                    </Field>
                  </div>
                </div>

                {/* Date & Attributes */}
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-700 border-b pb-2 flex items-center gap-2">
                    <Calendar size={16} />
                    Ngày tháng & Thuộc tính
                  </h4>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Ngày tạo
                    </label>
                    <div className="flex gap-2">
                      <Field
                        name="createdFrom"
                        type="date"
                        className="w-1/2 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                      <Field
                        name="createdTo"
                        type="date"
                        className="w-1/2 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <ErrorMessage
                      name="createdFrom"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                    <ErrorMessage
                      name="createdTo"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Màu sắc
                    </label>
                    <Field
                      as="select"
                      name="color"
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Tất cả màu</option>
                      <option value="black">Đen</option>
                      <option value="white">Trắng</option>
                      <option value="blue">Xanh dương</option>
                      <option value="red">Đỏ</option>
                    </Field>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Dung lượng
                    </label>
                    <Field
                      as="select"
                      name="memory"
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Tất cả dung lượng</option>
                      <option value="64gb">64GB</option>
                      <option value="128gb">128GB</option>
                      <option value="256gb">256GB</option>
                      <option value="512gb">512GB</option>
                    </Field>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Sắp xếp theo
                    </label>
                    <Field
                      as="select"
                      name="sortBy"
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="created_desc">Ngày tạo mới nhất</option>
                      <option value="created_asc">Ngày tạo cũ nhất</option>
                      <option value="price_asc">Giá thấp → cao</option>
                      <option value="price_desc">Giá cao → thấp</option>
                      <option value="stock_asc">Tồn kho thấp → cao</option>
                      <option value="stock_desc">Tồn kho cao → thấp</option>
                      <option value="name_asc">Tên A → Z</option>
                      <option value="name_desc">Tên Z → A</option>
                    </Field>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t">
              <div className="flex gap-3">
                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                  className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                >
                  <Search size={16} />
                  Tìm kiếm
                </button>

                <button
                  type="button"
                  onClick={() => handleReset(resetForm)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
                >
                  <RotateCcw size={16} />
                  Đặt lại
                </button>

                <button
                  type="button"
                  onClick={() => handleSaveFilter(values)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                >
                  <Save size={16} />
                  Lưu bộ lọc
                </button>
              </div>

              <div className="text-sm text-gray-500">
                {Object.values(values).filter((val) => val !== "").length >
                  0 && (
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 rounded-full">
                    <Filter size={12} />
                    {
                      Object.values(values).filter((val) => val !== "").length
                    }{" "}
                    bộ lọc đang áp dụng
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default ProductSearchForm;
