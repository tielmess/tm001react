function Card({ children, title, color = "blue" }) {
  const colorClasses = {
    blue: "border-blue-500 bg-blue-300",
    green: "border-green-500 bg-green-300",
    purple: "border-purple-500 bg-purple-300",
    red: "border-red-500 bg-red-300",
  };
  return (
    <div
      className={`border-l-4 ${colorClasses[color]} p-6 rounded-lg shadow-md`}
    >
      {title && (
        <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      )}
      <div className="text-gray-700">{children}</div>
    </div>
  );
}

function Container({ children, layout = "vertical" }) {
  const layoutClasses = {
    vertical: "flex flex-col space-y-4",
    horizontal: "flex flex-row flex-wrap gap-4",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-4",
  };
  return <div className={layoutClasses[layout]}>{children}</div>;
}

function ChildrenProps() {
  return (
    <section className="p-8 bg-white rounded-xl shadow-2xl">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Children Props</h2>
      <p className="desc mb-8 text-gray-600">
        This section demonstrates the use of children props in React. Children
        props allow you to pass components or elements as children to a parent
        component, enabling more flexible and reusable UI&nbsp;components.
      </p>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">
          Example of a Card component with children:
        </h3>
        <Container layout="grid">
          <Card title="User Profile" color="blue">
            <p className="mb-2">
              <strong>Name:</strong> Fred Blogs
            </p>
            <p className="mb-2">
              <strong>Email:</strong> Fred@blogs.com
            </p>
          </Card>
          <Card title="User Profile" color="green">
            <p className="mb-2">
              <strong>Name:</strong> Fred Blogs
            </p>
            <p className="mb-2">
              <strong>Email:</strong> Fred@blogs.com
            </p>
          </Card>
          <Card title="User Profile" color="purple">
            <p className="mb-2">
              <strong>Name:</strong> Fred Blogs
            </p>
            <p className="mb-2">
              <strong>Email:</strong> Fred@blogs.com
            </p>
          </Card>
          <Card title="User Profile" color="red">
            <p className="mb-2">
              <strong>Name:</strong> Fred Blogs
            </p>
            <p className="mb-2">
              <strong>Email:</strong> Fred@blogs.com
            </p>
          </Card>
        </Container>
      </div>
    </section>
  );
}

export default ChildrenProps;
