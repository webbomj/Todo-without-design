import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  mode: 'all',
};

export const counterSlice = createSlice({
  name: 'core',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload)
    },
    setMode: (state, action) => {
      state.mode = action.payload
    },
    changeDone: (state, action) => {
      let current = state.todos.find(el => el.id === action.payload)
      current.done = !current.done
    }
  },
});

export const { addTodo, setMode, changeDone } = counterSlice.actions;

export default counterSlice.reducer;
