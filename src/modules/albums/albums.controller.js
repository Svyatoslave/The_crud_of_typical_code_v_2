import AlbumService from "./albums.service.js";

class albumsController {
  async create(req, res) {
    try {
      const album = await AlbumService.create(req.body, req.body);
      res.status(201).json(album);
    } catch (err) {
      res.status(400).json(err);
    }
  }

  async getAll(_, res) {
    try {
      const albums = await AlbumService.getAll();

      return res.status(200).json(albums);
    } catch (err) {
      res.status(400).json(err);
    }
  }

  async getOne(req, res) {
    try {
      const album = await AlbumService.getOne(req.params.id);
      if (!album)
        return res
          .status(404)
          .json({ message: `Album by id #${req.params.id} is not defined` });

      return res.json(album);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async update(req, res) {
    try {
      const existAlbum = await AlbumService.getOne(req.params.id);
      if (!existAlbum)
        return res
          .status(404)
          .json({ message: `Album by id #${req.params.id} is not defined` });

      const updatedAlbum = await AlbumService.update(req.body, req.params.id);

      return res.json(updatedAlbum);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async delete(req, res) {
    try {
      const existAlbum = await AlbumService.getOne(req.params.id);
      if (!existAlbum)
        return res
          .status(404)
          .json({ message: `Album by id #${req.params.id} is not defined` });

      await AlbumService.delete(existAlbum);

      return res.json(true);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}
export default new albumsController();
