const commentValidationSchema = {
  postId: { type: "number" },
  name: { type: "string" },
  email: { type: "string" },
  body: { type: "string" },
};

export default commentValidationSchema;
