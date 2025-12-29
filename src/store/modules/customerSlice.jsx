import { createSlice } from '@reduxjs/toolkit';
import customerData from '../../assets/api/customerData';

const initialState = {
    customers: customerData,
    current: null,
};
let no = initialState.customers.length + 1;
export const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        addCustomer: (state, action) => {
            action.payload.id = no++;
            state.customers = [...state.customers, action.payload];
        },
        setCurrentCustomer: (state, action) => {
            state.current = action.payload;
        },
        removeCustomer: (state, action) => {
            state.customers = state.customers.filter(
                (customer) => customer.id !== action.payload
            );
        },
        updateCustomer: (state, action) => {
            state.customers = state.customers.map((customer) =>
                customer.id === action.payload.id ? action.payload : customer
            );
        },
    },
});

export const customerActions = customerSlice.actions;
export default customerSlice.reducer;
