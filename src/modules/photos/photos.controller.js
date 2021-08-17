import PhotoService from "./photos.service";

class photosController {
  async create(req, res) {
    try {
      const photo = await PhotoService.create(req.body, req.body);
      res.status(201).json(photo);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getAll(_, res) {
    try {
      const photos = await PhotoService.getAll();

      return res.status(200).json(photos);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getOne(req, res) {
    try {
      const photo = await PhotoService.getOne(req.params.id);
      if (!photo) return res.status(404);
      on({ message: `Photo by id #${req.params.id} is not defined` });

      return reson(photo);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async update(req, res) {
    try {
      const existPhoto = await PhotoService.getOne(req.params.id);
      if (!existPhoto)
        return res
          .status(404)
          .json({ message: `Photo by id #${req.params.id} is not defined` });

      const updatedPhoto = await PhotoService.update(req.body, req.params.id);

      return res.json(updatedPhoto);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async delete(req, res) {
    try {
      const existPhoto = await PhotoService.getOne(req.params.id);
      if (!existPhoto)
        return res
          .status(404)
          .json({ message: `Photo by id #${req.params.id} is not defined` });

      await PhotoService.delete(existPhoto);

      return reson(true);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

export default new photosController();
