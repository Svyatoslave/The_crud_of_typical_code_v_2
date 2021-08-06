import CommentService from "./comments.service.js";

class commentsController {
  async create(req, res) {
    try {
      const comment = await CommentService.create(req.body, req.body.id);
      res.status(200).json(comment);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getAll(_, res) {
    try {
      const comments = await CommentService.getAll();

      return res.json(comments);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getOne(req, res) {
    try {
      const comment = await CommentService.getOne(req.params.id);

      return res.json(comment);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async update(req, res) {
    try {
      const updatedComment = await CommentService.update(req.body);

      return res.json(updatedComment);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async delete(req, res) {
    try {
      const comment = await CommentService.delete(req.params.id);

      return res.json(true);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

export default new commentsController();
