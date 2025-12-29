import { createSlice } from '@reduxjs/toolkit';

const memberData = [
    {
        id: 1,
        name: '김땡땡',
        tel: '010-000-1111',
        email: 'abc@naver.com',
        password: '1234',
    },
];

const initialState = {
    members: localStorage.getItem('members')
        ? JSON.parse(localStorage.getItem('members'))
        : memberData,
    authed: localStorage.getItem('authed')
        ? JSON.parse(localStorage.getItem('authed'))
        : false,
    user: localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('user'))
        : null,
};

let no = initialState.members.length + 1;

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            const { email, password } = action.payload;
            const item = state.members.find((m) => m.email === email);

            if (item && item.password === password) {
                state.authed = true;
                state.user = { ...item, provider: 'local' };
            }

            localStorage.setItem('authed', JSON.stringify(state.authed));
            localStorage.setItem('user', JSON.stringify(state.user));
        },

        kakaoLogin: (state, action) => {
            state.authed = true;
            state.user = {
                ...action.payload,
                provider: 'kakao',
            };

            localStorage.setItem('authed', JSON.stringify(true));
            localStorage.setItem('user', JSON.stringify(state.user));
        },

        logout: (state) => {
            state.authed = false;
            state.user = null;

            localStorage.setItem('authed', JSON.stringify(false));
            localStorage.setItem('user', JSON.stringify(null));
        },

        signup: (state, action) => {
            action.payload.id = no++;
            state.members.push(action.payload);
            localStorage.setItem('members', JSON.stringify(state.members));
        },
    },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
