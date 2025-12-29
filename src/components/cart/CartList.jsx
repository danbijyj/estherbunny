import { CartListStyle } from './style';
import CartTop from './CartTop';
import CartItem from './CartItem';
import CartRight from './CartRight';
import { useSelector } from 'react-redux';

const CartList = () => {
    const { carts } = useSelector((state) => state.cart);
    const { authed } = useSelector((state) => state.auth);

    return (
        <CartListStyle>
            <h2>장바구니</h2>
            {!authed && <CartTop />}
            <div className="cart-list-wrap">
                <div className="cart-list">
                    {carts.map((cart) => (
                        <CartItem key={cart.id} cart={cart} />
                    ))}
                </div>
                <CartRight />
            </div>
        </CartListStyle>
    );
};

export default CartList;
