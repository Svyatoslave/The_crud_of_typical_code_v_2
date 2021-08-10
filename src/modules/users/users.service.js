import { USER_NAME } from "./user.model.js";
import TodoService from "../todos/todos.service.js";
import PostService from "../posts/posts.service.js";
import AlbumService from "../albums/albums.service.js";

class UserService {
  async create(user) {
    const createdUser = await USER_NAME.create({ ...user });
    return createdUser;
  }

  async getAll() {
    const users = await USER_NAME.find();
    return users;
  }

  async getOne(id) {
    if (!id) {
      throw new Error("ID not request");
    }
    const user = await USER_NAME.findById(id);
    return user;
  }

  async update(user) {
    if (!user._id) {
      throw new Error("ID not request");
    }
    const updatedUser = await USER_NAME.findByIdAndUpdate(user._id, user, {
      new: true,
    });
    return updatedUser;
  }

  async delete(id) {
    if (!id) {
      throw new Error("ID not request");
    }
    const user = await USER_NAME.findByIdAndDelete(id);
    await AlbumService.removeAlbums(id);
    await PostService.removePosts(id);
    await TodoService.removeTodos(id);
  }
}

export default new UserService();
