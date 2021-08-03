import mongoose from "mongoose";

const comment = new mongoose.Schema({
  postId: { type: Number, required: true },
  id: { type: mongoose.Schema.Types.ObjectId },
  name: { type: String, required: true },
  email: { type: String, required: true },
  body: { type: String, required: true },
});
export default mongoose.model("Comment", comment);
