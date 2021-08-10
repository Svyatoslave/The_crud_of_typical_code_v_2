import mongoose from "mongoose";

import autoIncrementModel from "../../common/mongoose/autoIncrement.js";
import Album from "../albums/album.model.js";

const PHOTO_NAME = "photo";

const photo = new mongoose.Schema({
  _id: { type: Number, required: false },
  album: { type: mongoose.Schema.Types.Number, ref: "Album" },
  title: { type: String, required: true },
  url: { type: String, required: true },
  thumbnailUrl: { type: String, required: true },
});

autoIncrementModel(photo, PHOTO_NAME);

export { PHOTO_NAME };

export default mongoose.model(PHOTO_NAME, photo);
