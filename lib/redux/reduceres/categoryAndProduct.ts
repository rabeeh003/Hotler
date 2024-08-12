import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import shopAPI from '../../../lib/axios/shop'; // Adjust the import path to your API instance

export const fetchCategoryData = createAsyncThunk(
  'categoryAndProducts/fetchCategoryData',
  async (shopId: string, { rejectWithValue }) => {
    try {
      const response = await shopAPI.get(`/api/category/list-category/${shopId}`);
      console.log("list category",response.data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'An error occurred while fetching categories');
    }
  }
);

export const fetchProductData = createAsyncThunk(
  'categoryAndProducts/fetchProductData',
  async (shopId: string, { rejectWithValue }) => {
    try {
      const response = await shopAPI.get(`/api/products/list-product/${shopId}`);
      console.log("list product",response.data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'An error occurred while fetching products$');
    }
  }
);

interface CategoryAndProductsState {
  categories: any[];
  products: any[];
  loading: boolean;
  productLoading: boolean;
  error: string | null;
  productError: string | null;
}

const initialState: CategoryAndProductsState = {
  categories: [],
  products: [],
  loading: false,
  productLoading: false,
  productError: null,
  error: null,
};

const categoryAndProductsSlice = createSlice({
  name: 'categoryAndProducts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle category fetching
    builder.addCase(fetchCategoryData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchCategoryData.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    });
    builder.addCase(fetchCategoryData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // Handle product fetching
    builder.addCase(fetchProductData.pending, (state) => {
      state.productLoading = true;
      state.productError = null;
    });
    builder.addCase(fetchProductData.fulfilled, (state, action) => {
      state.productLoading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProductData.rejected, (state, action) => {
      state.productLoading = false;
      state.productError = action.payload as string;
    });
  },
});

export default categoryAndProductsSlice.reducer;
