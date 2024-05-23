import { API } from "../utils/api";

const animeWeb = async (params) => {
  try {

    let url = `v4/anime`;
    if (params) {
      url += `?q=${params}&sfw`;
    }
    const res= await API.get(url)
    return res.data.data
  } catch (e) {
    console.log(e.message);
  }
};
export {animeWeb}