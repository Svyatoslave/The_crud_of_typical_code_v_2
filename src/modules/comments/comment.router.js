import Router from "express";

import commentsController from "./comments.controller.js";
import commentValidationSchema from "./comment.validationSchema.js";
import validationMiddlewar from "../../common/validation/validationMiddlewar.js";

const commentsRouter = new Router();

commentsRouter.post(
  `/comments`,
  validationMiddlewar(commentValidationSchema),
  commentsController.create
);

commentsRouter.get(`/comments`, commentsController.getAll);

commentsRouter.get(`/comments/:id`, commentsController.getOne);

commentsRouter.put(
  `/comments/:id`,
  validationMiddlewar(commentValidationSchema),
  commentsController.update
);

commentsRouter.delete(`/comments/:id`, commentsController.delete);

export default commentsRouter;
