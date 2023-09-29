import * as httprequest from "~/utils/httprequest";

export const getaUser = async (path) => {
  try {
    const res = await httprequest.lay(`users${path}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
