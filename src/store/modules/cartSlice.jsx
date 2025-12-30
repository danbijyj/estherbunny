import { createSlice } from '@reduxjs/toolkit';
import productData from '../../assets/api/productData';

const initialState = {
    products: localStorage.getItem('products')
        ? JSON.parse(localStorage.getItem('products'))
        : productData,
    carts: localStorage.getItem('carts')
        ? JSON.parse(localStorage.getItem('carts'))
        : [],
    priceTotal: 0,
    quantityTotal: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action) => {
            const id = action.payload.id;
            const item = state.carts.find((cart) => cart.id === id);
            if (item) {
                item.quantity++;
                item.itemtotal = item.price * item.quantity;
            } else {
                state.carts.push(action.payload);
            }
            localStorage.setItem('carts', JSON.stringify(state.carts));
        },
        removeCart: (state, action) => {
            const id = action.payload;
            state.carts = state.carts.filter((item) => item.id !== id);
            localStorage.setItem('carts', JSON.stringify(state.carts));
        },
        emptyCart: (state, action) => {
            state.carts = [];
            localStorage.setItem('carts', JSON.stringify(state.carts));
        },
        searchCart: (state, action) => {
            const text = action.payload.toLowerCase();
            state.products = productData.filter(
                (product) =>
                    product.title.toLowerCase().includes(text) ||
                    product.description.toLowerCase().includes(text) ||
                    product.category.toLowerCase().includes(text)
            );
            localStorage.setItem('carts', JSON.stringify(state.carts));
        },
        sortCart: (state, action) => {
            const type = action.payload;
            if (!type) return;
            state.products = [...state.products].sort((a, b) => {
                switch (type) {
                    case 'priceAsc':
                        return a.price - b.price;
                    case 'priceDesc':
                        return b.price - a.price;
                    case 'title':
                        return a.title.localeCompare(b.title, 'ko');
                    case 'category':
                        return a.category.localeCompare(b.category, 'ko');
                    default:
                        return 0;
                }
            });
        },
        resetCart: (state, action) => {
            state.products = productData;
        },
        totalCart: (state) => {
            let totalPrice = 0;
            let totalQuantity = 0;
            state.carts.forEach((item) => {
                totalQuantity += item.quantity;
                totalPrice += item.price * item.quantity;
            });
            state.quantityTotal = totalQuantity;
            state.priceTotal = totalPrice;
        },
        increaseQuantity: (state, action) => {
            const id = action.payload;
            const item = state.carts.find((cart) => cart.id === id);
            if (item) {
                item.quantity++;
                item.itemtotal = item.price * item.quantity;
            }
            localStorage.setItem('carts', JSON.stringify(state.carts));
        },
        decreaseQuantity: (state, action) => {
            const id = action.payload;
            const item = state.carts.find((cart) => cart.id === id);
            if (item && item.quantity > 1) {
                item.quantity--;
                item.itemtotal = item.price * item.quantity;
            } else {
                item.quantity = 1;
                item.itemtotal = item.price * item.quantity;
            }
            localStorage.setItem('carts', JSON.stringify(state.carts));
        },
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
