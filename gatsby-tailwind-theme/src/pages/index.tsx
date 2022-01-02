import React from 'react'

const Home = () => {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold underline">Hello, there</h1>
        <p>
          Hi, I am a <strong>Gatsby Theme</strong>
        </p>
        <a
          href="#"
          className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
          aria-current="page"
        >
          Dashboard
        </a>
      </div>
      <div className="bg-green-300 border-green-600 border-b p-4 m-4 rounded">
        Hello World
      </div>
    </>
  )
}

export default Home
