import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faSave } from "@fortawesome/free-solid-svg-icons";

const FormActions = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-end pt-6">
      <button
        type="button"
        className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 flex items-center justify-center space-x-2"
      >
        <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
        <span>Hủy bỏ</span>
      </button>
      <button
        type="submit"
        className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-medium hover:from-blue-600 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
      >
        <FontAwesomeIcon icon={faSave} className="w-5 h-5" />
        <span>Lưu sản phẩm</span>
      </button>
    </div>
  );
};

export default FormActions;
