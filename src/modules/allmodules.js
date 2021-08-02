import Album from "./albums/album.model.js";
import Comment from "./comments/comment.model.js";
import Photo from "./photos/photo.model.js";
import Post from "./posts/post.model.js";
import Todo from "./todos/todo.model.js";
import User from "./users/user.model.js";

const models = {
  albums: Album,
  comments: Comment,
  photos: Photo,
  posts: Post,
  todos: Todo,
  users: User,
};

export default models;
