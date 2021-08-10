import Comment from "./comment.model.js";

class CommentService {
  async getAll() {
    const comments = await Comment.find();

    return comments;
  }

  async create(comment, id) {
    const createdComment = await Comment.create({ ...comment });

    return createdComment;
  }

  async getOne(id) {
    if (!id) {
      throw new Error("ID not request");
    }

    const comment = await Comment.find().populate("post").exec();

    return comment;
  }

  async update(comment) {
    if (!comment._id) {
      throw new Error("ID not request");
    }

    const updatedComment = await Comment.findByIdAndUpdate(
      comment._id,
      comment,
      {
        new: true,
      }
    );

    return updatedComment;
  }

  async delete(id) {
    if (!id) {
      throw new Error("ID not request");
    }

    const comment = await Comment.findByIdAndDelete(id);

    return comment;
  }
  async removeComments(id) {
    await Comment.remove({ post: id });
  }
}

export default new CommentService();
