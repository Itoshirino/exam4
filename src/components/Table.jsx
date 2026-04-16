import React from "react";
import TodoForm from "./TodoForm";
import axios from "axios";
import { useState, useEffect } from "react";

const Table = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:3000/todos")
      .then((data) => {
        console.log(data);
        setTodos(data?.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="p-8 text-center text-xl">Loading...</div>;
  }
  return (
    <div>
      <TodoForm todos={todos} />
    </div>
  );
};

export default Table;
