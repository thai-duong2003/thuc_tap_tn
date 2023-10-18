import axios from "axios";
export var IPHTTP = "http://localhost/";
const httprequest = axios.create({
  baseURL: `${IPHTTP}TIKTOK_API/public/api/`,
});

export const lay = async (apipath, options = {}) => {
  const response = await httprequest.get(apipath, options);
  return response.data;
};
export default httprequest;
