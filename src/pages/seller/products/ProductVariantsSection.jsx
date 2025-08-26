// 7. components/form/sections/ProductVariantsSection.jsx
import { Field, FieldArray, ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTableCells,
  faChevronUp,
  faChevronDown,
  faTrash,
  faHashtag,
  faBoxOpen,
  faFileLines,
  faDollarSign,
  faCog,
  faImage,
  faPlus,
  faTimes,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const formatPrice = (price) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
};

const ProductVariantsSection = ({
  expandedSections,
  toggleSection,
  attribute,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200/50 overflow-hidden transition-all duration-300 hover:shadow-md">
      <div
        className="flex items-center justify-between p-6 cursor-pointer bg-gradient-to-r from-emerald-50/50 to-teal-50/50 border-b border-gray-100"
        onClick={() => toggleSection("variants")}
      >
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
            <FontAwesomeIcon
              icon={faTableCells}
              className="w-6 h-6 text-white"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Phiên bản sản phẩm
            </h2>
            <p className="text-sm text-gray-500">
              Quản lý các biến thể của sản phẩm
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
            phiên bản
          </span>
          <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center transition-transform duration-200">
            {expandedSections.variants ? (
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

      {expandedSections.variants && (
        <div className="p-6 animate-in slide-in-from-top-2 duration-300">
          <FieldArray name="variants">
            {({ push, remove, form }) => (
              <div className="space-y-6">
                {form.values.variants.map((variant, index) => (
                  <div
                    key={index}
                    className="border-2 border-dashed border-gray-200 rounded-2xl p-6 bg-gradient-to-br from-gray-50/30 to-blue-50/20 hover:border-blue-300 transition-all duration-300"
                  >
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-medium text-sm">
                          {index + 1}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          Phiên bản #{index + 1}
                        </h3>
                      </div>
                      {form.values.variants.length > 1 && (
                        <button
                          type="button"
                          onClick={() => remove(index)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200"
                        >
                          <FontAwesomeIcon icon={faTrash} className="w-5 h-5" />
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      {/* SKU */}
                      <div>
                        <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-3">
                          <FontAwesomeIcon
                            icon={faHashtag}
                            className="w-4 h-4 text-blue-500"
                          />
                          <span>Mã SKU</span>
                          <FontAwesomeIcon
                            icon={faStar}
                            className="w-3 h-3 text-red-500 fill-red-500"
                          />
                        </label>
                        <Field name={`variants.${index}.skuCode`}>
                          {({ field, meta }) => (
                            <input
                              {...field}
                              type="text"
                              placeholder="VD: SKU12345"
                              className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none ${
                                meta.error && meta.touched
                                  ? "border-red-300 bg-red-50/50 focus:border-red-500"
                                  : "border-gray-200 bg-white focus:border-blue-500"
                              }`}
                            />
                          )}
                        </Field>
                        <ErrorMessage
                          name={`variants.${index}.skuCode`}
                          component="div"
                          className="mt-2 text-sm text-red-500"
                        />
                      </div>

                      {/* Stock */}
                      <div>
                        <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-3">
                          <FontAwesomeIcon
                            icon={faBoxOpen}
                            className="w-4 h-4 text-purple-500"
                          />
                          <span>Số lượng trong kho</span>
                          <FontAwesomeIcon
                            icon={faStar}
                            className="w-3 h-3 text-red-500 fill-red-500"
                          />
                        </label>
                        <Field name={`variants.${index}.stock`}>
                          {({ field, meta }) => (
                            <input
                              {...field}
                              type="number"
                              placeholder="100"
                              className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none ${
                                meta.error && meta.touched
                                  ? "border-red-300 bg-red-50/50 focus:border-red-500"
                                  : "border-gray-200 bg-white focus:border-blue-500"
                              }`}
                            />
                          )}
                        </Field>
                        <ErrorMessage
                          name={`variants.${index}.stock`}
                          component="div"
                          className="mt-2 text-sm text-red-500"
                        />
                      </div>

                      {/* Variant Name */}
                      <div>
                        <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-3">
                          <FontAwesomeIcon
                            icon={faFileLines}
                            className="w-4 h-4 text-blue-500"
                          />
                          <span>Tên chi tiết sản phẩm</span>
                          <FontAwesomeIcon
                            icon={faStar}
                            className="w-3 h-3 text-red-500 fill-red-500"
                          />
                        </label>
                        <Field name={`variants.${index}.variantName`}>
                          {({ field, meta }) => (
                            <input
                              {...field}
                              type="text"
                              placeholder="VD: iPhone 15 Pro Max 256GB Màu Đen - Chính hãng VN/A"
                              className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none ${
                                meta.error && meta.touched
                                  ? "border-red-300 bg-red-50/50 focus:border-red-500"
                                  : "border-gray-200 bg-white focus:border-blue-500"
                              }`}
                            />
                          )}
                        </Field>
                        <ErrorMessage
                          name={`variants.${index}.variantName`}
                          component="div"
                          className="mt-2 text-sm text-red-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      {/* Original Price */}
                      <div>
                        <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-3">
                          <FontAwesomeIcon
                            icon={faDollarSign}
                            className="w-4 h-4 text-green-500"
                          />
                          <span>Giá nhập (VNĐ)</span>
                          <FontAwesomeIcon
                            icon={faStar}
                            className="w-3 h-3 text-red-500 fill-red-500"
                          />
                        </label>
                        <Field name={`variants.${index}.originalPrice`}>
                          {({ field, meta, form }) => (
                            <>
                              <input
                                {...field}
                                type="number"
                                placeholder="100000"
                                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none ${
                                  meta.error && meta.touched
                                    ? "border-red-300 bg-red-50/50 focus:border-red-500"
                                    : "border-gray-200 bg-white focus:border-blue-500"
                                }`}
                                onChange={(e) => {
                                  const value =
                                    e.target.value === ""
                                      ? ""
                                      : Number(e.target.value);
                                  form.setFieldValue(field.name, value);
                                }}
                              />
                              {field.value && field.value !== 0 && (
                                <p className="mt-1 text-sm text-green-600 font-medium">
                                  {formatPrice(field.value)}
                                </p>
                              )}
                            </>
                          )}
                        </Field>
                        <ErrorMessage
                          name={`variants.${index}.originalPrice`}
                          component="div"
                          className="mt-2 text-sm text-red-500"
                        />
                      </div>

                      {/* Sale Price */}
                      <div>
                        <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-3">
                          <FontAwesomeIcon
                            icon={faDollarSign}
                            className="w-4 h-4 text-green-500"
                          />
                          <span>Giá bán (VNĐ)</span>
                          <FontAwesomeIcon
                            icon={faStar}
                            className="w-3 h-3 text-red-500 fill-red-500"
                          />
                        </label>
                        <Field name={`variants.${index}.salePrice`}>
                          {({ field, meta, form }) => (
                            <>
                              <input
                                {...field}
                                type="number"
                                placeholder="100000"
                                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none ${
                                  meta.error && meta.touched
                                    ? "border-red-300 bg-red-50/50 focus:border-red-500"
                                    : "border-gray-200 bg-white focus:border-blue-500"
                                }`}
                                onChange={(e) => {
                                  const value =
                                    e.target.value === ""
                                      ? ""
                                      : Number(e.target.value);
                                  form.setFieldValue(field.name, value);
                                }}
                              />
                              {field.value && field.value !== 0 && (
                                <p className="mt-1 text-sm text-green-600 font-medium">
                                  {formatPrice(field.value)}
                                </p>
                              )}
                            </>
                          )}
                        </Field>
                        <ErrorMessage
                          name={`variants.${index}.salePrice`}
                          component="div"
                          className="mt-2 text-sm text-red-500"
                        />
                      </div>
                    </div>

                    {/* Attributes */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-700 mb-4 flex items-center space-x-2">
                        <FontAwesomeIcon
                          icon={faCog}
                          className="w-4 h-4 text-indigo-500"
                        />
                        <span>Thuộc tính phiên bản</span>
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {attribute.map((attr) => (
                          <div key={attr.id}>
                            <label className="block text-sm font-medium text-gray-600 mb-2">
                              {attr.name}
                            </label>
                            <Field
                              name={`variants.${index}.attributeOptionIds`}
                            >
                              {({ field, form }) => (
                                <select
                                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white transition-all duration-200 focus:outline-none focus:border-blue-500"
                                  value={
                                    attr.attributes
                                      .find((option) =>
                                        field.value?.includes(option.id)
                                      )
                                      ?.id?.toString() || ""
                                  }
                                  onChange={(e) => {
                                    const selectedOptionId = parseInt(
                                      e.target.value
                                    );
                                    const currentIds = field.value || [];

                                    const filteredIds = currentIds.filter(
                                      (id) => {
                                        const belongsToCurrentAttribute =
                                          attr.attributes.find(
                                            (opt) => opt.id === id
                                          );
                                        return !belongsToCurrentAttribute;
                                      }
                                    );

                                    const newAttributeOptionIds =
                                      selectedOptionId
                                        ? [...filteredIds, selectedOptionId]
                                        : filteredIds;

                                    form.setFieldValue(
                                      field.name,
                                      newAttributeOptionIds
                                    );
                                  }}
                                >
                                  <option value="">Chọn {attr.name}</option>
                                  {attr.attributes.map((opt) => (
                                    <option key={opt.id} value={opt.id}>
                                      {opt.name}
                                    </option>
                                  ))}
                                </select>
                              )}
                            </Field>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Images */}
                    <div>
                      <label className="flex text-sm font-medium text-gray-700 mb-4 items-center space-x-2">
                        <FontAwesomeIcon
                          icon={faImage}
                          className="w-4 h-4 text-pink-500"
                        />
                        <span>Hình ảnh</span>
                        <FontAwesomeIcon
                          icon={faStar}
                          className="w-3 h-3 text-red-500 fill-red-500"
                        />
                      </label>
                      <Field name={`variants.${index}.images`}>
                        {({ field, form }) => (
                          <div className="flex flex-wrap gap-4">
                            {field.value?.map((img, imgIndex) => (
                              <div key={imgIndex} className="relative group">
                                <img
                                  src={img}
                                  alt={`Ảnh ${imgIndex + 1}`}
                                  className="w-20 h-20 object-cover rounded-xl border-2 border-gray-200"
                                />
                                <button
                                  type="button"
                                  className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                  onClick={() => {
                                    const newImages = [...(field.value || [])];
                                    newImages.splice(imgIndex, 1);
                                    form.setFieldValue(field.name, newImages);
                                  }}
                                >
                                  <FontAwesomeIcon
                                    icon={faTimes}
                                    className="w-3 h-3"
                                  />
                                </button>
                              </div>
                            ))}
                            <div className="w-20 h-20 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center bg-gray-50/50 hover:bg-blue-50/50 hover:border-blue-300 transition-all duration-200 cursor-pointer">
                              <input
                                type="file"
                                accept="image/*"
                                multiple
                                className="hidden"
                                id={`image-upload-${index}`}
                                onChange={async (e) => {
                                  const files = e.target.files;
                                  if (files) {
                                    const currentImages = field.value || [];
                                    const uploadPromises = Array.from(
                                      files
                                    ).map(async (file) => {
                                      const formData = new FormData();
                                      formData.append("file", file);
                                      formData.append(
                                        "upload_preset",
                                        "unsigned_upload"
                                      );

                                      const res = await axios.post(
                                        "https://api.cloudinary.com/v1_1/dxy81jyw2/image/upload",
                                        formData
                                      );
                                      return res.data.secure_url;
                                    });

                                    const newUrls = await Promise.all(
                                      uploadPromises
                                    );
                                    const newImages = [
                                      ...currentImages,
                                      ...newUrls,
                                    ];
                                    form.setFieldValue(field.name, newImages);
                                  }
                                }}
                              />
                              <label
                                htmlFor={`image-upload-${index}`}
                                className="cursor-pointer"
                              >
                                <FontAwesomeIcon
                                  icon={faImage}
                                  className="w-6 h-6 text-gray-400"
                                />
                              </label>
                            </div>
                          </div>
                        )}
                      </Field>
                      <ErrorMessage
                        name={`variants.${index}.images`}
                        component="div"
                        className="mt-2 text-sm text-red-500"
                      />
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={() =>
                    push({
                      skuCode: "",
                      originalPrice: 0,
                      salePrice: 0,
                      stock: 0,
                      variantName: "",
                      attributeOptionIds: [],
                      images: [],
                    })
                  }
                  className="w-full py-4 border-2 border-dashed border-gray-300 rounded-2xl text-gray-600 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <FontAwesomeIcon icon={faPlus} className="w-5 h-5" />
                  <span className="font-medium">Thêm phiên bản mới</span>
                </button>
              </div>
            )}
          </FieldArray>
        </div>
      )}
    </div>
  );
};

export default ProductVariantsSection;
