import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>nguyenurban.github.io</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Personal website. Planning on filling out later...
        </p>
      </div>
    </>
  )
}

export default App
