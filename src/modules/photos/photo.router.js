import Router from "express";
import photosController from "./photos.controller.js";

const photosRouter = new Router();

photosRouter.post(`/photos`, photosController.create);

photosRouter.get(`/photos`, photosController.getAll);

photosRouter.get(`/photos/:id`, photosController.getOne);

photosRouter.put(`/photos/:id`, photosController.update);

photosRouter.delete(`/photos/:id`, photosController.delete);

export default photosRouter;
