import axios from "axios";

import UserService from "./modules/users/users.service.js";
import TodoService from "./modules/todos/todos.service.js";
import PostService from "./modules/posts/posts.service.js";
import PhotoService from "./modules/photos/photos.service.js";
import CommentService from "./modules/comments/comments.service.js";
import AlbumService from "./modules/albums/albums.service.js";

const getUrl = (str) => `https://jsonplaceholder.typicode.com/${str}`;

class Initialize {
  async initializeAll() {
    await this.#initializeAlbums();
    await this.#initializeComments();
    await this.#initializePhotos();
    await this.#initializePosts();
    await this.#initializeTodos();
    await this.#initializeUsers();
  }

  async #initializeAlbums() {
    const { data } = await axios.get(getUrl("albums"));

    for (let { id, userId, ...item } of [...data]) {
      const existmodel = await AlbumService.getOne(id);
      if (!existmodel) {
        await AlbumService.create({ ...item, _id: id, user: userId });
      }
    }
    console.log("albums-complete", "💩");
  }

  async #initializeComments() {
    const { data } = await axios.get(getUrl("comments"));

    for (let { id, postId, ...item } of [...data]) {
      const existmodel = await CommentService.getOne(id);
      if (!existmodel) {
        await CommentService.create({ ...item, _id: id, post: postId });
      }
    }
    console.log("comments-complete", "💩");
  }

  async #initializePhotos() {
    const { data } = await axios.get(getUrl("photos"));

    for (let { id, albumId, ...item } of [...data]) {
      const existmodel = await PhotoService.getOne(id);
      if (!existmodel) {
        await PhotoService.create({ ...item, _id: id, album: albumId });
      }
    }
    console.log("photos-complete", "💩");
  }

  async #initializePosts() {
    const { data } = await axios.get(getUrl("posts"));

    for (let { id, userId, ...item } of [...data]) {
      const existmodel = await PostService.getOne(id);
      if (!existmodel) {
        await PostService.create({ ...item, _id: id, user: userId });
      }
    }
    console.log("posts-complete", "💩");
  }

  async #initializeTodos() {
    const { data } = await axios.get(getUrl("todos"));

    for (let { id, userId, ...item } of [...data]) {
      const existmodel = await TodoService.getOne(id);
      if (!existmodel) {
        await TodoService.create({ ...item, _id: id, user: userId });
      }
    }
    console.log("todos-complete", "💩");
  }

  async #initializeUsers() {
    const { data } = await axios.get(getUrl("users"));

    for (let { id, ...item } of [...data]) {
      const existmodel = await UserService.getOne(id);
      if (!existmodel) {
        await UserService.create({ ...item, _id: id });
      }
    }
    console.log("users-complete", "💩");
  }
}

export default new Initialize();
