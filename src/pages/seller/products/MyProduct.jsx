import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faFilter,
  faSyncAlt,
  faEdit,
  faTrashAlt,
  faEye,
  faPlus,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../../../components/ui/table";
import { Checkbox } from "../../../components/ui/checkbox";
import { Input } from "../../../components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../../../components/ui/select";
import { Button } from "../../../components/ui/button";
import { Badge } from "../../../components/ui/badge";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
} from "../../../components/ui/pagination";

const ProductListPage = () => {
  // Dữ liệu giả
  const [products] = useState([
    {
      id: 1,
      name: "iPhone 13 Pro Max",
      sku: "IP13PM-128GB",
      category: "Điện thoại",
      price: 27990000,
      stock: 15,
      sold: 42,
      status: "active",
      createdAt: "2023-05-15",
    },
    {
      id: 2,
      name: "iPhone 15 Pro Max",
      sku: "IP15PM-128GB",
      category: "Điện thoại",
      price: 27990000,
      stock: 15,
      sold: 42,
      status: "unactive",
      createdAt: "2023-05-15",
    },
    // Thêm các sản phẩm khác...
  ]);

  // State cho tìm kiếm và lọc
  const [searchParams, setSearchParams] = useState({
    keyword: "",
    category: "",
    status: "",
    priceRange: "",
    dateRange: "",
  });

  // State cho checkbox
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  // Phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  // Xử lý tìm kiếm và lọc
  const filteredProducts = products.filter((product) => {
    const matchesKeyword =
      product.name.toLowerCase().includes(searchParams.keyword.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchParams.keyword.toLowerCase());

    const matchesCategory =
      !searchParams.category || product.category === searchParams.category;

    const matchesStatus =
      !searchParams.status || product.status === searchParams.status;

    // Thêm các điều kiện lọc khác nếu cần

    return matchesKeyword && matchesCategory && matchesStatus;
  });

  // Phân trang
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Xử lý checkbox
  const toggleProductSelection = (productId) => {
    setSelectedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(currentProducts.map((product) => product.id));
    }
    setSelectAll(!selectAll);
  };

  // Định dạng giá
  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

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
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
            </div>
            <Input
              placeholder="Tìm kiếm..."
              className="pl-10"
              value={searchParams.keyword}
              onChange={(e) =>
                setSearchParams({
                  ...searchParams,
                  keyword: e.target.value,
                })
              }
            />
          </div>

          <Select
            value={searchParams.category}
            onValueChange={(value) =>
              setSearchParams({
                ...searchParams,
                category: value,
              })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Tất cả danh mục" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tất cả danh mục</SelectItem>
              <SelectItem value="Điện thoại">Điện thoại</SelectItem>
              <SelectItem value="Laptop">Laptop</SelectItem>
              {/* Thêm danh mục khác */}
            </SelectContent>
          </Select>

          <Select
            value={searchParams.status}
            onValueChange={(value) =>
              setSearchParams({
                ...searchParams,
                status: value,
              })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Tất cả trạng thái" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tất cả trạng thái</SelectItem>
              <SelectItem value="active">Đang bán</SelectItem>
              <SelectItem value="inactive">Ngừng bán</SelectItem>
            </SelectContent>
          </Select>

          <Select
            value={searchParams.priceRange}
            onValueChange={(value) =>
              setSearchParams({
                ...searchParams,
                priceRange: value,
              })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Khoảng giá" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tất cả giá</SelectItem>
              <SelectItem value="0-10000000">Dưới 10 triệu</SelectItem>
              <SelectItem value="10000000-20000000">10-20 triệu</SelectItem>
              <SelectItem value="20000000-">Trên 20 triệu</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <FontAwesomeIcon icon={faFilter} />
              Lọc
            </Button>
            <Button variant="outline">
              <FontAwesomeIcon icon={faSyncAlt} />
            </Button>
          </div>
        </div>
      </div>
      {/* Bảng Sản Phẩm */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200 hover:bg-slate-100">
              <TableHead className="w-[50px] text-center py-4">
                <Checkbox
                  checked={selectAll}
                  onCheckedChange={toggleSelectAll}
                  className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                />
              </TableHead>
              <TableHead className="min-w-[200px] text-left font-semibold text-slate-700 text-sm uppercase tracking-wide">
                Tên Sản Phẩm
              </TableHead>
              <TableHead className="min-w-[120px] text-left font-semibold text-slate-700 text-sm uppercase tracking-wide">
                Mã SKU
              </TableHead>
              <TableHead className="min-w-[120px] text-left font-semibold text-slate-700 text-sm uppercase tracking-wide">
                Danh Mục
              </TableHead>
              <TableHead className="min-w-[120px] text-left font-semibold text-slate-700 text-sm uppercase tracking-wide">
                Giá
              </TableHead>
              <TableHead className="min-w-[100px] text-left font-semibold text-slate-700 text-sm uppercase tracking-wide">
                Tồn Kho
              </TableHead>
              <TableHead className="min-w-[100px] text-left font-semibold text-slate-700 text-sm uppercase tracking-wide">
                Đã Bán
              </TableHead>
              <TableHead className="min-w-[120px] text-left font-semibold text-slate-700 text-sm uppercase tracking-wide">
                Trạng Thái
              </TableHead>
              <TableHead className="min-w-[150px] text-left font-semibold text-slate-700 text-sm uppercase tracking-wide">
                Thao Tác
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentProducts.map((product) => (
              <TableRow key={product.id} className="hover:bg-gray-50">
                <TableCell className="text-center py-3">
                  <Checkbox
                    checked={selectedProducts.includes(product.id)}
                    onCheckedChange={() => toggleProductSelection(product.id)}
                  />
                </TableCell>
                <TableCell className="text-center py-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-gray-200 rounded-md"></div>
                    <span className="font-medium">{product.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-left py-3 whitespace-nowrap">
                  {product.sku}
                </TableCell>
                <TableCell className="text-left py-3 whitespace-nowrap">
                  {product.category}
                </TableCell>
                <TableCell className="text-left py-3 whitespace-nowrap">
                  {formatPrice(product.price)}
                </TableCell>
                <TableCell className="text-left py-3 whitespace-nowrap">
                  {product.stock}
                </TableCell>
                <TableCell className="text-left py-3 whitespace-nowrap">
                  {product.sold}
                </TableCell>
                <TableCell className="text-left py-3">
                  <Badge
                    variant="outline"
                    className={`whitespace-nowrap ${
                      product.status === "active"
                        ? "border-green-500 text-green-600 bg-green-50"
                        : "border-red-500 text-red-600 bg-red-50"
                    }`}
                  >
                    {product.status === "active" ? "Đang bán" : "Ngừng bán"}
                  </Badge>
                </TableCell>
                <TableCell className="text-left py-3">
                  <div className="flex gap-2 justify-start">
                    <button className="h-8 w-8 rounded-md flex items-center justify-center text-blue-600 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 group">
                      <FontAwesomeIcon
                        icon={faEye}
                        className="h-4 w-4 group-hover:scale-110 transition-transform"
                      />
                    </button>
                    <button className="h-8 w-8 rounded-md flex items-center justify-center text-green-600 hover:bg-green-50 hover:text-green-700 transition-all duration-200 group">
                      <FontAwesomeIcon
                        icon={faEdit}
                        className="h-4 w-4 group-hover:scale-110 transition-transform"
                      />
                    </button>
                    <button className="h-8 w-8 rounded-md flex items-center justify-center text-red-600 hover:bg-red-50 hover:text-red-700 transition-all duration-200 group">
                      <FontAwesomeIcon
                        icon={faTrashAlt}
                        className="h-4 w-4 group-hover:scale-110 transition-transform"
                      />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Phân trang */}
        <div className="p-4 border-t">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                />
              </PaginationItem>

              {Array.from({ length: totalPages }, (_, i) => (
                <PaginationItem key={i + 1}>
                  <PaginationLink
                    isActive={currentPage === i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
