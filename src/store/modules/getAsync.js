import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getNews = createAsyncThunk('news/getNews', async () => {
    const res = await axios.get(
        'https://gist.githubusercontent.com/danbijyj/4e445546e6536ed1c35415b85efd8f34/raw/newsData.json'
    );
    return res.data.news;
});
