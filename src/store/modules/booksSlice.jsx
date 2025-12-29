import { createSlice } from '@reduxjs/toolkit';
import { getNews } from './getAsync';

const initialState = {
    books: [], // 전체 데이터
    loading: true,
    error: null,
    perPage: 6,
    pageBooks: [], // 화면에 보여줄 데이터
    viewloading: false,
    page: 1,
};

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        startPage: (state, action) => {
            state.viewloading = false;
            state.pageBooks = [];
            state.page = 1;
        },
        setLoading: (state, action) => {
            state.viewloading = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload;
        },
        loadData: (state, action) => {
            const startIndex = (state.page - 1) * state.perPage;
            const endIndex = state.page * state.perPage;
            const currentData = state.books.slice(startIndex, endIndex);
            state.pageBooks = [...state.pageBooks, ...currentData];
            state.viewloading = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getNews.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getNews.fulfilled, (state, action) => {
                state.loading = false;
                state.books = action.payload;
                state.error = null;
            })
            .addCase(getNews.rejected, (state, action) => {
                state.loading = false;
                state.books = [];
                state.error = action.payload || '에러메세지';
            });
    },
});

export const booksActions = booksSlice.actions;
export default booksSlice.reducer;
