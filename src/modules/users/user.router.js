import Router from "express";

import usersController from "./users.controller";
import userValidationSchema from "./user.validationSchema";
import validationMiddleware from "../../common/validation/validationMiddlewar";

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
