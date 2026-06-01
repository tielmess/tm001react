import { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";

export default function QueueForm({ onAddToQueue }) {
  const [issue, setIssue] = useState("");
  const [priority, setPriority] = useState("P3");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!issue.trim() || !priority.trim()) return;
    onAddToQueue({ issue, priority });
    setIssue("");
    setPriority("P3");
  };

  return (
    <div className="bg-gray-200 text-center">
      <h3 className="text-xl font-bold text-purple-600">Add Ticket</h3>
      <form className="queue-form" onSubmit={handleSubmit}>
        <div
          className="mb-4"
          style={{
            marginBottom: "20px",
            verticalAlign: "middle",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <label
            className=" text-gray-700 text-sm font-bold inline-block align-middle"
            style={{ marginRight: "10px" }}
            htmlFor="issue"
          >
            Issue{" "}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 bg-blue-50 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="issue"
            type="text"
            placeholder="Enter issue"
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
          />
        </div>
        <div
          className="mb-4"
          style={{
            marginBottom: "20px",
            verticalAlign: "middle",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <label
            className="text-gray-700 text-sm font-bold inline-block align-middle"
            style={{ marginRight: "10px" }}
            htmlFor="priority"
          >
            Priority{" "}
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 bg-blue-50 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="P1">P1</option>
            <option value="P2">P2</option>
            <option value="P3">P3</option>
          </select>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white align-middle rounded focus:outline-none focus:shadow-outline"
          style={{
            minWidth: "100%",
            minHeight: "44px",
            textAlign: "center",
            verticalAlign: "middle",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
          type="submit"
        >
          Add to Queue{" "}
          <span
            className="inline-block align-middle"
            style={{ marginLeft: "10px" }}
          >
            <FaArrowCircleRight size={16} />
          </span>
        </button>
      </form>
    </div>
  );
}
