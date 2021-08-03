import mongoose from "mongoose";

const album = new mongoose.Schema({
  _id: { type: Number, required: true },
  userId: { type: Number, required: true },
  title: { type: String, required: true },
});
export default mongoose.model("Album", album);
