import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getReviews = createAsyncThunk('review/getReviews', async () => {
    const res = await axios.get(
        'https://gist.githubusercontent.com/danbijyj/c5f51bbfa364fc6fcb70dbec72fa3515/raw/d4eb5794ea974dfca57597f2c0092b62915ef2c7/reviewData.json'
    );
    return res.data.reviews;
});

const reviewSlice = createSlice({
    name: 'review',
    initialState: {
        reviews: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getReviews.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getReviews.fulfilled, (state, action) => {
                state.reviews = action.payload;
                state.loading = false;
            })
            .addCase(getReviews.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            });
    },
});

export default reviewSlice.reducer;
