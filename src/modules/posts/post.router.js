import Router from "express";

import postsController from "./posts.controller";
import postValidationSchema from "./post.validationSchema";
import validationMiddlewar from "../../common/validation/validationMiddlewar";

const postsRouter = new Router();

postsRouter.post(
  `/posts`,
  validationMiddlewar(postValidationSchema),
  postsController.create
);

postsRouter.get(`/posts`, postsController.getAll);

postsRouter.get(`/posts/:id`, postsController.getOne);

postsRouter.put(
  `/posts/:id`,
  validationMiddlewar(postValidationSchema),
  postsController.update
);

postsRouter.delete(`/posts/:id`, postsController.delete);

export default postsRouter;
