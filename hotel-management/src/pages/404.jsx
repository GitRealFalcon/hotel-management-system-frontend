// pages/404.js
import { Link } from "react-router-dom";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="dark:text-[var(--text-primary)] text-[#1A202C] font-semibold mb-6">Page not found</p>
      <Link
        to={"/"}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
