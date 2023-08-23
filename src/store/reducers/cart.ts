import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PratoProps } from "../../components/CardRestaurant";

type cartState = {
  items: PratoProps[];
  isOpen: boolean;
};

const initialState: cartState = {
  items: [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<PratoProps>) => {
      const prato = state.items.find((item) => item.id === action.payload.id);

      if (!prato) {
        state.items.push(action.payload);
      } else {
        alert("Prato já adicionado ao carrinho");
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

export const { add, remove, open, close } = cartSlice.actions;
export default cartSlice.reducer;
