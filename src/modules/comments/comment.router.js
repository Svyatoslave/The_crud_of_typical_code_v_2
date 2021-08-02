import Router from "express";
import commentsController from "./comments.controller.js";

const commentsRouter = new Router();

commentsRouter.post(`/comments`, commentsController.create);

commentsRouter.get(`/comments`, commentsController.getAll);

commentsRouter.get(`/comments/:id`, commentsController.getOne);

commentsRouter.put(`/comments/:id`, commentsController.update);

commentsRouter.delete(`/comments/:id`, commentsController.delete);

export default commentsRouter;
