import pool from "../utils/database";

export const getAll = () => {
  return pool.execute("SELECT * FROM todo");
};

export const getOne = (id: number) => {
  return pool.execute("SELECT * FROM todo WHERE todo_id = ?", [id]);
};

export const create = (title: string) => {
  return pool.execute("INSERT INTO todo(title) VALUES (?)", [title]);
};

export const update = (id: number, title: string) => {
    return pool.execute("UPDATE todo SET title = ? WHERE todo_id = ?", [title, id]);
};

export const remove = (id: number) => {
    return pool.execute("DELETE FROM todo WHERE todo_id = ?", [id]);
}