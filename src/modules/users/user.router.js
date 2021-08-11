import Router from "express";

import usersController from "./users.controller.js";
import userValidationSchema from "./user.validationSchema.js";
import validationMiddleware from "../../common/validation/validationMiddlewar.js";

const usersRouter = new Router();

usersRouter.post(
  `/users`,
  validationMiddleware(userValidationSchema),
  usersController.create
);
usersRouter.get(`/users`, usersController.getAll);
usersRouter.get(`/users/:id`, usersController.getOne);
usersRouter.put(
  `/users/:id`,
  validationMiddleware(userValidationSchema),
  usersController.update
);
usersRouter.delete(`/users/:id`, usersController.delete);

export default usersRouter;
