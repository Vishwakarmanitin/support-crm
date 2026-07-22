function StatusFilter({ status, setStatus }) {
  return (
    <select
      value={status}
      onChange={(e) => setStatus(e.target.value)}
      className="border rounded-lg p-3 min-w-[170px]"
    >
      <option value="">All Status</option>
      <option value="Open">Open</option>
      <option value="In Progress">In Progress</option>
      <option value="Closed">Closed</option>
    </select>
  );
}

export default StatusFilter;