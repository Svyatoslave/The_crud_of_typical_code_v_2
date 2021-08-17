import mongoose from "mongoose";

const lastIdModel = new mongoose.Schema({
  modelName: { type: String, required: true },
  lastid: { type: Number, required: true },
});
export default mongoose.model("LastIdModel", lastIdModel);
