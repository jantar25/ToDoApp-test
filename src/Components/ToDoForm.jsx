import React, { useState} from 'react'
import { v4 as uuid } from "uuid"
import { useDispatch } from 'react-redux'

import { postTodoStart,postTodoSuccess,postToDoFailure } from '../Redux/todoRedux'
import plusIcon from '../Assets/Icons/plus.svg'

const ToDoForm = () => {
  const dispatch = useDispatch()
  const [todo, setTodo] = useState('')

  const handleChangeTodo = (e) => {
    setTodo(e.target.value)
  }

  const handleSubmitTodo = (e) => {
    e.preventDefault()
    if (!todo) return
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
    <form className='flex items-center gap-2' onSubmit={handleSubmitTodo}>
        <input
          type="text"
          className="border border-main-color rounded-lg px-4 py-2 my-4"
          placeholder="Add a new todo"
          value={todo}
          maxLength={50}
          onChange={handleChangeTodo}
        />
        <button
          type="submit"
          className="h-12 w-12 flex items-center justify-center bg-main-color font-bold rounded-full hover:bg-main-hover"
        >
          <img src={plusIcon} alt='add' className='h-6 w-6' />
        </button>
  </form>
  )
}

export default ToDoForm