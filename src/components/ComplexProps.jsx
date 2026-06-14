import { useState } from "react";

// 1. Destructure the props clearly. We extract them directly from the passed object.
function UserProfileCard({ name, email, avatar, role, stats, theme, actions }) {
  return (
    <div
      className={`p-6 rounded-xl ${theme.backgroundColor} ${theme.textColor}`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`w-16 h-16 rounded-full ${theme.avatarBg} flex items-center justify-center text-2xl font-bold`}
        >
          {avatar}
        </div>
        <div>
          <h4 className="text-xl font-bold">{name}</h4>
          <p className="text-sm opacity-80">{email}</p>
          <span
            className={`inline-block mt-1 px-2 py-0.5 text-xs rounded-full ${theme.badgeBg}`}
          >
            {role}
          </span>
        </div>
      </div>

      {stats && (
        <div className="mt-4 grid grid-cols-3 gap-2 text-center border-t border-b border-gray-200/20 py-2">
          {Object.entries(stats).map(([key, value]) => (
            <div key={key}>
              <div className="text-lg font-bold">{value}</div>
              <div className="text-xs uppercase tracking-wider opacity-70">
                {key}
              </div>
            </div>
          ))}
        </div>
      )}

      {actions && (
        <div className="mt-4 flex gap-2">
          {actions.primary && (
            <button
              onClick={actions.primary.onClick} // Fixed: camelCase onClick
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition ${actions.primary.className}`}
            >
              {actions.primary.label}
            </button>
          )}
          {actions.secondary && (
            <button
              onClick={actions.secondary.onClick} // Fixed: camelCase onClick
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition ${actions.secondary.className}`}
            >
              {actions.secondary.label}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default function ComplexProps() {
  const [message, setMessage] = useState("");

  // Cleaned up the data structure slightly to remove the redundant nested 'user' key wrapping everything
  const users = [
    {
      name: "Fred Blogs",
      email: "Fred@blogs.com",
      avatar: "F",
      role: "Marketer",
      status: "Active",
      stats: {
        posts: 219,
        followers: 3254,
        following: 321,
      },
      theme: {
        backgroundColor: "bg-gradient-to-br from-purple-100 to-blue-100", // Fixed: missing hyphen
        textColor: "text-gray-800",
        avatarBg: "bg-purple-300",
        badgeBg: "bg-purple-200",
      },
      actions: {
        primary: {
          label: "View Profile",
          onClick: () => setMessage("Viewed Fred's profile"),
          className: "bg-purple-500 text-white hover:bg-purple-600",
        },
        secondary: {
          label: "Message",
          onClick: () => setMessage("Opening message to Fred"),
          className: "bg-purple-200 text-purple-700 hover:bg-purple-300",
        },
      },
    },
    {
      name: "Jane Blogs",
      email: "Jane@blogs.com",
      avatar: "J",
      role: "Developer",
      status: "Active",
      stats: {
        projects: 29,
        commits: 1454,
        reviews: 71,
      },
      theme: {
        backgroundColor: "bg-gradient-to-br from-blue-100 to-purple-100", // Fixed: missing hyphen
        textColor: "text-gray-800",
        avatarBg: "bg-blue-300",
        badgeBg: "bg-blue-200",
      },
      actions: {
        primary: {
          label: "View Profile",
          onClick: () => setMessage("Viewed Jane's profile"),
          className: "bg-blue-500 text-white hover:bg-blue-600",
        },
        secondary: {
          label: "Message",
          onClick: () => setMessage("Opening message to Jane"),
          className: "bg-blue-200 text-blue-700 hover:bg-blue-300",
        },
      },
    },
  ];

  return (
    <section className="p-8 bg-gray-50 rounded-xl shadow-2xl max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-2 text-gray-800">
        Complex/Nested Props
      </h2>
      <p className="desc mb-8 text-gray-600">
        Complex props allow you to pass nested objects and functions, enabling
        sophisticated component configuration and interactions.
      </p>
      <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm">
        <h3 className="text-lg font-semibold mb-6 text-gray-700">
          User Profile Cards (Nested User, Theme, and Actions):
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Fixed: changed 'user.map' to 'users.map' */}
          {users.map((userData, index) => (
            <UserProfileCard key={index} {...userData} />
          ))}
        </div>
      </div>

      {/* Dynamic Status Message Banner */}
      <div className="min-h-[40px] mb-6">
        {message && (
          <div className="p-2 text-sm bg-green-100 text-green-800 rounded-lg transition-all text-center">
            {message}
          </div>
        )}
      </div>
    </section>
  );
}
