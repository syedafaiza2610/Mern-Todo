
import React, { useEffect, useState } from 'react'

const App = () => {
  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    const res = fetch("http://localhost:5000/todo/")
    .then(data => data.json())
    .then(res => {
      console.log("my data", res.data)
      setTodoList(res.data)
    })
    console.log(res)

  }, [])

  return (
    <div>{todoList.map((item) => (
      <>
      <h1>{item.title}</h1>
      <p>{item.desc}</p>
      </>
    ))}</div>
  )
}
export default App