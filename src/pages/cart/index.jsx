import { useSelector } from 'react-redux';
import CartEmpty from '../../components/cart/CartEmpty';
import CartList from '../../components/cart/CartList';
import { CartStyle } from './style';

const Cart = () => {
    const { carts } = useSelector((state) => state.cart);
    return (
        <CartStyle className="cart-box">
            <div className="inner">
                {carts.length > 0 ? <CartList /> : <CartEmpty />}
            </div>
        </CartStyle>
    );
};

export default Cart;
