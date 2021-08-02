import Router from "express";
import postsController from "./posts.controller.js";

const postsRouter = new Router();

postsRouter.post(`/posts`, postsController.create);

postsRouter.get(`/posts`, postsController.getAll);

postsRouter.get(`/posts/:id`, postsController.getOne);

postsRouter.put(`/posts/:id`, postsController.update);

postsRouter.delete(`/posts/:id`, postsController.delete);

export default postsRouter;
