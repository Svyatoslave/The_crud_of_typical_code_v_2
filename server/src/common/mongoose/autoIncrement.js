import mongoose from "mongoose";
import lastIdModel from "./lastId";

function autoIncrementModel(model, name) {
  model.pre("save", async function (next) {
    const self = this;

    if (!self._id) {
      let lastdata = await lastIdModel.findOne({ modelName: name });

      if (lastdata) {
        self._id = lastdata.lastid + 1;

        await lastIdModel.findByIdAndUpdate(
          lastdata._id,
          {
            lastid: lastdata.lastid + 1,
          },
          { new: true }
        );
        return;
      } else {
        const { _id: newId } = await mongoose
          .model(name, model)
          .findOne({}, {}, { sort: { _id: -1 } });
        lastIdModel.create({ modelName: name, lastid: newId + 1 });
        self._id = newId + 1;
      }
    }
    next();
  });
}

export default autoIncrementModel;
