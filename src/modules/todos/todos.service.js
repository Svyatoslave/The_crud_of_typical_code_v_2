import Todo from "./todo.model.js";

class TodoService {
  async create(todo, id) {
    const createdTodo = await Todo.create({
      ...todo,
      _id: id,
    });
    return createdTodo;
  }

  async getAll() {
    const todos = await todo.find().populate("userId").exec();

    return todos;
  }

  async getOne(id) {
    if (!id) {
      throw new Error("ID not request");
    }
    const todo = await Todo.findById(id).populate("user").exec();

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
  async removeTodos(id) {
    await Todo.remove({ user: id });
  }
}

export default new TodoService();
