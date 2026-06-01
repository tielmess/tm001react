import { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";

export default function QueueForm({ onAddToQueue }) {
  const [issue, setIssue] = useState("");
  const [link, setLink] = useState(""); // 1. Added link state
  const [priority, setPriority] = useState("P3");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!issue.trim() || !priority.trim()) return;

    // 2. Pass link to the parent handler
    onAddToQueue({ issue, link, priority });

    setIssue("");
    setLink(""); // 3. Reset input on submit
    setPriority("P3");
  };

  return (
    <div className="bg-gray-200 text-center">
      <h3 className="text-xl font-bold text-purple-600 mb-4">Add Ticket</h3>
      <form className="queue-form" onSubmit={handleSubmit}>
        {/* Issue Input */}
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

        {/* 4. Added Link Input (Between Issue and Priority) */}
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
            htmlFor="link"
          >
            Link{" "}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 bg-blue-50 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="link"
            type="url"
            placeholder="https://example.com"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>

        {/* Priority Input */}
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
            className="shadow border rounded w-full py-2 px-3 bg-blue-50 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
