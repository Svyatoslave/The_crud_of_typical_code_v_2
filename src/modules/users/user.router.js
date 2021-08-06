import Router from "express";
import usersController from "./users.controller.js";

const usersRouter = new Router();

usersRouter.post(`/users`, usersController.create);
usersRouter.get(`/users`, usersController.getAll);
usersRouter.get(`/users/:id`, usersController.getOne);
usersRouter.put(`/users/:id`, usersController.update);
usersRouter.delete(`/users/:id`, usersController.delete);

export default usersRouter;
