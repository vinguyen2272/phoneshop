/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import request from '../../utils/reques';

const BASE_URL = "https://6707af838e86a8d9e42c7a6d.mockapi.io/api/shopping";

export const getDetail = createAsyncThunk(
    'products/detail',
    async (id) => {
        const response = await request(`${BASE_URL}/product/${id}`, {
            method: 'GET',
          });
          return response.data; 
    }
)

interface ProductDetail {
    id: string;
    img: string;
    productname: string;
    price: number;
    des: string;
    color: string;
}

interface DetailState {
    items: ProductDetail | null; // Chỉ có một sản phẩm chi tiết
    loading: boolean;
    error: string | null;
}
  const detailSlice = createSlice({
    name: 'products',
    initialState: {
        items: null,
        loading: false,
        error: null,
      } as DetailState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getDetail.pending, (state) => {
          state.loading = true; 
          state.items = null; 
        })
        .addCase(getDetail.fulfilled, (state, action) => {
          state.loading = false; // Tải xong
          state.items = action.payload; // Lưu trữ dữ liệu
        })
        .addCase(getDetail.rejected, (state, action) => {
          state.loading = false; // Kết thúc tải
          state.error = action.error.message ? action.error.message : null;
        });
    },
  });
  
  export default detailSlice.reducer;