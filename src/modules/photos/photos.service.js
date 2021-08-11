import Photo from "./photo.model.js";

class PhotoService {
  async create(photo) {
    return Photo.create({ ...photo });
  }

  async getAll() {
    return Photo.find();
  }

  async getOne(id) {
    return Photo.findById(id);
  }

  async update(photo, id) {
    return Photo.findByIdAndUpdate(id, photo, { new: true });
  }

  async delete(photo) {
    return Photo.deleteOne(photo);
  }
}

export default new PhotoService();
