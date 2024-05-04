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
    if (todo.completed) return
    dispatch(updateTodoStart())
    try {
      dispatch(updateTodoSuccess({
        id: todo.id,
        updatedTodo: {
          ...todo,
          completed: true
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
      <div className='flex items-center justify-between border-b border-main-color p-2 lg:p-4 gap-4'>
        <label htmlFor={todo.id} className="flex flex-1 items-center justify-start gap-1 lg:gap-2 cursor-pointer hover:bg-gray-color p-2 rounded-lg">
          <input
            id={todo.id}
            type="checkbox"
            className={`h-4 lg:h-6 w-4 lg:w-6 appearance-none border border-gray-color rounded-full ${todo.completed? 'bg-green-400' : 'bg-white'}`}
            checked={todo.completed}
            onChange={editTodo}
          />
          <h1 className='text-md lg:text-lg font-bold text-main'>{todo.title}</h1>
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