import axios from "axios";
import models from "./modules/allmodules.js";

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

    for (let { id, userId, ...item } of [...data.slice(0, 10)]) {
      const existmodel = await models.albums.findById(id).exec();
      if (!existmodel) {
        await models.albums.create({ ...item, _id: id, user: userId });
      }
    }
    console.log("albums-complete", "💩");
  }

  async #initializeComments() {
    const { data } = await axios.get(getUrl("comments"));

    for (let { id, postId, ...item } of [...data.slice(0, 10)]) {
      const existmodel = await models.comments.findById(id).exec();
      if (!existmodel) {
        await models.comments.create({ ...item, _id: id, post: postId });
      }
    }
    console.log("comments-complete", "💩");
  }

  async #initializePhotos() {
    const { data } = await axios.get(getUrl("photos"));

    for (let { id, albumId, ...item } of [...data.slice(0, 10)]) {
      const existmodel = await models.photos.findById(id).exec();
      if (!existmodel) {
        await models.photos.create({ ...item, _id: id, album: albumId });
      }
    }
    console.log("photos-complete", "💩");
  }

  async #initializePosts() {
    const { data } = await axios.get(getUrl("posts"));

    for (let { id, userId, ...item } of [...data.slice(0, 10)]) {
      const existmodel = await models.posts.findById(id).exec();
      if (!existmodel) {
        await models.posts.create({ ...item, _id: id, user: userId });
      }
    }
    console.log("posts-complete", "💩");
  }

  async #initializeTodos() {
    const { data } = await axios.get(getUrl("todos"));

    for (let { id, userId, ...item } of [...data.slice(0, 10)]) {
      const existmodel = await models.todos.findById(id).exec();
      if (!existmodel) {
        await models.todos.create({ ...item, _id: id, user: userId });
      }
    }
    console.log("todos-complete", "💩");
  }

  async #initializeUsers() {
    const { data } = await axios.get(getUrl("users"));

    for (let { id, ...item } of [...data.slice(0, 10)]) {
      const existmodel = await models.users.findById(id).exec();
      if (!existmodel) {
        await models.users.create({ ...item, _id: id });
      }
    }
    console.log("users-complete", "💩");
  }
}

export default new Initialize();
