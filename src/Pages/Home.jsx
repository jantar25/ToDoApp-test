import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ToDoForm from '../Components/ToDoForm'
import Todo from '../Components/Todo'

const Home = () => {
  const dispatch = useDispatch()
  const { todoList } = useSelector((state) => state.todoList)

  console.log(todoList)
  return (
    <div className='flex flex-col items-center'>
      <div className="flex items-center justify-center my-4 px-8 py-4 gap-4 border border-red-color rounded-2xl">
        <div className="flex flex-col items-start">
          <h1 className="text-main-color text-2xl font-bold text-center">Todo Done</h1>
          <p className="text-gray-color text-lg text-center">Keep It Up</p>
        </div>
        <div className="flex items-center justify-center text-3xl font-bold h-24 w-24 rounded-full bg-red-color text-main-color">
          2/5
        </div>
      </div>
      <ToDoForm />
      <div className="">
        {todoList.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  )
}

export default Home