/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import request from '../../utils/reques';

const BASE_URL = "https://6707af838e86a8d9e42c7a6d.mockapi.io/api/shopping";

export const getAllProducts = createAsyncThunk(
    'products/getAll',
    async () => {
      const response = await request(`${BASE_URL}/product`, {
        method: 'GET',
      });
      return response.data; 
    }
  );

  // Định nghĩa kiểu cho state
interface ProductState {
    items: any[]; // Thay đổi nếu bạn biết cấu trúc dữ liệu
    loading: boolean;
    error: string | null; // Thay đổi kiểu cho error
  }

  const productSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        loading: false,
        error: null,
      } as ProductState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getAllProducts.pending, (state) => {
          state.loading = true; // Đang tải
        })
        .addCase(getAllProducts.fulfilled, (state, action) => {
          state.loading = false; // Tải xong
          state.items = action.payload; // Lưu trữ dữ liệu
        })
        .addCase(getAllProducts.rejected, (state, action) => {
          state.loading = false; // Kết thúc tải
          state.error = action.error.message ? action.error.message : null;
        });
    },
  });
  
  export default productSlice.reducer;