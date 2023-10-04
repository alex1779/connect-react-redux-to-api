import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  isLoading: false,
  error: undefined,
};

const fetchUser = createAsyncThunk(
  'users/fetchStatus',
  async () => {
    const response = await userAPI.fetchById(userId);
    return response.data;
  },
);

const extraReducers = (builder) => {
  switch (action.type, reducer) {
    case pending:
      return {
        ...initialState,
        isLoading: true,
      };
    case fulfilled:
      return {
        ...initialState,
        isLoading: false,
      };
    case rejected:
      return {
        ...initialState,
        isLoading: true,
        error: 'there was an error',
      };

    default:
      return state;
  }
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers,
  reducers: {
    fetchUsers(state) {
      return {

      };
    },
  },
});

export const { fetchUsers } = usersSlice.actions;

export default usersSlice.reducer;
