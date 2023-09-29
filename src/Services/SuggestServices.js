// import * as httprequest from "~/utils/httprequest";
import { lay } from "~/utils/httprequest";
export const Suggest = async ({ page, perpage }) => {
  try {
    const res = await lay("users/suggested", {
      params: { page, per_page: perpage },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
