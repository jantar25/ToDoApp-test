import React from 'react'
import { useDispatch } from 'react-redux'

import { updateTodoStart,updateTodoSuccess,updateReviewFailure,
    deleteTodoStart,deleteTodoSuccess,deleteReviewFailure } from '../Redux/todoRedux'

const Todo = ({todo}) => {
  const dispatch = useDispatch()

  const deleteTodo = () => {
    dispatch(deleteTodoStart())
    try {
      dispatch(deleteTodoSuccess({id: todo.id}))
    } catch (error) {
      console.log(error)
      dispatch(deleteReviewFailure('Failed to delete todo'))
      setTimeout(() => {
        dispatch(deleteReviewFailure(null))
      }, 5000)
    }
  }

  const editTodo = () => {
    dispatch(updateTodoStart())
    try {
      dispatch(updateTodoSuccess({
        id: todo.id,
        updatedTodo: {
          ...todo,
          completed: !todo.completed
        }
      }))
    } catch (error) {
      console.log(error)
      dispatch(updateReviewFailure('Failed to update todo'))
      setTimeout(() => {
        dispatch(updateReviewFailure(null))
      }, 5000)
    }
  }

  return (
    <div>
      <div className='flex items-center justify-between border-b border-red-color py-4'>
        <h1 className='text-lg font-bold'>{todo.title}</h1>
        <div className='flex gap-4'>
          <button className='bg-red-color text-main-color px-4 py-2 rounded-lg' onClick={editTodo}>Edit</button>
          <button className='bg-red-color text-main-color px-4 py-2 rounded-lg' onClick={deleteTodo}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default Todo