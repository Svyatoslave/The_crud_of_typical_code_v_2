import validationType from "./validationFunc.js";

export function validation(schema, data) {
  validationType(schema, data);
}
