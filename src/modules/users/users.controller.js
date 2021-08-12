import { resolveSoa } from "node:dns/promises";
import UserService from "./users.service.js";

class usersController {
  async create(req, res) {
    try {
      const user = await UserService.create(req.body, req.body);
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json(err);
    }
  }

  async getAll(_, res) {
    try {
      const users = await UserService.getAll();
      if (users.length == 0)
        return res.status(204).json({ message: `Users not found` });

      return res.status(200).json(users);
    } catch (err) {
      res.status(400).json(err);
    }
  }

  async getOne(req, res) {
    try {
      const user = await UserService.getOne(req.params.id);
      if (!user)
        return res
          .status(404)
          .json({ message: `User by id #${req.params.id} is not defined` });

      return res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async update(req, res) {
    try {
      const existUser = await UserService.getOne(req.params.id);
      if (!existUser)
        return res
          .status(404)
          .json({ message: `User by id #${req.params.id} is not defined` });

      const updatedUser = await UserService.update(req.body, req.params.id);

      return res.json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async delete(req, res) {
    try {
      const existUser = await UserService.getOne(req.params.id);
      if (!existUser)
        return res
          .status(404)
          .json({ message: `User by id #${req.params.id} is not defined` });

      await UserService.delete(existUser);

      return res.json(true);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

export default new usersController();
