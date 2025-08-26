import { ErrorMessage, Field } from "formik";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Gồm các trường input dạng text

const TextInput = ({ icon, name, label, placeholder, type = "text" }) => {
  return (
    <>
      <div className="mb-1">
        {label && (
          <label
            htmlFor={name}
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            {label}
          </label>
        )}

        <div className="relative">
          {icon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FontAwesomeIcon icon={icon} className="text-gray-500 w-4 h-4" />
            </div>
          )}
          <Field
            type={type}
            name={name}
            id={name}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 shadow-sm hover:border-gray-400"
            placeholder={placeholder}
          />
        </div>
        <div className="min-h-[24px]">
          {" "}
          <ErrorMessage name={name}>
            {(error) => <span className="text-sm text-red-600">{error}</span>}
          </ErrorMessage>
        </div>
      </div>
    </>
  );
};

export default TextInput;
