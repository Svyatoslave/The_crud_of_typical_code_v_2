import Todo from "./todo.model.js";

class TodoService {
  async create(todo) {
    const createdTodo = await Todo.create({
      ...todo,
    });
    return createdTodo;
  }

  async getAll() {
    const todos = await Todo.find();
    return todos;
  }

  async getOne(id) {
    if (!id) {
      throw new Error("ID not request");
    }

    const todo = await Todo.findById(id);

    return todo;
  }

  async update(todo) {
    if (!todo._id) {
      throw new Error("ID not request");
    }

    const updatedTodo = await Todo.findByIdAndUpdate(todo._id, todo, {
      new: true,
    });

    return updatedTodo;
  }

  async delete(id) {
    if (!id) {
      throw new Error("ID not request");
    }

    const todo = await Todo.findByIdAndDelete(id);

    return todo;
  }
}

export default new TodoService();
