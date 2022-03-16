import axios from "axios";

export async function getApi(api, obj = {}) {
  try {
    return await axios.get(api, {
      params: [obj],
    });
  } catch (err) {
    console.log(err);
  }
}
