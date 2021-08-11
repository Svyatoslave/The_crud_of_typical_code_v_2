import Post from "./post.model.js";

class PostService {
  async create(post) {
    return Post.create({ ...post });
  }

  async getAll() {
    return Post.find();
  }

  async getOne(id) {
    return Post.findById(id);
  }

  async update(post, id) {
    return Post.findByIdAndUpdate(id, post, { new: true });
  }

  async delete(post) {
    return Post.deleteOne(post);
  }
}

export default new PostService();
