import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ordered as cakeOrdered } from '../cake/cakeSlice'

interface IcecreamState {
  numOfIcecream: number;
}

const initialState: IcecreamState = {
  numOfIcecream: 20
}

const icecreamSlice = createSlice({
  name: 'icecream',
  initialState,
  reducers: {
    ordered: state => {
      state.numOfIcecream--
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfIcecream += action.payload
    },
  },
  // 這個是讓其他的slice reducer function來影響這裡的state，以下為兩種不同的寫法。
  // extraReducers: {
  //   ['cake/ordered']: (state) => {
  //     state.numOfIcecream--
  //   },
  // }
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, state => {
      state.numOfIcecream--
    })
  }
})

export const icecreamAction = icecreamSlice.actions;

export default icecreamSlice.reducer;