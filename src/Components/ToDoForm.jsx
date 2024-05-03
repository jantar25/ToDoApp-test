import React, { useState} from 'react'
import { v4 as uuid } from "uuid"
import { useDispatch } from 'react-redux'

import { postTodoStart,postTodoSuccess,postToDoFailure } from '../Redux/todoRedux'

const ToDoForm = () => {
  const dispatch = useDispatch()
  const [todo, setTodo] = useState('')

  const handleChangeTodo = (e) => {
    setTodo(e.target.value)
  }

  const handleSubmitTodo = (e) => {
    e.preventDefault()
    const newTodo = {
      id: uuid(),
      title: todo,
      completed: false,
    }
    dispatch(postTodoStart())
    try {
      dispatch(postTodoSuccess(newTodo))
      setTodo('')
    } catch (error) {
      console.log(error)
      dispatch(postToDoFailure('Failed to add todo'))
      setTimeout(() => {
        dispatch(postToDoFailure(null))
      }, 5000)
    }
  }

  return (
    <form className='' onSubmit={handleSubmitTodo}>
        <input
          type="text"
          className="border border-red-color rounded-lg px-4 py-2 my-4"
          placeholder="Add a new todo"
          value={todo}
          onChange={handleChangeTodo}
        />
        <button
          type="submit"
          className="bg-red-color text-main-color font-bold px-4 py-2 rounded-lg"
        >
          Add
        </button>
  </form>
  )
}

export default ToDoForm