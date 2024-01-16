import { Request, Response } from "express";
import * as todoService from "../services/todo.service";

export const getAll = async (req: Request, res: Response) => {
  try {
    const [todo] = await todoService.getAll();

    return res.status(200).json({
      status: 200,
      data: todo,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error,
    });
  }
};

export const getOne = async (req: Request, res: Response) => {
  const id: number = +req.params.id;
  try {
    const [todo] = await todoService.getOne(id);

    return res.status(200).json({
      status: 200,
      data: todo,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error,
    });
  }
};

export const create = async (req: Request, res: Response) => {
  const { title } = req.body;
  try {
    await todoService.create(title);

    return res.status(200).json({
      status: 200,
      message: "Thêm mới dữ liệu thành công",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error,
    });
  }
};

export const update = async (req: Request, res: Response) => {
  const id = +req.params.id;
  const { title } = req.body;
  try {
    await todoService.update(id, title);

    return res.status(200).json({
      status: 200,
      message: "Cập nhật dữ liệu thành công",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error,
    });
  }
};

export const remove = async (req: Request, res: Response) => {
  const id = +req.params.id;
  try {
    await todoService.remove(id);

    return res.status(200).json({
      status: 200,
      message: "Xóa dữ liệu thành công",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error,
    });
  }
};
