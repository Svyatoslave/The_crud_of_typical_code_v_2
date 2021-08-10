const photoValidationSchema = {
  albumId: { type: "number" },
  title: { type: "string" },
  url: { type: "string" },
  thumbnailUrl: { type: "string" },
};

export default photoValidationSchema;
