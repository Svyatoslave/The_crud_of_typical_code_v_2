const todoValidationSchema = {
  userId: { type: "number" },
  title: { type: "string" },
  completed: { type: "boolean" },
};

export default todoValidationSchema;
