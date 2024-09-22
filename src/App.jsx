import { useState } from 'react'
import Todo from './componenets/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>hello</div>
      <Todo></Todo>
    </>
  )
}

export default App
