import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../store/users/usersSlice';

const Store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default Store;
