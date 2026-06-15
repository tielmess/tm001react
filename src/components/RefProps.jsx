import { useRef, forwardRef } from "react";

const CustomInput = forwardRef(({ label, placeholder, className }, ref) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-2">{label}</label>
      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        className={`w-full px-4 py-2 border text-gray-700 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      />
    </div>
  );
});

CustomInput.displayName = "CustomInput";

function RefProps() {
  const inputRef = useRef(null);
  const secondInputRef = useRef(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };
  const getInputValue = () => {
    if (inputRef.current) {
      alert(`Input value: ${inputRef.current.value}`);
    }
  };
  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  const focusSecondInput = () => {
    secondInputRef.current?.focus();
  };
  const getSecondInputValue = () => {
    if (secondInputRef.current) {
      alert(`Input value: ${secondInputRef.current.value}`);
    }
  };
  const clearSecondInput = () => {
    if (secondInputRef.current) {
      secondInputRef.current.value = "";
      secondInputRef.current.focus();
    }
  };

  return (
    <div className="p-8 bg-white rounded-xl shadow-2xl">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Ref Props</h2>
      <p className="desc mb-4 text-gray-600">
        Refs provide a way to access DOM nodes or React elements directly. Use{" "}
        <code>forwardRef</code> to pass refs to child components.
      </p>
      <div>
        <div>
          <h3>Try it out!</h3>
          <CustomInput
            ref={inputRef}
            label="First input with ref."
            placeholder="Type something."
          />
          <div className="flex flex-wrap gap-3 my-6">
            <button
              className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
              onClick={focusInput}
            >
              Focus First Input
            </button>
            <button
              className="px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition"
              onClick={getInputValue}
            >
              Get First Input Value
            </button>
            <button
              className="px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition"
              onClick={clearInput}
            >
              Clear First Input
            </button>
          </div>
          <CustomInput
            ref={secondInputRef}
            label="Second input with ref."
            placeholder="Type something else..."
          />
          <div className="flex flex-wrap gap-3 mt-4">
            <button
              className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
              onClick={focusSecondInput}
            >
              Focus Second Input
            </button>
            <button
              className="px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition"
              onClick={getSecondInputValue}
            >
              Get Second Input Value
            </button>
            <button
              className="px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition"
              onClick={clearSecondInput}
            >
              Clear Second Input
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 border-l-4 border-yellow-400 bg-yellow-100 p-6 rounded-lg shadow-md">
        <h3 className="text-gray-800 font-semibold">When to use refs:</h3>
        <ul className="mx-6 mt-2 text-gray-800 list-disc">
          <li>Managing focus, text selection, or media playback</li>
          <li>Triggering imperative animations</li>
          <li>Integrating with third-party DOM libraries</li>
          <li> Accessing DOM measurements (scroll position, element size)</li>
        </ul>
      </div>
    </div>
  );
}

export default RefProps;
