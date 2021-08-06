import mongoose from "mongoose";

const album = new mongoose.Schema({
  _id: { type: Number, required: true },
  user: { type: mongoose.Schema.Types.Number, ref: "User" },
  title: { type: String, required: true },
});

export default mongoose.model("Album", album);
