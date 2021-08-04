import mongoose from "mongoose";
import Album from "../albums/album.model.js";

const photo = new mongoose.Schema({
  _id: { type: Number, required: true },
  albumId: { type: mongoose.Schema.Types.Number, ref: "Album" },
  title: { type: String, required: true },
  url: { type: String, required: true },
  thumbnailUrl: { type: String, required: true },
});
export default mongoose.model("Photo", photo);
