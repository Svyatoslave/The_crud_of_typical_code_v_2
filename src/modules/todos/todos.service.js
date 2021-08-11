import Todo from "./todo.model.js";

class TodoService {
  async create(todo) {
    return Todo.create({ ...todo });
  }

  async getAll() {
    return Todo.find();
  }

  async getOne(id) {
    return Todo.findById(id);
  }

  async update(todo, id) {
    return Todo.findByIdAndUpdate(id, todo, { new: true });
  }

  async delete(todo) {
    return Todo.deleteOne(todo);
  }
}

export default new TodoService();
