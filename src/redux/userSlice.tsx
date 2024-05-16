import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  data: [] | null;
  loading: boolean;
  error: string | null;
}

const initialState: CounterState = {
  data: [],
  loading: false,
  error: "",
};

export const getUser = createAsyncThunk("user", async () => {
  return fetch("http://localhost:8080/allpost").then((res) => res.json());
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},


  extraReducers(builder) {
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
        console.log("ssdsdsdsdsd",action.payload);
        console.log("state",state);
        
      })
      .addCase(getUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
        state.data = [];
   
      });

      
  },
});

// export const { increment, decrement, incrementByAmount } = userSlice.actions;

export default userSlice.reducer;
