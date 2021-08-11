import mongoose from "mongoose";

import autoIncrementModel from "../../common/mongoose/autoIncrement.js";
import { POST_NAME } from "../modelsName.js";

const comment = new mongoose.Schema({
  _id: { type: Number, required: false },
  post: { type: mongoose.Schema.Types.Number, ref: POST_NAME },
  name: { type: String, required: true },
  email: { type: String, required: true },
  body: { type: String, required: true },
});

autoIncrementModel(comment, "Comment");

export default mongoose.model("Comment", comment);
