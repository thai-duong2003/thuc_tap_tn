import { lay } from "~/utils/httprequest";

export const Video = async ({ page }) => {
  try {
    const res = await lay("videos", {
      params: {  page },
    });
    return res.data;
  } catch (err) {}
};
