import "./App.css";
import Card from "./components/Card.jsx";

function App() {
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
        <div className="container mx-auto p-4 outline-1 outline-gray-300 text-center">
          <h2 className="text-2xl font-bold text-green-600">An h2 heading</h2>
          <p>A different paragraph of text.</p>
          <p>Another different paragraph of text to test updates.</p>
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
