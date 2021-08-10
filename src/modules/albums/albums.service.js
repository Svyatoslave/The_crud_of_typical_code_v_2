import Album from "./album.model.js";
import PhotoService from "../photos/photos.service.js";

class AlbumService {
  async getAll() {
    const albums = await Album.find();

    return albums;
  }

  async create(album, id) {
    const createdAlbum = await Album.create({ ...album });

    return createdAlbum;
  }

  async getOne(id) {
    if (!id) {
      throw new Error("ID not request");
    }
    const album = await Album.findById(id).populate("user").exec();

    return album;
  }

  async update(album) {
    if (!album._id) {
      throw new Error("ID not request");
    }

    const updatedAlbum = await Album.findByIdAndUpdate(album._id, album, {
      new: true,
    });

    return updatedAlbum;
  }

  async delete(id) {
    if (!id) {
      throw new Error("ID not request");
    }

    const album = await Album.findByIdAndDelete(id);

    await PhotoService.removePhotos(id);
  }
  async removeAlbums(id) {
    const data = await Album.find({ user: id });
    for (let { id, ...item } of data) {
      this.delete(id);
    }
  }
}

export default new AlbumService();
