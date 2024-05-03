import { createSlice } from '@reduxjs/toolkit'

const currentUserSlice = createSlice({
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
      state.todoList= state.todoList.push(action.payload)
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
      state.todoList[state.todoList.findIndex((item) => item.id === action.payload.id)] = action.payload.updatedTodo
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
      state.todoList[state.todoList.findIndex((item) => item.id === action.payload.id)] = action.payload.updatedTodo
      state.error=null
    },
    deleteReviewFailure:(state,error) => {
      state.isFetching=false
      state.error=error.payload
  
    },
  }
})

export const { userLoginStart,userLoginSuccess,userLoginFailure,userLogoutSuccess,updateUserProfileStart,
  updateUserProfileSuccess,updateUserProfileFailure } = currentUserSlice.actions
export default currentUserSlice.reducer