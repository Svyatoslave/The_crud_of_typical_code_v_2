const postValidationSchema = {
  userId: { type: "number", required: true },
  title: { type: "string", required: true },
  body: { type: "string", required: true },
};

export default postValidationSchema;
