import AlbumsRouter from "./modules/albums/album.router.js";
import CommentsRouter from "./modules/comments/comment.router.js";
import PhotosRouter from "./modules/photos/photo.router.js";
import PostsRouter from "./modules/posts/post.router.js";
import TodosRouter from "./modules/todos/todo.router.js";
import UsersRouter from "./modules/users/user.router.js";

const routers = [
  AlbumsRouter,
  CommentsRouter,
  PhotosRouter,
  PostsRouter,
  TodosRouter,
  UsersRouter,
];

const routing = (app) => {
  routers.forEach((rout) => {
    app.use(rout);
  });
};

export default routing;
