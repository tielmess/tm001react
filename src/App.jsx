import { useState } from "react";
import "./App.css";
import Card from "./components/Card.jsx";
import QueueForm from "./components/QueueForm.jsx";
import QueueDisplay from "./components/QueueDisplay.jsx";
import Button from "./components/Button.jsx";
import BasicProps from "./components/BasicProps.jsx";
import ChildrenProps from "./components/ChildrenProps.jsx";
import ComplexProps from "./components/ComplexProps.jsx";
import RefProps from "./components/RefProps.jsx";
import ThemeToggler from "./components/ThemeToggler.jsx";

const isDark = true;

function Navigation() {
  const sections = [
    { id: "basic", label: "Basic Props", icon: "📦" },
    { id: "ref", label: "Ref Props", icon: "🔗" },
    { id: "children", label: "Children Props", icon: "👨‍👩‍👧‍👦" },
    { id: "complex", label: "Complex Props", icon: "🧩" },
    { id: "theme", label: "Theme Toggler", icon: "🎨" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 shadow-md tranition-colors ${isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      <div>
        <div
          className={`container mx-auto p-4 flex flex-wrap justify-center ${isDark ? "text-white" : "text-gray-900"}`}
        >
          {sections.map((section) => (
            <button
              key={section.id}
              href={`#${section.id}`}
              className={`px-4 py-2 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 mr-2 mt-2`}
            >
              <span>{section.icon}</span>
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function AppContent() {
  return (
    <div className={`min-h-screen bg-gray-800`}>
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <header
          className={`mb-12 text-center transition-colors ${isDark ? "text-white" : "text-gray-900"}`}
        >
          <h1
            className={`text-3xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}
          >
            React props
          </h1>
          <p
            className={`text-lg ${isDark ? "text-gray-300" : "text-gray-600"}`}
          >
            Explore different types of React props and how to use them
            &nbsp;effectively.
          </p>
        </header>
        <div className="space-y-8">
          <section id="basic" className="scroll-mt-200 text-white">
            <BasicProps />
          </section>
          <section id="ref" className="scroll-mt-20 text-white">
            <RefProps />
          </section>
          <section id="children" className="scroll-mt-20 text-white">
            <ChildrenProps />
          </section>
          <section id="complex" className="scroll-mt-20 text-white">
            <ComplexProps />
          </section>
          <section id="theme" className="scroll-mt-20 text-white">
            <ThemeToggler />
          </section>
        </div>
      </div>
    </div>
  );
}

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
      <AppContent />

      <div className="bg-gray-200 p-4 text-center">
        <div className="container mx-auto p-4 outline-1 outline-gray-300 text-center">
          <h2 className="text-3xl font-bold text-blue-600">An h2 heading</h2>
          <p>A paragraph of text.</p>
          <p>Another paragraph of text to test updates.</p>
        </div>
        <Button buttonText="A button" />
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
        className="bg-gray-200 p-10 pt-5 text-center"
        style={{
          minHeight: "500px",
        }}
      >
        <div
          className="bg-gray-200 p-10 pt-5 text-center grid xs:grid-cols-1 md:grid-cols-3 items-start"
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            gap: "20px",
          }}
        >
          <QueueForm onAddToQueue={addToQueue} />
          <QueueDisplay
            queue={queue}
            onUpdateStatus={updateStatus}
            onRemove={removeFromQueue}
          />
        </div>
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
