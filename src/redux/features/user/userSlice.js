import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../../../utils/firebase.config';

const initialState = {
  name: '',
  email: '',
  isLoading: true,
  isError: false,
  error: '',
};

const createUser = createAsyncThunk(
  'userSlice/createUser',
  async ({ email, password }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
  }
)

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {},
});

export default userSlice.reducer;
