import mongoose from "mongoose";

import autoIncrementModel from "../../common/mongoose/autoIncrement.js";

const COMMENT_NAME = "comment";

const comment = new mongoose.Schema({
  _id: { type: Number, required: false },
  post: { type: mongoose.Schema.Types.Number, ref: "Post" },
  name: { type: String, required: true },
  email: { type: String, required: true },
  body: { type: String, required: true },
});

autoIncrementModel(comment, COMMENT_NAME);

export { COMMENT_NAME };

export default mongoose.model(COMMENT_NAME, comment);
