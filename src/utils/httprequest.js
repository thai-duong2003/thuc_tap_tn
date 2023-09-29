import axios from "axios";
const httprequest = axios.create({
  baseURL: "https://tiktok.fullstack.edu.vn/api/",
});

export const lay = async (apipath, options = {}) => {
  const response = await httprequest.get(apipath, options);
  return response.data;
};
export default httprequest;
