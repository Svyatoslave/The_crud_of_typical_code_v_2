import PostService from "./posts.service.js";

class postsController {
  async create(req, res) {
    try {
      const post = await PostService.create(req.body, req.body);
      res.status(201).json(post);
    } catch (err) {
      res.status(400).json(err);
    }
  }

  async getAll(_, res) {
    try {
      const posts = await PostService.getAll();

      return res.status(200).json(posts);
    } catch (err) {
      res.status(400).json(err);
    }
  }

  async getOne(req, res) {
    try {
      const post = await PostService.getOne(req.params.id);
      if (!post)
        return res
          .status(404)
          .json({ message: `Post by id #${req.params.id} is not defined` });

      return res.json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async update(req, res) {
    try {
      const existPost = await PostService.getOne(req.params.id);
      if (!post)
        return res
          .status(404)
          .json({ message: `Post by id #${req.params.id} is not defined` });

      const updatedPost = await PostService.update(req.body, req.params.id);

      return res.json(updatedPost);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async delete(req, res) {
    try {
      const existPost = await PostService.getOne(req.params.id);
      if (!existPost)
        return res
          .status(404)
          .json({ message: `Post by id #${req.params.id} is not defined` });

      await PostService.delete(existPost);

      return res.json(true);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

export default new postsController();
