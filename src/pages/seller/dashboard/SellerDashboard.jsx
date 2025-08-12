import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SellerSidebar from "@/components/common/SellerSidebar";
import AddProduct from "../products/AddProduct";
import MyProduct from "../products/MyProduct";

const SellerDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Dữ liệu danh mục (categories)
  const categoriesData = [
    { id: 1, name: "Điện thoại di động" },
    { id: 2, name: "Laptop" },
    { id: 3, name: "Tai nghe" },
    { id: 4, name: "Đồng hồ thông minh" },
    { id: 5, name: "Phụ kiện điện tử" },
  ];

  // Dữ liệu thương hiệu (brands)
  const brandsData = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Samsung" },
    { id: 3, name: "Xiaomi" },
    { id: 4, name: "Oppo" },
    { id: 5, name: "Sony" },
    { id: 6, name: "Dell" },
    { id: 7, name: "HP" },
  ];

  // Dữ liệu thuộc tính (attributes) và tùy chọn (options)
  const attributesData = [
    {
      id: 1,
      name: "Màu sắc",
      options: [
        { id: 1, value: "Đen" },
        { id: 2, value: "Trắng" },
        { id: 3, value: "Xanh navy" },
        { id: 4, value: "Hồng" },
        { id: 5, value: "Vàng gold" },
      ],
    },
    {
      id: 2,
      name: "Dung lượng",
      options: [
        { id: 6, value: "64GB" },
        { id: 7, value: "128GB" },
        { id: 8, value: "256GB" },
        { id: 9, value: "512GB" },
        { id: 10, value: "1TB" },
      ],
    },
    {
      id: 3,
      name: "Kích thước",
      options: [
        { id: 11, value: "S" },
        { id: 12, value: "M" },
        { id: 13, value: "L" },
        { id: 14, value: "XL" },
      ],
    },
    {
      id: 4,
      name: "Loại kết nối",
      options: [
        { id: 15, value: "Bluetooth" },
        { id: 16, value: "Có dây" },
        { id: 17, value: "USB" },
      ],
    },
  ];

  // Dữ liệu thông số kỹ thuật (specifications)
  const specificationsData = [
    { id: 1, name: "Màn hình" },
    { id: 2, name: "CPU" },
    { id: 3, name: "RAM" },
    { id: 4, name: "Hệ điều hành" },
    { id: 5, name: "Pin" },
    { id: 6, name: "Khối lượng" },
    { id: 7, name: "Chống nước" },
    { id: 8, name: "Kích thước" },
    { id: 9, name: "Tần số đáp ứng" },
    { id: 10, name: "Độ phân giải" },
  ];

  // Dữ liệu hình ảnh mẫu (có thể dùng cho variant images)
  const sampleImageUrls = [
    "https://example.com/images/product1.jpg",
    "https://example.com/images/product2.jpg",
    "https://example.com/images/product3.jpg",
    "https://example.com/images/product4.jpg",
  ];

  const handleSubmit = () => {
    console.log("Duc Teh");
  };

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold text-blue-600">SellerHub</h1>
            <div className="relative w-64">
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <Input
                type="search"
                placeholder="Tìm kiếm..."
                className="pl-10 bg-gray-100 border-none focus-visible:ring-1"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <FontAwesomeIcon icon={faBell} className="text-gray-600" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
            </Button>

            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>NB</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">Người bán</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <SellerSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Main Panel */}
        <main className="flex-1 p-6">
          {activeTab === "dashboard" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Tổng quan cửa hàng
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Cập nhật lúc: {new Date().toLocaleString()}
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="text-blue-600 border-blue-200"
                >
                  Xuất báo cáo
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-blue-600">
                      Tổng doanh thu
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">25.450.000đ</p>
                    <p className="text-xs text-green-500 mt-1">
                      ↑ 12% so với tháng trước
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-green-600">
                      Đơn hàng mới
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">12</p>
                    <p className="text-xs text-green-500 mt-1">
                      ↑ 3 đơn so với hôm qua
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-purple-600">
                      Sản phẩm đang bán
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">45</p>
                    <p className="text-xs text-gray-500 mt-1">
                      5 sản phẩm sắp hết hàng
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg font-medium">
                    Biểu đồ doanh thu 7 ngày gần đây
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
                    <p>Biểu đồ sẽ hiển thị ở đây</p>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg font-medium">
                      Sản phẩm bán chạy
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="flex items-center">
                          <div className="h-10 w-10 bg-gray-200 rounded-md mr-3"></div>
                          <div className="flex-1">
                            <p className="font-medium">Tên sản phẩm {item}</p>
                            <p className="text-sm text-gray-500">
                              Đã bán: {item * 15}
                            </p>
                          </div>
                          <span className="text-blue-600 font-medium">
                            {item * 1.5}tr
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg font-medium">
                      Đơn hàng gần đây
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[1, 2, 3].map((item) => (
                        <div
                          key={item}
                          className="flex items-center justify-between"
                        >
                          <div>
                            <p className="font-medium">ĐH-00{item * 123}</p>
                            <p className="text-sm text-gray-500">
                              {item} sản phẩm
                            </p>
                          </div>
                          <span className="text-green-600 font-medium">
                            {item * 0.5}tr
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeTab === "add-product" && (
            <AddProduct
              categories={categoriesData}
              brands={brandsData}
              attributes={attributesData}
              specifications={specificationsData}
              onSubmit={handleSubmit}
            />
          )}

          {activeTab === "product-list" && <MyProduct />}

          {activeTab === "products" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Quản lý sản phẩm
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Tổng cộng 45 sản phẩm
                  </p>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Thêm sản phẩm
                </Button>
              </div>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-center h-64">
                    <p className="text-gray-400">
                      Danh sách sản phẩm sẽ hiển thị ở đây
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "orders" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Quản lý đơn hàng
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    12 đơn hàng chờ xử lý
                  </p>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline">Lọc</Button>
                  <Button variant="outline">Xuất Excel</Button>
                </div>
              </div>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-center h-64">
                    <p className="text-gray-400">
                      Danh sách đơn hàng sẽ hiển thị ở đây
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default SellerDashboard;
