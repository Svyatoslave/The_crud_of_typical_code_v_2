import Router from "express";
import todosController from "./todos.controller.js";

const todosRouter = new Router();
todosRouter.post(`/todos`, todosController.create);
todosRouter.get(`/todos`, todosController.getAll);
todosRouter.get(`/todos/:id`, todosController.getOne);
todosRouter.put(`/todos/:id`, todosController.update);
todosRouter.delete(`/todos/:id`, todosController.delete);

export default todosRouter;
