import Post from "./post.model";

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
  async getOneLast() {
    return Post.findOne({}, {}, { sort: { _id: -1 } });
  }
}

export default new PostService();
