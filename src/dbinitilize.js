import axios from "axios";
import mongoose from "mongoose";
import models from "./modules/allmodules.js";

const getUrl = (str) => `https://jsonplaceholder.typicode.com/${str}`;

export default async () => {
  const promis = Object.entries(models).map(async ([path, model]) => {
    const { data } = await axios.get(getUrl(path));

    const promises = data.map(async ({ id, ...item }) => {
      const existmodel = await model.findById(id).exec();
      if (!existmodel) {
        await model.create({ ...item, _id: id });
      }
    });

    return Promise.all(promises);
  });

  return Promise.all(promis);
};
