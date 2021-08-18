import Router from "express";

import albumsController from "./albums.controller";
import albumValidationSchema from "./album.validationSchema";
import validationMiddlewar from "../../common/validation/validationMiddlewar";

const albumsRouter = new Router();

albumsRouter.post(
  `/albums`,
  validationMiddlewar(albumValidationSchema),
  albumsController.create
);

albumsRouter.get(`/albums`, albumsController.getAll);

albumsRouter.get(`/albums/:id`, albumsController.getOne);

albumsRouter.put(
  `/albums/:id`,
  validationMiddlewar(albumValidationSchema),
  albumsController.update
);

albumsRouter.delete(`/albums/:id`, albumsController.delete);

export default albumsRouter;
