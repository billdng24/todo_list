import React, { useEffect, useState } from "react";
import { message } from "antd";
import { baseUrl } from "./api/axios";
import "./App.css";

interface Todo {
  todo_id: number;
  title: string;
}

function App() {
  const [todoList, setTodoList] = useState([]);
  const [valueInput, setValueInput] = useState("");
  const [check, setCheck] = useState(false);
  const [selectedTodoId, setSelectedTodoId] = useState(0);

  const loadData = async () => {
    try {
      const res = await baseUrl.get("/");
      setTodoList(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAdd = async () => {
    try {
      const res = await baseUrl.post("/", { title: valueInput });
      setValueInput("");
      loadData();
      message.success(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const res = await baseUrl.delete(`/${id}`);
      loadData();
      message.success(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSetValue = (title: string, id: number) => {
    setValueInput(title);
    setCheck(!check);
    setSelectedTodoId(id);
  };

  const handleUpdate = async (id: number) => {
    try {
      const res = await baseUrl.put(`/${id}`, { title: valueInput });
      message.success(res.data.message);
      loadData();
      setCheck(false);
      setValueInput("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <div id="myDIV" className="header">
        <h2>My To Do List</h2>
        <input
          type="text"
          id="myInput"
          placeholder="Title..."
          value={valueInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValueInput(e.target.value)
          }
        />
        <span className="addBtn" onClick={handleAdd}>
          Add
        </span>
      </div>
      <ul id="myUL">
        {todoList.map((t: Todo) => (
          <li className="todoList" key={t.todo_id}>
            {t.title}
            <button className="modal">
              {check && selectedTodoId === t.todo_id ? (
                <button className="btnUpdate" onClick={() => handleUpdate(t.todo_id)}>Update</button>
              ) : (
                <></>
              )}
              <i
                className="fa-solid fa-pencil update"
                onClick={() => handleSetValue(t.title, t.todo_id)}
              ></i>
              <i
                className="fa-solid fa-trash delete"
                onClick={() => handleDelete(t.todo_id)}
              ></i>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
