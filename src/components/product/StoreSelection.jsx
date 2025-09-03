import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
const StoreSelection = ({ product }) => {
  const [selectedStore, setSelectedStore] = useState("Hồ Chí Minh");
  const [selectedDistrict, setSelectedDistrict] = useState("Quận/Huyện");
  return (
    <>
      <div className="mb-6">
        <h3 className="font-semibold mb-3 text-gray-900">
          Xem chi nhánh có hàng
        </h3>
        <div className="grid grid-cols-2 gap-3 mb-4">
          <select
            value={selectedStore}
            onChange={(e) => setSelectedStore(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 text-sm"
          >
            <option value="Hồ Chí Minh">Hồ Chí Minh</option>
            <option value="Hà Nội">Hà Nội</option>
            <option value="Đà Nẵng">Đà Nẵng</option>
          </select>
          <select
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 text-sm"
          >
            <option value="Quận/Huyện">Quận/Huyện</option>
            <option value="Quận 1">Quận 1</option>
            <option value="Quận 3">Quận 3</option>
            <option value="Quận 7">Quận 7</option>
          </select>
        </div>

        {/* Store List */}
        <div className="space-y-3">
          {product.stores.map((store, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-3">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {store.name}
                  </p>
                  <div className="flex items-center space-x-4 mt-1">
                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <FontAwesomeIcon icon={faPhone} className="text-xs" />
                      <span>{store.phone}</span>
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        store.status === "Còn hàng"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {store.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StoreSelection;
