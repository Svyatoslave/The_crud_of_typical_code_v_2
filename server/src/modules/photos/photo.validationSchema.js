const photoValidationSchema = {
  albumId: { type: "number", required: true },
  title: { type: "string", required: true },
  url: { type: "string", required: true },
  thumbnailUrl: { type: "string", required: true },
};

export default photoValidationSchema;
