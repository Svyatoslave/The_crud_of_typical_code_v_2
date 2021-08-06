import User from "./user.model.js";
import TodoService from "../todos/todos.service.js";
import PostService from "../posts/posts.service.js";
import AlbumService from "../albums/albums.service.js";
import { validation } from "../../common/validation.js";
import { userSchema } from "../../common/validationSchem.js";

class UserService {
  async create(user, id) {
    if (validation(userSchema, user) === true) {
      const createdUser = await User.create({ ...user, _id: id });
      return createdUser;
    } else {
      console.log("пользователь долбаеб🤣");
    }
  }

  async getAll() {
    const users = await User.find();
    return users;
  }

  async getOne(id) {
    if (!id) {
      throw new Error("ID not request");
    }
    const user = await User.findById(id);
    return user;
  }

  async update(user) {
    if (!user._id) {
      throw new Error("ID not request");
    }
    const updatedUser = await User.findByIdAndUpdate(user._id, user, {
      new: true,
    });
    return updatedUser;
  }

  async delete(id) {
    if (!id) {
      throw new Error("ID not request");
    }
    const user = await User.findByIdAndDelete(id);
    await AlbumService.removeAlbums(id);
    await PostService.removePosts(id);
    await TodoService.removeTodos(id);
  }
}

export default new UserService();
