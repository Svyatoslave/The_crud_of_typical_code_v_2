import Photo from "./photo.model.js";

class PhotoService {
  async create(photo, id) {
    const createdPhoto = await Photo.create({ ...photo });
    return createdPhoto;
  }

  async getAll() {
    const photos = await Photo.find();
    return photos;
  }

  async getOne(id) {
    if (!id) {
      throw new Error("ID not request");
    }
    const photo = await Photo.findById(id).populate("album").exec();

    return photo;
  }

  async update(photo) {
    if (!photo._id) {
      throw new Error("ID not request");
    }

    const updatedPhoto = await Photo.findByIdAndUpdate(photo._id, photo, {
      new: true,
    });

    return updatedPhoto;
  }

  async delete(id) {
    if (!id) {
      throw new Error("ID not request");
    }

    const photo = await Photo.findByIdAndDelete(id);
    await AlbumService.removeAlbums(id);
  }
  async removePhotos(id) {
    await Photo.remove({ album: id });
  }
}

export default new PhotoService();
