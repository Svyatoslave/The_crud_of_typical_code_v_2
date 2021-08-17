import mongoose from "mongoose";

import autoIncrementModel from "../../common/mongoose/autoIncrement";
import { USER_NAME } from "../modelsName";
import Photo from "../photos/photo.model";

const album = new mongoose.Schema({
  _id: { type: Number, required: false },
  user: { type: mongoose.Schema.Types.Number, ref: USER_NAME },
  title: { type: String, required: true },
});

autoIncrementModel(album, "Album");

album.pre("deleteMany", async function (next) {
  const { _conditions: document } = this;
  await Photo.deleteMany({ user: document._id });
  next();
});

album.pre("deleteOne", async function (next) {
  const { _conditions: document } = this;
  await Photo.deleteMany({ album: document._id });
  next();
});

export default mongoose.model("Album", album);
