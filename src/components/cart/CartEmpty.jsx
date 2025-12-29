import { useNavigate } from 'react-router-dom';
import { CartEmptyWrap } from './style';
import { MainButtonStyle } from '../../ui/style';

const CartEmpty = () => {
    const navigate = useNavigate();
    const onGo = () => {
        navigate('/product');
    };
    return (
        <CartEmptyWrap>
            <div className="empty">
                <p className="empty_bg">장바구니가 비었습니다.</p>
                <p>
                    <MainButtonStyle style={{ width: '300px' }} onClick={onGo}>
                        쇼핑하러가기
                    </MainButtonStyle>
                </p>
            </div>
        </CartEmptyWrap>
    );
};

export default CartEmpty;
