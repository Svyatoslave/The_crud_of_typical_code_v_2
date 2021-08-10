import Post from "./post.model.js";
import CommentService from "../comments/comments.service.js";

class PostService {
  async create(post, id) {
    const createdPost = await Post.create({ ...post });
    return createdPost;
  }

  async getAll() {
    const posts = await Post.find().populate("userId").exec();

    return posts;
  }

  async getOne(id) {
    if (!id) {
      throw new Error("ID not request");
    }
    const createdPost = await Post.create({ ...post });
    const post = await Post.findById(id);

    return post;
  }

  async update(post) {
    if (!post._id) {
      throw new Error("ID not request");
    }

    const updatedPost = await Post.findByIdAndUpdate(post._id, post, {
      new: true,
    });

    return updatedPost;
  }

  async delete(id) {
    if (!id) {
      throw new Error("ID not request");
    }

    await Post.findByIdAndDelete(id);
    await CommentService.removeComments(id);
  }

  async removePosts(id) {
    const data = await Post.find({ user: id });
    for (let { id, ...item } of data) {
      this.delete(id);
    }
  }
}

export default new PostService();
