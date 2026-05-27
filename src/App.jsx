import "./App.css";

function App() {
  return (
    <>
      <div className="bg-gray-100 p-4 text-center">
        <div className="container mx-auto p-4 outline outline-1 outline-gray-300 text-center">
          <h1 className="text-3xl font-bold text-blue-600">An h1 heading</h1>
          <p>A paragraph of text.</p>
          <p>Another paragraph of text to test updates.</p>
        </div>
      </div>
      <div className="bg-gray-200 p-4 text-center">
        <div className="container mx-auto p-4 outline outline-1 outline-gray-300 text-center">
          <h2 className="text-2xl font-bold text-green-600">An h2 heading</h2>
          <p>A different paragraph of text.</p>
          <p>Another different paragraph of text to test updates.</p>
        </div>
      </div>
    </>
  );
}

export default App;
