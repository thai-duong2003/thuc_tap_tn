import * as httprequest from "~/utils/httprequest";
export const Search = async (value) => {
  try {
    const res = await httprequest.lay(`users/search/${value}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};
