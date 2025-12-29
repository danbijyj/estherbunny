import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pageData: [],
    totalCount: 0,
    perPage: 10,
    currentPage: 1,
    totalPages: 1,
};
export const pagenationSlice = createSlice({
    name: 'pagenation',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.pageData = [...action.payload].sort((a, b) => b.id - a.id);
            state.totalCount = state.pageData.length;
            state.totalPages = Math.ceil(state.totalCount / state.perPage);
            state.currentPage = 1;
        },
        nextPage: (state) => {
            if (state.currentPage < state.totalPages) {
                state.currentPage++;
            }
        },
        prevPage: (state) => {
            if (state.currentPage > 1) {
                state.currentPage--;
            }
        },
        goToPage: (state, action) => {
            const num = action.payload;
            if (num >= 1 && num <= state.totalPages) {
                state.currentPage = num;
            }
        },
        goToFirstPage: (state) => {
            state.currentPage = 1;
        },
        goToLastPage: (state) => {
            state.currentPage = state.totalPages;
        },
    },
});

export const pagenationActions = pagenationSlice.actions;
export default pagenationSlice.reducer;
