import * as httprequest from "~/utils/httprequest";

export const Getcomment = async (idvideo) => {
  try {
    const resuilt = await httprequest.lay(`comment/video_id=${idvideo}`);
    return resuilt;
  } catch (err) {
    console.log(err);
  }
};
