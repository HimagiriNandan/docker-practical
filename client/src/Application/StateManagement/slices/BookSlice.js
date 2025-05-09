import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
    const response = await axios.get("http://localhost:8000/material"); 
    console.log(response.data);
    return response.data || [];
});

const initialState = {
    books: [],
    status: "idle",
    error: null
};

const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        setBooks: (state, action) => {
            state.books = action.payload;
            state.status = "succeeded";
        },
        clearBooks(state) {
            state.books = [];
            state.status = "idle";
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchBooks.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.books = action.payload || [];
            })
            .addCase(fetchBooks.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
});

export const { clearBooks ,setBooks} = bookSlice.actions;
export default bookSlice.reducer;
