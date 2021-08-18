import Router from "express";

import commentsController from "./comments.controller";
import commentValidationSchema from "./comment.validationSchema";
import validationMiddlewar from "../../common/validation/validationMiddlewar";

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
