import axios from "axios";
import { API_BASE_URL } from "@/utils/constants";

export const categoryApi = {
  getCategoryParent: async () => {
    const response = await axios.get(`${API_BASE_URL}/v1/categories`);
    return response.data;
  },
};
