import axios from "axios";
import { API_BASE_URL } from "@/utils/constants";

export const brandApi = {
  getAllBrand: async () => {
    const response = await axios.get(`${API_BASE_URL}/v1/brands`);
    return response.data;
  },
};
