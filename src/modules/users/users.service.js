import User from "./user.model";

class UserService {
  async create(user) {
    return User.create({ ...user });
  }

  async getAll() {
    return User.find();
  }

  async getOne(id) {
    return User.findById(id);
  }

  async update(user, id) {
    return User.findByIdAndUpdate(id, user, { new: true });
  }

  async delete(user) {
    return User.deleteOne(user);
  }
  async getOneLast() {
    return User.findOne({}, {}, { sort: { _id: -1 } });
  }
}

export default new UserService();
