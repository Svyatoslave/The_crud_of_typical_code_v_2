import { validation } from "./validation";

function validationMiddlewar(Schema) {
  return function (req, res, next) {
    if (validation(Schema, req.body)) {
      next();
    } else {
      res.status(400).send("Bad request");
    }
  };
}
export default validationMiddlewar;
