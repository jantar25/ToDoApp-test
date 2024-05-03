import React from 'react'
import { useDispatch } from 'react-redux'

import trashIcon from '../Assets/Icons/trash.svg'
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
        <label htmlFor={todo.id} className="flex items-center justify-start gap-2 cursor-pointer">
          <input
            id={todo.id}
            type="checkbox"
            className="h-6 w-6 mr-4 accent-main-color"
            checked={todo.completed}
            onChange={editTodo}
          />
          <h1 className='text-lg font-bold'>{todo.title}</h1>
          <p className={`text-xs px-2 py-1 font-bold rounded-full ${todo.completed? 'bg-green-400' : 'bg-yellow-400'}`}>
            {todo.completed? 'completed' : 'pending'}
          </p>
        </label>
        <img src={trashIcon} alt='delete' className='h-6 w-6 cursor-pointer' onClick={deleteTodo} />
      </div>
    </div>
  )
}

export default Todo