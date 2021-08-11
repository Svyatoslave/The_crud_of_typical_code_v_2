import mongoose from "mongoose";

function autoIncrementModel(model, name) {
  model.pre("save", async function (next) {
    const self = this;

    if (!self._id) {
      const { _id: lastId } = await mongoose
        .model(name, model)
        .findOne({}, {}, { sort: { _id: -1 } });
      self._id = lastId + 1;
    }
    next();
  });
}

export default autoIncrementModel;
