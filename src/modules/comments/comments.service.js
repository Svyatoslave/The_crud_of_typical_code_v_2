import Comment from "./comment.model";

class CommentService {
  async create(comment) {
    return Comment.create({ ...comment });
  }

  async getAll() {
    return Comment.find();
  }

  async getOne(id) {
    return Comment.findById(id);
  }

  async update(comment, id) {
    return Comment.findByIdAndUpdate(id, comment, { new: true });
  }

  async delete(comment) {
    return Comment.deleteOne(comment);
  }
  async getOneLast() {
    return Comment.findOne({}, {}, { sort: { _id: -1 } });
  }
}

export default new CommentService();
