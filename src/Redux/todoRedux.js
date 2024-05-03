import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name:'todoList',
  initialState:{
    todoList: [],
    error: null,
    isFetching: false,
  },
  reducers:{
    // GET ALL TODOS
    getTodoStart:(state) => {
      state.isFetching=true
    },
    getTodoSuccess:(state,action) => {
      state.isFetching=false
      state.todoList=action.payload
      state.error=null
    },
    getToDoFailure:(state,error) => {
      state.isFetching=false
      state.error=error.payload
    },

    // CREATE A TODO
    postTodoStart:(state) => {
      state.isFetching=true
    },
    postTodoSuccess:(state,action) => {
      state.isFetching=false
      state.todoList.push(action.payload)
      state.error=null
    },
    postToDoFailure:(state,error) => {
      state.isFetching=false
      state.error=error.payload
    },

    // UPDATE A TODO
    updateTodoStart:(state) => {
      state.isFetching=true
      state.error=null
    },
    updateTodoSuccess:(state,action) => {
      state.isFetching=false
      const index = state.todoList.findIndex(item => item.id === action.payload.id)
      if (index !== -1) {
        state.todoList[index] = action.payload.updatedTodo
      }
      state.error=null
    },
    updateReviewFailure:(state,error) => {
      state.isFetching=false
      state.error=error.payload

    },
    // DELETE A TODO
    deleteTodoStart:(state) => {
      state.isFetching=true
      state.error=null
    },
    deleteTodoSuccess:(state,action) => {
      state.isFetching=false
      const index = state.todoList.findIndex(item => item.id === action.payload.id)
      if (index !== -1) {
        state.todoList.splice(index, 1)
      }
      state.error=null
    },
    deleteReviewFailure:(state,error) => {
      state.isFetching=false
      state.error=error.payload
  
    },
  }
})

export const { postTodoStart,postTodoSuccess,postToDoFailure,updateTodoStart,updateTodoSuccess,updateReviewFailure,
  deleteTodoStart,deleteTodoSuccess,deleteReviewFailure } = todoSlice.actions
export default todoSlice.reducer