import { validationType, validationRequired } from "./validationFunc.js";

export function validation(schema, data) {
  const schemaNow = Object.entries(schema);

  for (const [key, value] of schemaNow) {
    if (typeof data[key] === "object") {
      if (!validation(value, data[key])) {
        return false;
      }
    } else {
      const isMatch = [
        validationType(data[key], value),
        validationRequired(data[key], value),
      ].every(validationFunc);
      if (!isMatch) {
        return false;
      }
    }
  }

  return true;
}

function validationFunc(Func) {
  return Func;
}
