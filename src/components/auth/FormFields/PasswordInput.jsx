import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field, ErrorMessage } from "formik";
import { faEye, faEyeSlash, faLock } from "@fortawesome/free-solid-svg-icons";

const PasswordInput = ({ name, label, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div className="mb-1">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700 mb-1.5"
        >
          {label}
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FontAwesomeIcon icon={faLock} className="text-gray-500 w-4 h-4" />
          </div>
          <Field
            type={showPassword ? "text" : "password"}
            name={name}
            id={name}
            className="w-full pl-10 pr-12 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 shadow-sm hover:border-gray-400"
            placeholder={placeholder}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center hover:bg-gray-50 rounded-r-lg transition-colors duration-200"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className="text-gray-500 hover:text-gray-700 w-4 h-4"
            />
          </button>
        </div>
        <div className="min-h-[24px]">
          {" "}
          {/* Chiều cao tương đương với 1.5rem */}
          <ErrorMessage name={name}>
            {(error) => <span className="text-sm text-red-600">{error}</span>}
          </ErrorMessage>
        </div>
      </div>
    </>
  );
};

export default PasswordInput;
