import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import shopAPI from "../../axios/shop";
import { string } from "zod";
import { isTokenExpired, removeToken } from "../../tokenExpair";

interface ShopState {
  profile: string | null; // Assuming it's a URL or base64 string
  name: string | null;
  id: string | null;
  superUser: true;
  email: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: ShopState = {
  profile: null,
  name: null,
  id: null,
  superUser: true,
  email: null,
  loading: false,
  error: null,
};

export const fetchShopData = createAsyncThunk(
  "shop/fetchShopData",
  async (_, { rejectWithValue }) => {
    // this code for checking token is expire or not
    const isToken = isTokenExpired()
    if (isToken) {
      removeToken()
      return rejectWithValue("404");
    }
    // end of code
    try {
      const response = await shopAPI.get("api/auth/get-data");
      return response.data;
    } catch (error:any) {
      if (!error.response) {
        return rejectWithValue("network");
      }
      if (error.response.status === 400 / 404 / 401) {
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
      state.id = null;
      state.email = null;
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
        state.id = action.payload._id || null;
        state.email = action.payload.email || null;
      })
      .addCase(fetchShopData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = shopSlice.actions;
export default shopSlice.reducer;
