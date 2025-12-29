import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cartActions } from '../../store/modules/cartSlice';
import { MainButtonStyle, SmallButtonStyle } from '../../ui/style';

const CartRight = () => {
    const { priceTotal, quantityTotal, carts } = useSelector(
        (state) => state.cart
    );
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(cartActions.totalCart());
    }, [carts]);
    const navigate = useNavigate();
    const onGo = () => {
        navigate(`/product`);
    };
    const onEmpty = () => {
        const clear = window.confirm(
            '장바구니를 비웠습니다. 쇼핑을 계속 하시겠습니까?'
        );
        dispatch(cartActions.emptyCart(clear));
        if (clear) {
            navigate('/product');
        }
    };
    return (
        <>
            <div className="cart-right">
                <p>
                    <strong>총 갯수 </strong>
                    <span> {quantityTotal}개</span>
                </p>
                <p>
                    <strong>총 주문금액</strong>
                    <span>
                        <em>
                            {priceTotal
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        </em>
                        원
                    </span>
                </p>
                <div className="divider"></div>

                <MainButtonStyle style={{ width: '200px' }} onClick={onEmpty}>
                    장바구니 비우기
                </MainButtonStyle>
                <SmallButtonStyle style={{ width: '200px' }} onClick={onGo}>
                    쇼핑 더하기
                </SmallButtonStyle>
            </div>
        </>
    );
};

export default CartRight;
