import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
  }
})

export const icecreamAction = icecreamSlice.actions;

export default icecreamSlice.reducer;