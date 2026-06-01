function QueueDisplay({ queue, onUpdateStatus, onRemove }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "waiting":
        return "var(--warning-color)";
      case "in-progress":
        return "var(--in-progress-color)";
      case "completed":
        return "var(--completed-color)";
      default:
        return "var(--text-color)";
    }
  };
  return (
    <div
      className="bg-gray-200 text-center"
      style={{
        marginLeft: "20px",
        marginRight: "20px",
        minWidth: "500px",
        maxWidth: "500px",
      }}
    >
      <h3 className="text-xl font-bold text-purple-600 mb-4">Ticket Display</h3>
      {queue.length === 0 ? (
        <p className="text-gray-500">No tickets in the queue.</p>
      ) : (
        <ul className="space-y-4">
          {queue.map((item) => (
            <li key={item.id} className="bg-white p-4 rounded shadow">
              <div>
                <p className="text-lg text-gray-700 text-left">{item.issue}</p>
              </div>
              <div className="flex justify-between items-center pt-4">
                <div>
                  <p className="text-sm text-gray-500 font-bold text-left">
                    Priority: {item.priority}
                  </p>
                  <p
                    className="status text-sm font-bold text-left"
                    style={{ color: getStatusColor(item.status) }}
                  >
                    Status: {item.status}
                  </p>
                </div>
                <div className="space-x-2">
                  {item.status === "waiting" && (
                    <button
                      className="bg-green-500 hover:bg-green-700 text-white px-3 py-1 rounded"
                      onClick={() => onUpdateStatus(item.id, "in-progress")}
                    >
                      {" "}
                      Start
                    </button>
                  )}
                  {item.status === "in-progress" && (
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded"
                      onClick={() => onUpdateStatus(item.id, "completed")}
                    >
                      {" "}
                      Complete
                    </button>
                  )}
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded"
                    onClick={() => onRemove(item.id)}
                  >
                    {" "}
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default QueueDisplay;
