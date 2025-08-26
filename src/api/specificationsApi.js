import axios from "axios";
import { API_BASE_URL } from "@/utils/constants";

export const specificationsApi = {
  getSpecifications: async () => {
    const res = await axios.get(`${API_BASE_URL}/v1/specifications`);
    return res.data;
  },
};
