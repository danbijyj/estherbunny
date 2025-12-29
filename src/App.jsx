import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from './store/modules/cartSlice';
import GlobalStyle from './styled/GlobalStyle';
import { MasonryStyle } from './components/book/style';
import Layout from './common/Layout';
import {
    About,
    Book,
    Cart,
    Customer,
    Join,
    Login,
    Logout,
    Main,
    Notice,
    Product,
} from './pages';
import {
    CustomerAdd,
    CustomerDetail,
    CustomerEdit,
    NoticeDetail,
} from './components';
import NotFiles from './pages/notfiles';

const App = () => {
    const dispatch = useDispatch();
    const carts = useSelector((state) => state.cart.carts);
    useEffect(() => {
        dispatch(cartActions.totalCart());
    }, [dispatch, carts]);

    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <MasonryStyle />
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Main />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/book" element={<Book />} />
                        <Route path="/product" element={<Product />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/join" element={<Join />} />
                        <Route path="/notice">
                            <Route index element={<Notice />} />
                            <Route
                                path=":noticeID"
                                element={<NoticeDetail />}
                            />
                        </Route>
                        <Route path="/customer">
                            <Route index element={<Customer />} />
                            <Route
                                path="customeradd"
                                element={<CustomerAdd />}
                            />
                            <Route
                                path="customeredit"
                                element={<CustomerEdit />}
                            />
                            <Route
                                path=":customerID"
                                element={<CustomerDetail />}
                            />
                        </Route>
                        <Route path="*" element={<NotFiles />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
