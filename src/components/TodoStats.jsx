export default function TodoStats({ stats }) {
  return (
    <div className="stats-grid">
      <div className="card">
        <h3>Tổng công việc</h3>
        <p>{stats.total}</p>
      </div>
      <div className="card">
        <h3>Công việc đã hoàn thành</h3>
        <p>{stats.completed}</p>
      </div>
      <div className="card">
        <h3>Công việc đang chờ</h3>
        <p>{stats.pending}</p>
      </div>
    </div>
  );
}
