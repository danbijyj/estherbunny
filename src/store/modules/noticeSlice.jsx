import { createSlice } from '@reduxjs/toolkit';
import noticeData from '../../assets/api/noticeData';

const initialState = {
    notices: noticeData,
};
export const noticeSlice = createSlice({
    name: 'notice',
    initialState,
    reducers: {},
});

export const noticeActions = noticeSlice.actions;
export default noticeSlice.reducer;
