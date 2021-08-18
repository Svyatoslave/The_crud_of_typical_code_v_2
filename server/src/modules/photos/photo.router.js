import Router from "express";

import photosController from "./photos.controller";
import photoValidationSchema from "./photo.validationSchema";
import validationMiddlewar from "../../common/validation/validationMiddlewar";

const photosRouter = new Router();

photosRouter.post(
  `/photos`,
  validationMiddlewar(photoValidationSchema),
  photosController.create
);

photosRouter.get(`/photos`, photosController.getAll);

photosRouter.get(`/photos/:id`, photosController.getOne);

photosRouter.put(
  `/photos/:id`,
  validationMiddlewar(photoValidationSchema),
  photosController.update
);

photosRouter.delete(`/photos/:id`, photosController.delete);

export default photosRouter;
