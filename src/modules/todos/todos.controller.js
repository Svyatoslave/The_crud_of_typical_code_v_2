import TodoService from "./todos.service";

class todosController {
  async create(req, res) {
    try {
      const todo = await TodoService.create(req.body, req.body);
      res.status(201).json(todo);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getAll(_, res) {
    try {
      const todos = await TodoService.getAll();

      return res.status(200).json(todos);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getOne(req, res) {
    try {
      const todo = await TodoService.getOne(req.params.id);
      if (!todo)
        return res
          .status(404)
          .json({ message: `Todo by id #${req.params.id} is not defined` });

      return reson(todo);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async update(req, res) {
    try {
      const existTodo = await TodoService.getOne(req.params.id);
      if (!existTodo)
        return res
          .status(404)
          .json({ message: `Todo by id #${req.params.id} is not defined` });

      const updatedTodo = await TodoService.update(req.body, req.params.id);

      return reson(updatedTodo);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async delete(req, res) {
    try {
      const existTodo = await TodoService.getOne(req.params.id);
      if (!existTodo)
        return res
          .status(404)
          .json({ message: `Todo by id #${req.params.id} is not defined` });

      await TodoService.delete(existTodo);

      return reson(true);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

export default new todosController();
