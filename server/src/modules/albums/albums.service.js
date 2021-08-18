import Album from "./album.model";

class AlbumService {
  async create(album) {
    return Album.create({ ...album });
  }

  async getAll() {
    return Album.find();
  }

  async getOne(id) {
    return Album.findById(id);
  }

  async update(album, id) {
    return Album.findByIdAndUpdate(id, album, { new: true });
  }

  async delete(album) {
    return Album.deleteOne(album);
  }
  async getOneLast() {
    return Album.findOne({}, {}, { sort: { _id: -1 } });
  }
}

export default new AlbumService();
