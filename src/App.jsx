import { useState } from "react";
import "./App.css";
import Card from "./components/Card.jsx";
import QueueForm from "./components/QueueForm.jsx";
import QueueDisplay from "./components/QueueDisplay.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);
  const [queue, setQueue] = useState([]);
  const addToQueue = (item) => {
    setQueue([...queue, { ...item, id: Date.now(), status: "waiting" }]);
  };
  const updateStatus = (id, status) => {
    setQueue(
      queue.map((item) => (item.id === id ? { ...item, status } : item)),
    );
  };
  const removeFromQueue = (id) => {
    setQueue(queue.filter((item) => item.id !== id));
  };
  // const link = (id, link) => {
  //   setQueue(queue.map((item) => (item.id === id ? { ...item, link } : item)));
  // };
  return (
    <>
      <div className="bg-gray-200 p-4 text-center">
        <div className="container mx-auto p-4 outline-1 outline-gray-300 text-center">
          <h1 className="text-3xl font-bold text-blue-600">An h1 heading</h1>
          <p>A paragraph of text.</p>
          <p>Another paragraph of text to test updates.</p>
        </div>
      </div>
      <div className="bg-gray-100 p-4 text-center">
        <div className="container mx-auto p-4 text-center">
          <h2 className="text-2xl font-bold text-green-600">An h2 heading</h2>
          <p>A different paragraph of text.</p>
          <p>Another different paragraph of text to test updates.</p>
        </div>
      </div>
      <div className="bg-gray-200 pt-10 text-center">
        <h2 className="text-2xl font-bold text-green-600">
          Ticket Management System
        </h2>
        <p>Manage tickets efficiently.</p>
      </div>
      <div
        className="bg-gray-200 p-10 pt-5 text-center grid xs:grid-cols-1 md:grid-cols-3 gap-4 place-items-center items-start"
        style={{
          // display: "flex",
          // flexDirection: "row",
          justifyContent: "center",
          gap: "20px",
          minHeight: "400px",
        }}
      >
        <QueueForm onAddToQueue={addToQueue} />
        <QueueDisplay
          queue={queue}
          onUpdateStatus={updateStatus}
          onRemove={removeFromQueue}
        />
      </div>
      <div className="bg-gray-100 p-10 text-center">
        <h3 className="text-2xl font-bold text-green-600">Counter</h3>
        <p>Count is: {count}</p>
        <div>
          <button
            onClick={() => setCount(count + 1)}
            style={{
              backgroundColor: "blue",
              color: "white",
              padding: "10px 20px",
              borderRadius: "5px",
              margin: "10px 5px",
              minWidth: "105px",
            }}
          >
            Increase
          </button>
          <button
            onClick={() => setCount((count) => Math.max(count - 1, 0))} // Prevent count from going below 0
            style={{
              backgroundColor: "blue",
              color: "white",
              padding: "10px 20px",
              borderRadius: "5px",
              margin: "10px 5px",
              minWidth: "105px",
            }}
          >
            Decrease
          </button>
          <button
            onClick={() => {
              setCount(0);
            }}
            style={{
              backgroundColor: "blue",
              color: "white",
              padding: "10px 20px",
              borderRadius: "5px",
              margin: "10px 5px",
              minWidth: "105px",
            }}
          >
            Reset
          </button>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Enter a value"
            value={value}
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              marginTop: "10px",
              width: "200px",
            }}
            onChange={(e) => setValue(Number(e.target.value))}
          />
          <button
            style={{
              backgroundColor: "blue",
              color: "white",
              padding: "10px 20px",
              borderRadius: "5px",
              margin: "10px 5px",
              minWidth: "105px",
            }}
            onClick={() => {
              setCount(value);
              setValue(0);
            }}
          >
            Set to Value {value}
          </button>
        </div>
      </div>
      <div className="bg-gray-300 p-4 text-center grid xs:grid-cols-1 md:grid-cols-2 gap-4">
        <Card
          title="A feature 1"
          description="A description of the feature."
          buttonText="Try Feature 1"
          url="/feature1"
        />
        <Card
          title="Another feature 2"
          description="A description of the other feature."
          buttonText="Try Feature 2"
          url="/feature2"
        />
        <Card
          title="A feature 3"
          description="A description of the feature."
          buttonText="Try Feature 3"
          url="/feature3"
        />
        <Card
          title="Another feature 4"
          description="A description of the other feature."
          buttonText="Try Feature 4"
          url="/feature4"
        />
      </div>
    </>
  );
}

export default App;
