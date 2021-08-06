export const albumSchema = {
  _id: { type: "number" },
  user: { type: "number" },
  title: { type: "string" },
};

export const commentSchema = {
  _id: { type: "number" },
  post: { type: "number" },
  name: { type: "string" },
  email: { type: "string" },
  body: { type: "string" },
};

export const photoSchema = {
  _id: { type: "number" },
  album: { type: "number" },
  title: { type: "string" },
  url: { type: "string" },
  thumbnailUrl: { type: "string" },
};

export const postSchema = {
  _id: { type: "number" },
  user: { type: "number" },
  title: { type: "string" },
  body: { type: "string" },
};

export const todoSchema = {
  _id: { type: "number" },
  user: { type: "number" },
  title: { type: "string" },
  completed: { type: "boolean" },
};

export const userSchema = {
  id: { type: "number" },
  name: { type: "string" },
  username: { type: "string" },
  email: { type: "string" },
  address: {
    street: { type: "string" },
    suite: { type: "string" },
    city: { type: "string" },
    zipcode: { type: "string" },
    geo: {
      lat: { type: "string" },
      lng: { type: "string" },
    },
  },
  phone: { type: "string" },
  website: { type: "string" },
  company: {
    name: { type: "string" },
    catchPhrase: { type: "string" },
    bs: { type: "string" },
  },
};
