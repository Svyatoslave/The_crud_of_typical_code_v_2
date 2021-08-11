import mongoose from "mongoose";

import autoIncrementModel from "../../common/mongoose/autoIncrement.js";
import { ALBUM_NAME } from "../modelsName.js";

const photo = new mongoose.Schema({
  _id: { type: Number, required: false },
  album: { type: mongoose.Schema.Types.Number, ref: ALBUM_NAME },
  title: { type: String, required: true },
  url: { type: String, required: true },
  thumbnailUrl: { type: String, required: true },
});

autoIncrementModel(photo, "Photo");

export default mongoose.model("Photo", photo);
