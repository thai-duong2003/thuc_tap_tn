import { lay } from "~/utils/httprequest";

export const Video = async ({ type, page }) => {
  try {
    const res = await lay("videos", {
      params: { type, page },
    });
    return res.data;
  } catch (err) {}
};
