import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../../components/ui/button";

import ProductSearchForm from "@/components/forms/ProductSearchForm";
import ProductTable from "@/components/product/ProductTable ";
import { useEffect, useState } from "react";
import { productApi } from "@/api/productApi";

const ProductListPage = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchApiAllProduct = async () => {
      const response = await productApi.getAllProduct();
      setProduct(response.data);
    };
    fetchApiAllProduct();
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-6">
        <nav className="flex mb-4" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2">
            <li className="inline-flex items-center">
              <a
                href="/seller"
                className="text-sm font-medium hover:text-blue-600"
              >
                Dashboard
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="w-4 h-4 mx-1"
                />
                <a
                  href="/seller/products"
                  className="text-sm font-medium hover:text-blue-600"
                >
                  Sản phẩm
                </a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="w-4 h-4 mx-1"
                />
                <span className="text-sm font-medium text-gray-500">
                  Danh sách sản phẩm
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900 relative inline-block">
            <span className="relative z-10">Danh Sách Sản Phẩm</span>
            <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-100/70 -rotate-1 z-0"></span>
          </h1>

          <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] border-0">
            <FontAwesomeIcon icon={faPlus} className="mr-2 h-4 w-4" />
            Thêm Sản Phẩm
          </Button>
        </div>
      </div>
      {/* Form Tìm Kiếm Nâng Cao */}
      <ProductSearchForm />
      <br />
      {/* Bảng Sản Phẩm */}
      <ProductTable product={product} />
    </div>
  );
};

export default ProductListPage;
