import { Field, ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxOpen,
  faTag,
  faBuilding,
  faFileLines,
  faChevronUp,
  faChevronDown,
  faStar,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";

const BasicInfoSection = ({
  expandedSections,
  toggleSection,
  category,
  brand,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200/50 overflow-hidden transition-all duration-300 hover:shadow-md">
      <div
        className="flex items-center justify-between p-6 cursor-pointer bg-gradient-to-r from-blue-50/50 to-indigo-50/50 border-b border-gray-100"
        onClick={() => toggleSection("basic")}
      >
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
            <FontAwesomeIcon icon={faBoxOpen} className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Thông tin cơ bản
            </h2>
            <p className="text-sm text-gray-500">
              Nhập thông tin chính về sản phẩm
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-xs text-gray-500 hidden sm:block">
            {expandedSections.basic ? "Thu gọn" : "Mở rộng"}
          </span>
          <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center transition-transform duration-200">
            {expandedSections.basic ? (
              <FontAwesomeIcon
                icon={faChevronUp}
                className="w-5 h-5 text-gray-600"
              />
            ) : (
              <FontAwesomeIcon
                icon={faChevronDown}
                className="w-5 h-5 text-gray-600"
              />
            )}
          </div>
        </div>
      </div>

      {expandedSections.basic && (
        <div className="p-6 space-y-6 animate-in slide-in-from-top-2 duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Product Name */}
            <div className="lg:col-span-2">
              <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-3">
                <FontAwesomeIcon
                  icon={faBoxOpen}
                  className="w-4 h-4 text-blue-500"
                />
                <span>Tên sản phẩm</span>
                <FontAwesomeIcon
                  icon={faStar}
                  className="w-3 h-3 text-red-500 fill-red-500"
                />
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Nhập tên sản phẩm (ví dụ: iPhone 15 Pro Max 256GB)"
                className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="mt-2 text-sm text-red-500 flex items-center space-x-1"
              >
                {(msg) => (
                  <>
                    <FontAwesomeIcon
                      icon={faExclamationCircle}
                      className="w-4 h-4"
                    />
                    <span>{msg}</span>
                  </>
                )}
              </ErrorMessage>
            </div>

            {/* Category */}
            <div>
              <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-3">
                <FontAwesomeIcon
                  icon={faTag}
                  className="w-4 h-4 text-green-500"
                />
                <span>Danh mục</span>
                <FontAwesomeIcon
                  icon={faStar}
                  className="w-3 h-3 text-red-500 fill-red-500"
                />
              </label>

              <Field name="categoryId">
                {({ field, form, meta }) => (
                  <select
                    {...field}
                    onChange={(e) => {
                      const value =
                        e.target.value === "" ? "" : parseInt(e.target.value);
                      form.setFieldValue("categoryId", value);
                    }}
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none ${
                      meta.error && meta.touched
                        ? "border-red-300 bg-red-50/50 focus:border-red-500"
                        : "border-gray-200 bg-white focus:border-blue-500"
                    }`}
                  >
                    <option value="">Chọn danh mục sản phẩm</option>
                    {category.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.category.name}
                      </option>
                    ))}
                  </select>
                )}
              </Field>

              <ErrorMessage
                name="categoryId"
                component="div"
                className="mt-2 text-sm text-red-500 flex items-center space-x-1"
              >
                {(msg) => (
                  <>
                    <FontAwesomeIcon
                      icon={faExclamationCircle}
                      className="w-4 h-4"
                    />
                    <span>{msg}</span>
                  </>
                )}
              </ErrorMessage>
            </div>

            {/* Brand */}
            <div>
              <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-3">
                <FontAwesomeIcon
                  icon={faBuilding}
                  className="w-4 h-4 text-purple-500"
                />
                <span>Thương hiệu</span>
                <span className="text-xs text-gray-400">(tùy chọn)</span>
              </label>

              <Field name="brandId">
                {({ field, form, meta }) => (
                  <select
                    {...field}
                    onChange={(e) => {
                      const value =
                        e.target.value === "" ? "" : parseInt(e.target.value);
                      form.setFieldValue("brandId", value);
                    }}
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none ${
                      meta.error && meta.touched
                        ? "border-red-300 bg-red-50/50 focus:border-red-500"
                        : "border-gray-200 bg-gray-50/30 focus:border-blue-500 focus:bg-white"
                    }`}
                  >
                    <option value="">Chọn thương hiệu</option>
                    {brand.map((brand) => (
                      <option key={brand.brandId} value={brand.brandId}>
                        {brand.brandName}
                      </option>
                    ))}
                  </select>
                )}
              </Field>
            </div>

            {/* Description */}
            <div className="lg:col-span-2">
              <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-3">
                <FontAwesomeIcon
                  icon={faFileLines}
                  className="w-4 h-4 text-orange-500"
                />
                <span>Mô tả sản phẩm</span>
              </label>
              <Field
                name="description"
                as="textarea"
                rows={4}
                placeholder="Nhập mô tả chi tiết về sản phẩm, tính năng đặc biệt, thông số kỹ thuật..."
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50/30 transition-all duration-200 focus:outline-none focus:border-blue-500 focus:bg-white resize-none"
              />
              <div className="flex justify-between items-center mt-2 text-xs text-gray-400">
                <span>
                  Mô tả chi tiết giúp khách hàng hiểu rõ hơn về sản phẩm
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BasicInfoSection;
