import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

import axios from "axios";

export const fetchCategories = createAsyncThunk(
    "categories/fetchCategoriesStatus",
    async (_, thunkApi) => {
        try {
        } catch (e) {
            if (e instanceof Error) {
                console.log(e.message);
                return thunkApi.rejectWithValue(e);
            }
        }
    }
);

interface CategoriesState {
    list: [];
}

const initialState: CategoriesState = {
    list: [],
};

export const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
});

export const { increment, decrement, incrementByAmount } =
    categoriesSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
