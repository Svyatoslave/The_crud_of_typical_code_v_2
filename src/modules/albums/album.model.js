import mongoose from "mongoose";

import autoIncrementModel from "../../common/mongoose/autoIncrement.js";

const ALBUM_NAME = "album";

const album = new mongoose.Schema({
  _id: { type: Number, required: false },
  user: { type: mongoose.Schema.Types.Number, ref: "User" },
  title: { type: String, required: true },
});

autoIncrementModel(album, ALBUM_NAME);

export { ALBUM_NAME };

export default mongoose.model(ALBUM_NAME, album);
