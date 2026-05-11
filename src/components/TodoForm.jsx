import { useState } from "react";
// onAdd là một hàm được truyền vào như một prop từ component cha. Nó được sử dụng để thêm một todo mới vào danh sách todo. Khi người dùng điền thông tin vào form và nhấn nút submit, hàm handleSubmit sẽ được gọi. Trong hàm này, nếu tiêu đề (title) không hợp lệ (ví dụ: chỉ chứa khoảng trắng), một lỗi sẽ được hiển thị. Nếu tiêu đề hợp lệ, hàm onAdd sẽ được gọi với một đối tượng chứa tiêu đề và mức độ ưu tiên (priority) của todo mới. Điều này cho phép component cha xử lý việc thêm todo mới vào danh sách.
export default function TodoForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [error, setError] = useState("");
  // handleSubmit là một hàm được định nghĩa trong component TodoForm để xử lý sự kiện khi người dùng submit form. Khi form được submit, hàm này sẽ được gọi và thực hiện các bước sau:
  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) {
      setError("Title is required");
      return;
    }
    onAdd({ id: Date.now(), title: title.trim(), priority, completed: false });
    setTitle("");
    setPriority("Medium");
    setError("");
  }
  return (
    <form className="card form" onSubmit={handleSubmit}>
      <h2>Add Todo</h2>
      <input
        type="text"
        placeholder="Nhập tên công việc"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      {error && <p className="error">{error}</p>}
      <button type="submit">Add</button>
    </form>
  );
}
