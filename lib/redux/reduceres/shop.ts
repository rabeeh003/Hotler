import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import shopAPI from "../../axios/shop";

interface AhopState {
  profile: object | null;
  name: string | null;
  username: string | null;
  products: object[] | null;
  category: object[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: AhopState = {
  profile: null,
  name: null,
  username: null,
  products:null,
  category:null,
  loading: false,
  error: null,
};

export const fetchShopData = createAsyncThunk(
  "shop/fetchShopData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await shopAPI.get("api/auth/get-data");
      return response.data;
    } catch (error) {
      return rejectWithValue("user not found");
    }
  }
);

const adminSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    logout: (state) => {
      state.profile = null;
      state.name = null;
      state.username = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchShopData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchShopData.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload.profile;
        state.name = action.payload.name;
        state.username = action.payload.username;
      })
      .addCase(fetchShopData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = adminSlice.actions;
export default adminSlice.reducer;
