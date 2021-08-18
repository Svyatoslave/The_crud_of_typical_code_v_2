const userValidationSchema = {
  name: { type: "string", required: true },
  username: { type: "string", required: true },
  email: { type: "string", required: true },
  address: {
    street: { type: "string", required: true },
    suite: { type: "string", required: true },
    city: { type: "string", required: true },
    zipcode: { type: "string", required: true },
    geo: {
      lat: { type: "string", required: true },
      lng: { type: "string", required: true },
    },
  },
  phone: { type: "string", required: true },
  website: { type: "string", required: true },
  company: {
    name: { type: "string", required: true },
    catchPhrase: { type: "string", required: true },
    bs: { type: "string", required: true },
  },
};

export default userValidationSchema;
