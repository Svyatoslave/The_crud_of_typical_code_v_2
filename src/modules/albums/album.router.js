import Router from "express";
import albumsController from "./albums.controller.js";

const albumsRouter = new Router();

albumsRouter.post(`/albums`, albumsController.create);

albumsRouter.get(`/albums`, albumsController.getAll);

albumsRouter.get(`/albums/:id`, albumsController.getOne);

albumsRouter.put(`/albums/:id`, albumsController.update);

albumsRouter.delete(`/albums/:id`, albumsController.delete);

export default albumsRouter;
