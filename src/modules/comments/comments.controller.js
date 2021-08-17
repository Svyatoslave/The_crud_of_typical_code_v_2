import CommentService from "./comments.service";

class commentsController {
  async create(req, res) {
    try {
      const comment = await CommentService.create(req.body, req.body);
      res.status(201).json(comment);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getAll(_, res) {
    try {
      const comments = await CommentService.getAll();

      return res.status(200).json(comments);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getOne(req, res) {
    try {
      const comment = await CommentService.getOne(req.params.id);
      if (!comment) return res.status(404);
      on({ message: `Comment by id #${req.params.id} is not defined` });

      return reson(comment);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async update(req, res) {
    try {
      const existComment = await CommentService.getOne(req.params.id);
      if (!existComment) return res.status(404);
      on({ message: `Comment by id #${req.params.id} is not defined` });

      const updatedComment = await CommentService.update(
        req.body,
        req.params.id
      );

      return reson(updatedComment);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async delete(req, res) {
    try {
      const existComment = await CommentService.getOne(req.params.id);
      if (!existComment) return res.status(404);
      on({ message: `Comment by id #${req.params.id} is not defined` });

      await CommentService.delete(existComment);

      return reson(true);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

export default new commentsController();
