import { createAsyncThunk, createSlice, PayloadAction, PayloadActionCreator } from "@reduxjs/toolkit";
import axios from 'axios';
// from api data
interface dataUser {
  id: number;
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    }
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  }
}

interface UserState {
  loading: boolean;
  users: string[],
  error: string | undefined;
}

const initialState: UserState = {
  loading: false,
  users: [],
  error: ''
}

// Generates pending, fulfilled and rejected action types
// 這裡代表外接api的處理方式
export const fetchUsers = createAsyncThunk<string[], void>('user/fetchUsers', async () => {
  try {
    const res = axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => res.data.map((user: dataUser) => user.name))
    return res;
  } catch(err) {
    console.log(err);
  }
})

// 每個createAsyncThunk都會帶有三個情況，pending, fulfilled, rejected, 三種，對應的就是loading, reslove, reject
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false
      state.users = action.payload
      state.error = ''
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false
      state.users = []
      state.error = action.error.message
    })
  }
})

export default userSlice.reducer;