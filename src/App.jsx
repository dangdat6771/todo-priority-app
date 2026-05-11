import { useMemo, useState } from "react";
import TodoList from "./components/TodoList";
import TodoStats from "./components/TodoStats";
import TodoForm from "./components/TodoForm";
import {
  addTodo,
  toggleTodoStatus,
  sortTodosByPriority,
  filterTodos,
  getTodoStats,
} from "./utils/todoUtils";
import "./App.css";

const initialTodos = [
  { id: 1, title: "Học React", priority: "High", completed: false },
  { id: 2, title: "Đi chợ", priority: "Medium", completed: true },
  { id: 3, title: "Nấu ăn", priority: "Low", completed: false },
];
export default function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [filter, setFilter] = useState("all");
  function handleAdd(todo) {
    setTodos((prev) => addTodo(prev, todo));
  }
  function handleToggle(id) {
    setTodos((prev) => toggleTodoStatus(prev, id));
  }

  10 / 18;
  const displayedTodos = useMemo(() => {
    return sortTodosByPriority(filterTodos(todos, filter));
  }, [todos, filter]);
  const stats = useMemo(() => getTodoStats(todos), [todos]);
  return (
    <div className="app-container">
      <h1>Todo Priority App</h1>
      <p>Ứng dụng ReactJS dùng để thực hành GitHub Flow, Test và CI.</p>
      <TodoForm onAdd={handleAdd} />
      <div className="filter-box">
        <label>Lọc công việc: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">Tất cả</option>
          <option value="completed">Đã hoàn thành</option>
          <option value="pending">Chưa hoàn thành</option>
        </select>
      </div>
      <TodoStats stats={stats} />
      <TodoList todos={displayedTodos} onToggle={handleToggle} />
    </div>
  );
}
