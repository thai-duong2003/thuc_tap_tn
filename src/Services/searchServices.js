import * as httprequest from "~/utils/httprequest";
export const Search = async (q, type = "less") => {
  try {
    const res = await httprequest.lay("users/search", {
      params: { q, type },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
