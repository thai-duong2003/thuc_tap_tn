import * as httprequest from "~/utils/httprequest";
export const getanvideo = async (idvideo) => {
  try {
    const resuilt = await httprequest.lay(`${idvideo}`);
    return resuilt[0];
  } catch (err) {
    console.log(err);
  }
};
