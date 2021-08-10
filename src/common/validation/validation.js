import validationType from "./validationFunc.js";

export function validation(schema, data) {
  const schemaNow = Object.entries(schema);

  for (const [key, value] of schemaNow) {
    if (typeof data[key] === "object") {
      if (!validation(value, data[key])) {
        return false;
      }
    } else if (!validationType(data[key], value)) {
      return false;
    }
  }

  return true;
}
