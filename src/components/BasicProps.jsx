import React from "react";

function Button({ text, color, size, onClick, disabled, secondary, success }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-2 rounded-lg font-medium transition-all duration-300
        ${size === "small" ? "text-sm" : size === "large" ? "text-lg" : "text-base"}
        ${color === "primary" ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-200 text-gray-200 hover:bg-gray-300"}
        ${color === "secondary" ? "bg-purple-500 text-white hover:bg-purple-600" : "bg-blue-500 text-white hover:bg-blue-600"}
        ${color === "success" ? "bg-green-500 text-white hover:bg-green-600" : ""}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        `}
    >
      {text}
    </button>
  );
}

function BasicProps() {
  const [clickCount, setClickCount] = React.useState(0);
  return (
    <section className="p-8 bg-white rounded-xl shadow-2xl">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Basic Props</h2>
      <p className="mb-8 text-gray-600">
        This section demonstrates basic props like text, color, size, onClick,
        disabled, secondary, and success.
      </p>
      <div className="space-x-4">
        <Button text="Primary" color="primary" />
        <Button text="Secondary" color="secondary" />
        <Button text="Success" color="success" />
        <Button text="Disabled" color="primary" disabled />
        <Button
          text={`Clicked ${clickCount} times`}
          color="primary"
          onClick={() => setClickCount(clickCount + 1)}
        />
      </div>
    </section>
  );
}

export default BasicProps;
