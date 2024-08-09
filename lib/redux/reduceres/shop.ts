import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import shopAPI from "../../axios/shop";
import { string } from "zod";

interface ShopState {
  profile: string | null; // Assuming it's a URL or base64 string
  name: string | null;
  email: string | null;
  products: object[] | null;
  category: object[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: ShopState = {
  profile: null,
  name: null,
  email: null,
  products: null,
  category: null,
  loading: false,
  error: null,
};

export const fetchShopData = createAsyncThunk(
  "shop/fetchShopData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await shopAPI.get("api/auth/get-data");
      return response.data;
    } catch (error:any) {
      if (!error.response) {
        return rejectWithValue("network");
      }
      if (error.response.status === 401) {
        return rejectWithValue("404");
      }
      return rejectWithValue("An unexpected error occurred. Please try again.");
    }
  }
);
const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    logout: (state) => {
      state.profile = null;
      state.name = null;
      state.email = null;
      state.products = null;
      state.category = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchShopData.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log(state.email, state.name, "preview state");
      })
      .addCase(fetchShopData.fulfilled, (state, action) => {
        console.log(action.payload, "payload data");
        state.loading = false;
        state.profile = action.payload.imageLogo || null;
        state.name = action.payload.name || null;
        state.email = action.payload.email || null;
        state.products = action.payload.products || null;
        state.category = action.payload.category || null;
      })
      .addCase(fetchShopData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = shopSlice.actions;
export default shopSlice.reducer;
