import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './redux/loginSlice';
import signUpReducer from './redux/signUpSlice';

const store = configureStore({
  reducer: {
     signUp : signUpReducer,
     login : loginReducer,
  },
});

export default store;
