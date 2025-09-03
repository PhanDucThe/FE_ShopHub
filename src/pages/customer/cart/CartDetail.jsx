import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPlus,
  faXmark,
  faArrowLeft,
  faGift,
  faMapMarkerAlt,
  faTruck,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const CartDetailPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Bộ nhớ/ Ram Desktop Kingston Fury Beast 16GB (1x16GB) DDR4 3200MHz",
      image: "/api/placeholder/100/100",
      price: 1690000,
      originalPrice: 1990000,
      quantity: 1,
      variant: "1 x 16GB, Đen",
      inStock: true,
      promotion: "Giảm 15%",
    },
    {
      id: 2,
      name: "Máy tính xách tay/ Laptop LG Gram 14T90S-G AH55A5 ( Ultra 5 125H)",
      image: "/api/placeholder/100/100",
      price: 26490000,
      originalPrice: 28990000,
      quantity: 1,
      variant: "Đen",
      inStock: true,
      promotion: "Giảm 2.500.000đ",
    },
    {
      id: 3,
      name: "1x Túi đeo lưng/ Balo laptop Targus 15.6 TSB883",
      image: "/api/placeholder/100/100",
      price: 48770000,
      originalPrice: null,
      quantity: 1,
      variant: "1 sản phẩm",
      inStock: false,
      promotion: null,
    },
  ]);

  const [selectedItems, setSelectedItems] = useState([1, 2, 3]);
  const [promoCode, setPromoCode] = useState("");

  const updateQuantity = (id, change) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
    setSelectedItems((selected) => selected.filter((itemId) => itemId !== id));
  };

  const toggleSelectItem = (id) => {
    setSelectedItems((selected) =>
      selected.includes(id)
        ? selected.filter((itemId) => itemId !== id)
        : [...selected, id]
    );
  };

  const selectAllItems = () => {
    setSelectedItems(cartItems.map((item) => item.id));
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN").format(price) + "đ";
  };

  const selectedCartItems = cartItems.filter((item) =>
    selectedItems.includes(item.id)
  );
  const totalPrice = selectedCartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalOriginalPrice = selectedCartItems.reduce(
    (sum, item) => sum + (item.originalPrice || item.price) * item.quantity,
    0
  );
  const totalDiscount = totalOriginalPrice - totalPrice;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
              <FontAwesomeIcon icon={faArrowLeft} className="w-5 h-5" />
              <span>Tiếp tục mua sắm</span>
            </button>
            <div className="h-6 w-px bg-gray-300"></div>
            <h1 className="text-xl font-semibold text-gray-800">
              Giỏ hàng của bạn
            </h1>
            <span className="bg-red-500 text-white text-sm px-2 py-1 rounded-full">
              {cartItems.length}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {/* Select All */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedItems.length === cartItems.length}
                    onChange={selectAllItems}
                    className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  />
                  <span className="font-medium text-gray-800">
                    Chọn tất cả ({cartItems.length} sản phẩm)
                  </span>
                </label>
                <button className="text-red-500 hover:text-red-700 transition-colors text-sm">
                  Xóa
                </button>
              </div>
            </div>

            {/* Cart Items List */}
            <div className="space-y-3">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg p-4 shadow-sm"
                >
                  <div className="flex gap-4">
                    {/* Checkbox */}
                    <div className="flex items-start pt-2">
                      <input
                        type="checkbox"
                        checked={selectedItems.includes(item.id)}
                        onChange={() => toggleSelectItem(item.id)}
                        className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                      />
                    </div>

                    {/* Product Image */}
                    <div className="w-20 h-20 bg-gray-100 rounded-lg flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1">
                      {/* Product Name and Remove Button */}
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-medium text-gray-800 mb-1 leading-tight">
                            {item.name}
                          </h3>
                          <p className="text-sm text-gray-500 mb-1">
                            {item.variant}
                          </p>
                          {item.promotion && (
                            <span className="inline-block bg-red-100 text-red-600 text-xs px-2 py-1 rounded">
                              {item.promotion}
                            </span>
                          )}
                          {!item.inStock && (
                            <p className="text-red-500 text-sm mt-1">
                              Hết hàng
                            </p>
                          )}
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors p-1"
                        >
                          <FontAwesomeIcon icon={faXmark} className="w-5 h-5" />
                        </button>
                      </div>

                      {/* Price, Quantity, Total Row */}
                      <div className="grid grid-cols-3 gap-4 items-center">
                        {/* Đơn giá (Unit Price) */}
                        <div className="text-center">
                          <p className="text-xs text-gray-500 mb-1">Đơn giá</p>
                          <div className="flex flex-col items-center">
                            <span className="font-semibold text-red-600">
                              {formatPrice(item.price)}
                            </span>
                            {item.originalPrice && (
                              <span className="text-gray-400 text-sm line-through">
                                {formatPrice(item.originalPrice)}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Số lượng (Quantity) */}
                        <div className="text-center">
                          <p className="text-xs text-gray-500 mb-1">Số lượng</p>
                          <div className="flex items-center border rounded-lg justify-center">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              disabled={item.quantity <= 1}
                              className="p-1.5 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              <FontAwesomeIcon
                                icon={faMinus}
                                className="w-3 h-3"
                              />
                            </button>
                            <span className="px-3 py-1.5 border-x text-center min-w-[50px] text-sm">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-1.5 hover:bg-gray-100"
                            >
                              <FontAwesomeIcon
                                icon={faPlus}
                                className="w-3 h-3"
                              />
                            </button>
                          </div>
                        </div>

                        {/* Thành tiền (Total Price) */}
                        <div className="text-center">
                          <p className="text-xs text-gray-500 mb-1">
                            Thành tiền
                          </p>
                          <div className="flex flex-col items-center">
                            <span className="font-bold text-red-600 text-lg">
                              {formatPrice(item.price * item.quantity)}
                            </span>
                            {item.originalPrice && (
                              <span className="text-gray-400 text-sm line-through">
                                {formatPrice(
                                  item.originalPrice * item.quantity
                                )}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Delivery Info */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <FontAwesomeIcon
                  icon={faTruck}
                  className="w-5 h-5 text-blue-600"
                />
                <span className="font-medium text-gray-800">
                  Thông tin giao hàng
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="w-4 h-4 text-gray-500"
                  />
                  <span className="text-gray-600">Giao hàng đến:</span>
                  <span className="font-medium">Hồ Chí Minh</span>
                  <button className="text-blue-600 hover:text-blue-700">
                    Thay đổi
                  </button>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <FontAwesomeIcon
                    icon={faClock}
                    className="w-4 h-4 text-gray-500"
                  />
                  <span className="text-gray-600">Dự kiến giao:</span>
                  <span className="font-medium text-green-600">
                    Từ 1-3 ngày làm việc
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-4">
            {/* Promo Code */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <FontAwesomeIcon
                  icon={faGift}
                  className="w-5 h-5 text-blue-600"
                />
                <span className="font-medium text-gray-800">Mã giảm giá</span>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Nhập mã giảm giá"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Áp dụng
                </button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-lg p-4 shadow-sm sticky top-6">
              <h3 className="font-semibold text-gray-800 mb-4">
                Tóm tắt đơn hàng
              </h3>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">
                    Tạm tính ({selectedItems.length} sản phẩm):
                  </span>
                  <span className="font-medium">
                    {formatPrice(totalOriginalPrice)}
                  </span>
                </div>
                {totalDiscount > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Giảm giá:</span>
                    <span className="font-medium text-red-600">
                      -{formatPrice(totalDiscount)}
                    </span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Phí vận chuyển:</span>
                  <span className="font-medium text-green-600">Miễn phí</span>
                </div>
                <hr className="my-3" />
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-800">
                    Tổng cộng:
                  </span>
                  <span className="font-bold text-red-600 text-xl">
                    {formatPrice(totalPrice)}
                  </span>
                </div>
              </div>

              <button
                disabled={selectedItems.length === 0}
                className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Mua hàng ({selectedItems.length})
              </button>

              <div className="mt-3 text-center">
                <button className="text-blue-600 hover:text-blue-700 text-sm transition-colors">
                  Tiếp tục mua sắm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetailPage;
