import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ToDoForm from '../Components/ToDoForm'
import Todo from '../Components/Todo'

const Home = () => {
  const dispatch = useDispatch()
  const { todoList } = useSelector((state) => state.todoList)
  const completedTodo = todoList.filter((todo) => todo.completed === true)
  const completionPercentage = (completedTodo.length / todoList.length) * 100

  return (
    <div className='flex flex-col items-center'>
      <div className={`flex items-center justify-center my-4 px-8 py-4 gap-4 border rounded-2xl ${completionPercentage >= 80? 'border-green-600' : 'border-red-color'}`}>
        <div className="flex flex-col items-start">
          <h1 className="text-main-color text-2xl font-bold text-center">Tasks Done</h1>
          <p className="text-gray-color text-lg text-center">Keep It Up</p>
        </div>
        <div className={`flex items-center justify-center text-3xl font-bold h-24 w-24 rounded-full text-main-color
        ${completionPercentage >= 80? 'bg-green-600' : 'bg-red-color'}`}>
        {completionPercentage}%
        </div>
      </div>
      <ToDoForm />
      <div className="w-full lg:w-1/2 my-4">
        {todoList.slice().reverse().map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  )
}

export default Home