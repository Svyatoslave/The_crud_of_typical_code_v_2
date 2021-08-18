const todoValidationSchema = {
  userId: { type: "number", required: true },
  title: { type: "string", required: true },
  completed: { type: "boolean", required: true },
};

export default todoValidationSchema;
