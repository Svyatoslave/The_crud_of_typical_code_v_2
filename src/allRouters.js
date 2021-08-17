import AlbumsRouter from "./modules/albums/album.router";
import CommentsRouter from "./modules/comments/comment.router";
import PhotosRouter from "./modules/photos/photo.router";
import PostsRouter from "./modules/posts/post.router";
import TodosRouter from "./modules/todos/todo.router";
import UsersRouter from "./modules/users/user.router";

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
