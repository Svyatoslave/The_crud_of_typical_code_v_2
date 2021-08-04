import Album from "./album.model.js";

class AlbumService {
  async getAll() {
    const albums = await Album.find().populate("userId").exec();

    return albums;
  }

  async create(album) {
    const createdAlbum = await Album.create({ ...album, user: userId });

    return createdAlbum;
  }

  async getOne(id) {
    if (!id) {
      throw new Error("ID not request");
    }
    const album = await Album.findById(id);

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

    return album;
  }
}

export default new AlbumService();
