function validationType(schema, data) {
  for (const [key, value] of Object.entries(schema)) {
    if (
      data[key] === schema.key &&
      typeof data[key] !== "object" &&
      schema[key].type !== typeof data[key]
    ) {
      return false;
    } else if (typeof data[key] === "object") {
      if (true !== validationType(schema.data[key], data[key])) {
        return false;
      }
    }
  }
  return true;
}
export default validationType();
