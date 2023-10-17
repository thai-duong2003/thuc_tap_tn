import * as httprequest from "~/utils/httprequest";

export const Getcomment = async (idvideo) => {
  try {
    const resuilt = await httprequest.lay(`comment/video_id=${idvideo}`);
    return resuilt;
  } catch (err) {
    console.log(err);
  }
};

// method: "post",
// headers: {
//   "access-control-allow-origin": "*",
//   "Access-Control-Allow-Headers": "Content-Type, Authorization",
//   "Access-Control-Allow-Methods": "*",
// },
// url: "http://192.168.102.230/TIKTOK_API/public/api/users/login",
// data: {
//   email: "thaiq9577@gmail.com",
//   password: 1234567,
// },
