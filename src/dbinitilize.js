import axios from "axios";
import models from "./modules/allmodules.js";

const getUrl = (str) => `https://jsonplaceholder.typicode.com/${str}`;

export default async () => {
  const promis = Object.entries(models).map(async ([path, model]) => {
    const { data } = await axios.get(getUrl(path));

    const promises = data.map((item) => model.create(item));

    return Promise.all(promises);
  });

  return Promise.all(promis);
};
