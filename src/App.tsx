import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-indigo-700">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Ideal Template</span>
          <span className="block">Create your new React App today!</span>
        </h2>
        <a
          href="#"
          className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
          onClick={() => setCount(count + 1)}
        >
          Counter: {count}
        </a>
      </div>
    </div>
  )
}

export { App }
