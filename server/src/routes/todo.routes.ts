import express from "express";
import * as todoController from "../controllers/todo.controller";

const todoRouter = express.Router();

// Lấy tất cả thông tin
todoRouter.get("/", todoController.getAll);

// Lấy thông tin theo id
todoRouter.get("/:id", todoController.getOne);

// Thêm mới thông tin
todoRouter.post("/", todoController.create);

// Update thông tin theo id
todoRouter.put("/:id", todoController.update);

// Xóa thông tin theo id
todoRouter.delete("/:id", todoController.remove);
export default todoRouter;