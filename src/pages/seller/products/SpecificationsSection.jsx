// 8. components/form/sections/SpecificationsSection.jsx
import { Field, FieldArray, ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faChevronUp,
  faChevronDown,
  faPlus,
  faTrash,
  faStar,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";

const SpecificationsSection = ({
  expandedSections,
  toggleSection,
  specifica,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200/50 overflow-hidden transition-all duration-300 hover:shadow-md">
      <div
        className="flex items-center justify-between p-6 cursor-pointer bg-gradient-to-r from-amber-50/50 to-orange-50/50 border-b border-gray-100"
        onClick={() => toggleSection("specs")}
      >
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
            <FontAwesomeIcon icon={faCog} className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Thông số kỹ thuật
            </h2>
            <p className="text-sm text-gray-500">
              Thêm các thông số chi tiết của sản phẩm
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Field name="specifications">
            {({ field }) => (
              <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
                {field.value?.length || 0} thông số
              </span>
            )}
          </Field>
          <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center transition-transform duration-200">
            {expandedSections.specs ? (
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

      {expandedSections.specs && (
        <div className="p-6 animate-in slide-in-from-top-2 duration-300">
          <FieldArray name="specifications">
            {({ push, remove, form }) => (
              <div className="space-y-4">
                {!form.values.specifications ||
                form.values.specifications.length === 0 ? (
                  <div className="text-center py-12 text-gray-500">
                    <FontAwesomeIcon
                      icon={faCog}
                      className="w-12 h-12 mx-auto mb-4 text-gray-300"
                    />
                    <p className="text-lg font-medium mb-2">
                      Chưa có thông số nào
                    </p>
                    <p className="text-sm">
                      Thêm thông số kỹ thuật để mô tả chi tiết sản phẩm
                    </p>
                  </div>
                ) : (
                  form.values.specifications.map((spec, index) => (
                    <div
                      key={index}
                      className="p-6 bg-gradient-to-r from-gray-50/50 to-blue-50/20 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Specification Dropdown */}
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-gray-700">
                            Thông số
                            <FontAwesomeIcon
                              icon={faStar}
                              className="w-3 h-3 text-red-500 fill-red-500 inline ml-1"
                            />
                          </label>
                          <Field name={`specifications.${index}.key`}>
                            {({ field, meta, form }) => (
                              <select
                                value={field.value || ""}
                                onChange={(e) => {
                                  const selectedSpec = specifica.find(
                                    (s) => s.id === parseInt(e.target.value)
                                  );

                                  // Only save key and value, not spec_id
                                  form.setFieldValue(
                                    `specifications.${index}`,
                                    {
                                      key: selectedSpec?.name || "",
                                      value: "",
                                    }
                                  );
                                }}
                                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none ${
                                  meta.error && meta.touched
                                    ? "border-red-300 bg-red-50/50 focus:border-red-500"
                                    : "border-gray-200 bg-white focus:border-blue-500"
                                }`}
                              >
                                <option value="">Chọn thông số</option>
                                {specifica.map((s) => (
                                  <option key={s.id} value={s.id}>
                                    {s.name}
                                  </option>
                                ))}
                              </select>
                            )}
                          </Field>
                          {/* Error message container with fixed height */}
                          <div className="h-5">
                            <ErrorMessage
                              name={`specifications.${index}.key`}
                              component="div"
                              className="text-sm text-red-500 flex items-center space-x-1"
                            >
                              {(msg) => (
                                <>
                                  <FontAwesomeIcon
                                    icon={faExclamationCircle}
                                    className="w-3 h-3 flex-shrink-0"
                                  />
                                  <span>{msg}</span>
                                </>
                              )}
                            </ErrorMessage>
                          </div>
                        </div>

                        {/* Value Input */}
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-gray-700">
                            Giá trị
                            <FontAwesomeIcon
                              icon={faStar}
                              className="w-3 h-3 text-red-500 fill-red-500 inline ml-1"
                            />
                          </label>
                          <Field name={`specifications.${index}.value`}>
                            {({ field, meta }) => (
                              <input
                                {...field}
                                type="text"
                                placeholder="Nhập giá trị thông số"
                                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none ${
                                  meta.error && meta.touched
                                    ? "border-red-300 bg-red-50/50 focus:border-red-500"
                                    : "border-gray-200 bg-white focus:border-blue-500"
                                }`}
                              />
                            )}
                          </Field>
                          {/* Error message container with fixed height */}
                          <div className="h-5">
                            <ErrorMessage
                              name={`specifications.${index}.value`}
                              component="div"
                              className="text-sm text-red-500 flex items-center space-x-1"
                            >
                              {(msg) => (
                                <>
                                  <FontAwesomeIcon
                                    icon={faExclamationCircle}
                                    className="w-3 h-3 flex-shrink-0"
                                  />
                                  <span>{msg}</span>
                                </>
                              )}
                            </ErrorMessage>
                          </div>
                        </div>
                      </div>

                      {/* Delete button */}
                      <div className="flex justify-end mt-4 pt-4 border-t border-gray-200/50">
                        <button
                          type="button"
                          onClick={() => remove(index)}
                          className="flex items-center space-x-2 px-4 py-2 text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200 group"
                        >
                          <FontAwesomeIcon
                            icon={faTrash}
                            className="w-4 h-4 group-hover:scale-110 transition-transform"
                          />
                          <span className="text-sm font-medium">
                            Xóa thông số
                          </span>
                        </button>
                      </div>
                    </div>
                  ))
                )}

                <button
                  type="button"
                  onClick={() => push({ key: "", value: "" })}
                  className="w-full py-4 border-2 border-dashed border-gray-300 rounded-2xl text-gray-600 hover:border-amber-400 hover:text-amber-600 hover:bg-amber-50/50 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <FontAwesomeIcon icon={faPlus} className="w-5 h-5" />
                  <span className="font-medium">Thêm thông số kỹ thuật</span>
                </button>
              </div>
            )}
          </FieldArray>
        </div>
      )}
    </div>
  );
};

export default SpecificationsSection;
