import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  email: '',
  phoneNumber: '',
  password: '',
  user: null,
  errors: {},
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setField: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
    clearErrors: (state, action) => {
      if (action.payload.field) {
        delete state.errors[action.payload.field];
      } else {
        state.errors = {};
      }
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {setField, clearErrors, setUser} = loginSlice.actions;

export default loginSlice.reducer;
