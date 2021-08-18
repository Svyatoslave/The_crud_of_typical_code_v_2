import Album from "./albums/album.model";
import Comment from "./comments/comment.model";
import Photo from "./photos/photo.model";
import Post from "./posts/post.model";
import Todo from "./todos/todo.model";
import User from "./users/user.model";

const models = {
  users: User,
  posts: Post,
  albums: Album,
  comments: Comment,
  photos: Photo,
  todos: Todo,
};

export default models;
