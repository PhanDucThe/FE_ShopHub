import axios from "axios";
import { API_BASE_URL } from "@/utils/constants";

export const attributeApi = {
  getAllAttributeOption: async () => {
    const response = await axios.get(`${API_BASE_URL}/v1/attribute-options`);
    return response.data;
  },
};
