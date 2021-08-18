const albumValidationSchema = {
  userId: { type: "number", required: true },
  title: { type: "string", required: true },
};
export default albumValidationSchema;
