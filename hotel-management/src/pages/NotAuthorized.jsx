import React from 'react'
import { Link } from 'react-router-dom'

const NotAuthorized = () => {
  return (
   <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold text-red-500 mb-4">403</h1>
      <p className="text-gray-600 mb-6">Not Authorized</p>
      <Link
        to={"/"}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </div>
  )
}

export default NotAuthorized
