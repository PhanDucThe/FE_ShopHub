import axios from "axios";
import { API_BASE_URL } from "../utils/constants";

export const productApi = {
  getProductTopDeal: async () => {
    const response = await axios.get(`${API_BASE_URL}/v1/product-top-deals`);
    return response.data; // Tra du lieu luon
  },
  getNewProduct: async () => {
    const response = await axios.get(`${API_BASE_URL}/v1/new-products`);
    return response.data;
  },
  getSmartPhoneAndTalet: async () => {
    const response = await axios.get(
      `${API_BASE_URL}/v1/products/category/dien-thoai-may-tinh-bang`
    );
    return response.data;
  },
  getLaptopAndPc: async () => {
    const response = await axios.get(
      `${API_BASE_URL}/v1/products/category/laptop-may-tinh-de-ban`
    );
    return response.data;
  },
  getAudioEquipment: async () => {
    const response = await axios.get(
      `${API_BASE_URL}/v1/products/category/thiet-bi-am-thanh`
    );
    return response.data;
  },
  getAllProduct: async () => {
    const response = await axios.get(`${API_BASE_URL}/v1/products`);
    return response.data;
  },
  getAppleWatch: async () => {
    const res = await axios.get(
      `${API_BASE_URL}/v1/products/category/thiet-bi-deo-thong-minh`
    );
    return res.data;
  },
  getCamera: async () => {
    const res = await axios.get(
      `${API_BASE_URL}/v1/products/category/may-anh-may-quay`
    );
    return res.data;
  },
};
