import { createSlice } from '@reduxjs/toolkit';

let id = 0;
const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    input: '',
    todos: [
      {
        id: 1,
        text: 'Redux',
        done: true,
      },
      {
        id: 2,
        text: 'React',
        done: false,
      },
    ],
  },
  reducers: {
    changeInput: (state, { payload: input }) => {
      state.input = input;
    },
    insert: {
      reducer: (state, action) => {
        const { id, text } = action.payload;
        state.todos.push({ id, text, done: false });
      },
      prepare: text => {
        return { payload: { id: id++, text } };
      },
    },
    toggle: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.done = !todo.done;
      }
    },
    remove: (state, { payload: id }) => {
      const index = state.todos.findIndex(todo => todo.id === id);
      state.todos.splice(index, 1);
    },
  },
});

export const { changeInput, insert, toggle, remove } = todosSlice.actions;
export default todosSlice.reducer;
