import mongoose from "mongoose";

const comment = new mongoose.Schema({
  _id: { type: Number, required: true },
  post: { type: mongoose.Schema.Types.Number, ref: "Post" },
  name: { type: String, required: true },
  email: { type: String, required: true },
  body: { type: String, required: true },
});
export default mongoose.model("Comment", comment);
