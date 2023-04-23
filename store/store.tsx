import { configureStore } from "@reduxjs/toolkit";
import card from "./slices/cardSlice";

interface CardState {
    totalPrice: string;
    items: [];
  }

export const store  = configureStore({
    reducer:{
        card,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
 