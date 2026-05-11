export default function TodoList({ todos, onToggle }) {
  return (
    <div className="card">
      <h2>Danh sách công việc</h2>
      {todos.length === 0 ? (
        <p>Không có công việc nào</p>
      ) : (
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id} className="todo-item">
              <div>
                <strong>{todo.title}</strong>
                <p>Priority: {todo.priority} | Status: </p>
                {todo.completed ? "Completed" : "Pending"}
              </div>
              <button onClick={() => onToggle(todo.id)}>
                {todo.completed ? "Bỏ hoàn thành" : "Hoàn thành"}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
