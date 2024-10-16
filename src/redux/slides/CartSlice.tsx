import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  name: string;
  img: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: JSON.parse(localStorage.getItem('cart') || '[]'), // Lấy dữ liệu từ local storage
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      saveCartToLocalStorage(state.items); // Lưu vào local storage
    },
    increaseQuantity: (state, action: PayloadAction<{ id: string }>) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity++;
      }
      saveCartToLocalStorage(state.items);
    },
    decreaseQuantity: (state, action: PayloadAction<{ id: string }>) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          state.items = state.items.filter(item => item.id !== action.payload.id);
        }
      }
      saveCartToLocalStorage(state.items);
    },
    removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity -= 1;
        if (existingItem.quantity <= 0) {
          state.items = state.items.filter(item => item.id !== action.payload.id);
        }
      }
      saveCartToLocalStorage(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      saveCartToLocalStorage([]); // Xóa giỏ hàng trong local storage
    },
  },
});

// Hàm tiện ích để lưu giỏ hàng vào local storage
const saveCartToLocalStorage = (items: CartItem[]) => {
  localStorage.setItem('cart', JSON.stringify(items));
};

export const { addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
