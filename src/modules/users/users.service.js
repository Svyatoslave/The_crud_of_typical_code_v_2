import User from "./user.model.js";

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
}

export default new UserService();
