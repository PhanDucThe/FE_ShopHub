import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEdit,
  faTrash,
  faChevronLeft,
  faChevronRight,
  faEllipsisH,
  faDownload,
  faCopy,
  faArchive,
  faStar,
  faChartLine,
  faExclamationTriangle,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

const ProductTable = ({ product }) => {
  // State cho checkbox
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  // State phân trang nâng cao
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [showItemsPerPageOptions] = useState([5, 10, 20, 50, 100]);

  // Format tiền tệ
  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  // Get stock status
  const getStockStatus = (stock) => {
    if (stock === 0) return { status: "out", label: "Hết hàng", color: "red" };
    if (stock < 10) return { status: "low", label: "Sắp hết", color: "orange" };
    return { status: "in", label: "Còn hàng", color: "green" };
  };

  // Phân trang - sử dụng trực tiếp mockProducts
  const totalItems = product.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = product.slice(startIndex, endIndex);

  // Xử lý checkbox
  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(currentProducts.map((p) => p.productId));
    }
    setSelectAll(!selectAll);
  };

  const toggleProductSelection = (productId) => {
    setSelectedProducts((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId);
      } else {
        return [...prev, productId];
      }
    });
  };

  // Pagination helpers
  const goToPage = (page) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const goToFirstPage = () => goToPage(1);
  const goToLastPage = () => goToPage(totalPages);
  const goToPreviousPage = () => goToPage(currentPage - 1);
  const goToNextPage = () => goToPage(currentPage + 1);

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    if (totalPages <= 1) return [1];

    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    // Always show first page
    rangeWithDots.push(1);

    // Calculate middle range
    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    // Add dots and middle range if needed
    if (currentPage - delta > 2) {
      rangeWithDots.push("...");
    }

    rangeWithDots.push(...range);

    // Add dots and last page if needed
    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...");
    }

    // Only add last page if it's different from first page
    if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    // Remove duplicates while preserving order
    const uniquePages = [];
    const seen = new Set();

    for (const page of rangeWithDots) {
      if (!seen.has(page)) {
        seen.add(page);
        uniquePages.push(page);
      }
    }

    return uniquePages;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header với search và bulk actions */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Quản lý sản phẩm
          </h2>
          <div className="flex items-center gap-2">
            {selectedProducts.length > 0 && (
              <>
                <button className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200">
                  <FontAwesomeIcon icon={faDownload} size={16} />
                  Xuất
                </button>
                <button className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700">
                  <FontAwesomeIcon icon={faCopy} size={16} />
                  Sao chép
                </button>
                <button className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-orange-700 bg-orange-100 border border-orange-300 rounded-lg hover:bg-orange-200">
                  <FontAwesomeIcon icon={faArchive} size={16} />
                  Lưu trữ
                </button>
                <button className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-red-700 bg-red-100 border border-red-300 rounded-lg hover:bg-red-200">
                  <FontAwesomeIcon icon={faTrash} size={16} />
                  Xóa
                </button>
              </>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-4">
            <span>
              Tổng: <strong>{totalItems}</strong> sản phẩm
            </span>
            {selectedProducts.length > 0 && (
              <span>
                Đã chọn: <strong>{selectedProducts.length}</strong>
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span>Hiển thị:</span>
            <select
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              {showItemsPerPageOptions.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
            <span>/ trang</span>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200">
              <th className="w-12 text-center py-4 px-4">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={toggleSelectAll}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
              </th>
              <th className="text-left py-4 px-4 font-semibold text-slate-700 text-sm uppercase tracking-wide w-48 min-w-[290px]">
                Sản phẩm
              </th>
              <th className="text-left py-4 px-4 font-semibold text-slate-700 text-sm uppercase tracking-wide">
                SKU
              </th>
              <th className="text-left py-4 px-4 font-semibold text-slate-700 text-sm uppercase tracking-wide">
                Danh mục
              </th>
              <th className="text-left py-4 px-4 font-semibold text-slate-700 text-sm uppercase tracking-wide">
                Giá
              </th>
              <th className="text-left py-4 px-4 font-semibold text-slate-700 text-sm uppercase tracking-wide">
                Tồn kho
              </th>
              <th className="text-left py-4 px-4 font-semibold text-slate-700 text-sm uppercase tracking-wide">
                Đã bán
              </th>
              <th className="text-left py-4 px-4 font-semibold text-slate-700 text-sm uppercase tracking-wide">
                Trạng thái
              </th>
              <th className="text-left py-4 px-4 font-semibold text-slate-700 text-sm uppercase tracking-wide">
                Thao tác
              </th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product) => {
              const stockStatus = getStockStatus(product.stock);
              return (
                <tr
                  key={product.productId}
                  className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                    selectedProducts.includes(product.productId)
                      ? "bg-blue-50"
                      : ""
                  }`}
                >
                  <td className="text-center py-4 px-4">
                    <input
                      type="checkbox"
                      checked={selectedProducts.includes(product.productId)}
                      onChange={() => toggleProductSelection(product.productId)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-lg flex items-center justify-center">
                        <img
                          src={product.productImagesMain}
                          className="rounded-sm"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-gray-900 mb-1 break-words leading-5">
                          {product.productName}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <FontAwesomeIcon
                            icon={faStar}
                            size={12}
                            className="text-yellow-400 flex-shrink-0"
                          />
                          <span>{product.reviews.rating}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm font-mono text-gray-600">
                    {product.skuCode}
                  </td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {product.categoryName}
                    </span>
                  </td>
                  <td className="py-4 px-4 font-semibold text-gray-900">
                    {formatPrice(product.price.salePrice)}
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                          stockStatus.color === "red"
                            ? "bg-red-100 text-red-800"
                            : stockStatus.color === "orange"
                            ? "bg-orange-100 text-orange-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {stockStatus.color === "red" && (
                          <FontAwesomeIcon
                            icon={faExclamationTriangle}
                            size={12}
                          />
                        )}
                        {stockStatus.color === "orange" && (
                          <FontAwesomeIcon
                            icon={faExclamationTriangle}
                            size={12}
                          />
                        )}
                        {stockStatus.color === "green" && (
                          <FontAwesomeIcon icon={faCheckCircle} size={12} />
                        )}
                        {product.stock}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon
                        icon={faChartLine}
                        size={12}
                        className="text-green-500"
                      />
                      <span className="font-medium">{product.sold}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        product.status === "active"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {product.status === "active" ? "Đang bán" : "Ngừng bán"}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-1">
                      <button className="p-2 rounded-lg text-blue-600 hover:bg-blue-50 hover:text-blue-700 transition-colors">
                        <FontAwesomeIcon
                          icon={faEye}
                          size={16}
                          className="hover:scale-110"
                        />
                      </button>
                      <button className="p-2 rounded-lg text-green-600 hover:bg-green-50 hover:text-green-700 transition-colors">
                        <FontAwesomeIcon
                          icon={faEdit}
                          size={16}
                          className="hover:scale-110"
                        />
                      </button>
                      <button className="p-2 rounded-lg text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors">
                        <FontAwesomeIcon
                          icon={faTrash}
                          size={16}
                          className="hover:scale-110"
                        />
                      </button>
                      <button className="p-2 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-700 transition-colors">
                        <FontAwesomeIcon
                          icon={faEllipsisH}
                          size={16}
                          className="hover:scale-110"
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Enhanced Pagination */}
      <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-700">
            Hiển thị <span className="font-medium">{startIndex + 1}</span> đến{" "}
            <span className="font-medium">
              {Math.min(endIndex, totalItems)}
            </span>{" "}
            trong <span className="font-medium">{totalItems}</span> kết quả
          </div>

          <div className="flex items-center gap-2">
            {/* First and Previous */}
            <button
              onClick={goToFirstPage}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <FontAwesomeIcon icon={faChevronLeft} size={16} />
            </button>
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <FontAwesomeIcon icon={faChevronLeft} size={16} />
            </button>

            {/* Page Numbers */}
            <div className="flex items-center gap-1">
              {getPageNumbers().map((pageNumber, index) => (
                <button
                  key={index}
                  onClick={() =>
                    typeof pageNumber === "number" ? goToPage(pageNumber) : null
                  }
                  disabled={pageNumber === "..."}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    pageNumber === currentPage
                      ? "bg-blue-600 text-white"
                      : pageNumber === "..."
                      ? "text-gray-400 cursor-default"
                      : "text-gray-700 hover:bg-gray-100 border border-gray-300"
                  }`}
                >
                  {pageNumber}
                </button>
              ))}
            </div>

            {/* Next and Last */}
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <FontAwesomeIcon icon={faChevronRight} size={16} />
            </button>
            <button
              onClick={goToLastPage}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <FontAwesomeIcon icon={faChevronRight} size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
