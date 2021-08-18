const commentValidationSchema = {
  postId: { type: "number", required: true },
  name: { type: "string", required: true },
  email: { type: "string", required: true },
  body: { type: "string", required: true },
};

export default commentValidationSchema;
