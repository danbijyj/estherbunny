import { configureStore } from '@reduxjs/toolkit';
import auth from './modules/authSlice';
import books from './modules/booksSlice';
import cart from './modules/cartSlice';
import customer from './modules/customerSlice';
import notice from './modules/noticeSlice';
import review from './modules/reviewSlice';
import pagenation from './modules/pagenationSlice';

const store = configureStore({
    reducer: {
        auth,
        books,
        cart,
        customer,
        notice,
        review,
        pagenation,
    },
});

export default store;
