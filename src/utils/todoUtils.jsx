const PRIORITY_ORDER = {
  High: 1,
  Medium: 2,
  Low: 3,
};

export function validateTodo(todo) {
  if (!todo || typeof todo !== "object") {
    throw new Error("Todo must be an object");
  }
  if (!todo.title || todo.title.trim() === "") {
    throw new Error("Todo must have a valid title");
  }
  // include là phương thức của mảng để kiểm tra xem một phần tử có tồn tại trong mảng hay không. Nó trả về true nếu phần tử tồn tại, ngược lại trả về false.
  if (!["High", "Medium", "Low"].includes(todo.priority)) {
    throw new Error("Invalid priority");
  }
  // return true nếu tất cả các điều kiện trên đều được thỏa mãn, nghĩa là todo hợp lệ. Nếu có bất kỳ điều kiện nào không được thỏan, một lỗi sẽ được ném ra và hàm sẽ không tiếp tục thực hiện đến dòng return true.
  return true;
}
export function addTodo(list, Todo) {
  if (!Array.isArray(list)) {
    throw new Error("List must be an array");
  }
  validateTodo(Todo);
  return [...list, Todo];
}
export function toggleTodoStatus(list, id) {
  if (!Array.isArray(list)) {
    throw new Error("List must be an array");
  }
  // map là một phương thức của mảng trong JavaScript, được sử dụng để tạo ra một mảng mới bằng cách áp dụng một hàm cho mỗi phần tử của mảng gốc. Trong trường hợp này, map được sử dụng để duyệt qua từng phần tử (todo) trong mảng list và kiểm tra xem id của todo có khớp với id được truyền vào hay không. Nếu khớp, nó sẽ tạo ra một đối tượng mới với tất cả các thuộc tính của todo nhưng với thuộc tính completed được đảo ngược (nếu completed là true thì sẽ thành false và ngược lại). Nếu không khớp, nó sẽ giữ nguyên todo đó trong mảng mới. Kết quả cuối cùng là một mảng mới với trạng thái completed của todo có id tương ứng đã được toggled.
  return list.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo,
  );
}
export function filterTodos(list, status) {
  if (!Array.isArray(list)) {
    throw new Error("List must be an array");
  }
  //   filter là một phương thức của mảng trong JavaScript, được sử dụng để tạo ra một mảng mới chứa tất cả các phần tử của mảng gốc mà thỏa mãn một điều kiện nhất định. Trong trường hợp này, filter được sử dụng để duyệt qua từng phần tử (todo) trong mảng list và kiểm tra xem trạng thái của todo có khớp với status được truyền vào hay không. Nếu status là "completed", nó sẽ lọc ra tất cả các todo mà thuộc tính completed của chúng là true. Nếu status là "pending", nó sẽ lọc ra tất cả các todo mà thuộc tính completed của chúng là false. Nếu status không phải là "completed" hoặc "pending", nó sẽ trả về toàn bộ danh sách mà không áp dụng bất kỳ bộ lọc nào.
  if (status === "completed") {
    return list.filter((todo) => todo.completed);
  }
  if (status === "pending") {
    return list.filter((todo) => !todo.completed);
  }

  return list;
}
export function sortTodosByPriority(list) {
  if (!Array.isArray(list)) {
    throw new Error("List must be an array");
  }
  //   sort là một phương thức của mảng trong JavaScript, được sử dụng để sắp xếp các phần tử của mảng theo một thứ tự nhất định. Trong trường hợp này, sort được sử dụng để sắp xếp các todo trong mảng list dựa trên mức độ ưu tiên của chúng. Hàm so sánh được truyền vào sort sẽ so sánh hai phần tử (a và b) dựa trên giá trị của thuộc tính priority của chúng. PRIORITY_ORDER là một đối tượng ánh xạ mức độ ưu tiên (High, Medium, Low) thành các giá trị số (1, 2, 3). Khi sort thực hiện so sánh, nó sẽ lấy giá trị tương ứng từ PRIORITY_ORDER cho a.priority và b.priority và trừ chúng để xác định thứ tự sắp xếp. Kết quả cuối cùng là một mảng mới với các todo được sắp xếp theo mức độ ưu tiên từ cao đến thấp.
  return [...list].sort(
    (a, b) => PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority],
  );
}
export function getTodoStats(list) {
  if (!Array.isArray(list)) {
    throw new Error("List must be an array");
  }
  const completed = list.filter((todo) => todo.completed).length;
  const total = list.length;
  return {
    total,
    completed,
    pending: total - completed,
  };
}
