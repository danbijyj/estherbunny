import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/modules/cartSlice';
import { MainButtonStyle, SmallButtonStyle } from '../../ui/style';

const ProductItem = ({ product }) => {
    const { id, image, title, price, description, category } = product;
    const dispatch = useDispatch();
    const { carts } = useSelector((state) => state.cart);
    return (
        <article>
            <div>
                <img src={image} alt={title} />
            </div>
            <h3>{category}</h3>
            <h4>{title}</h4>
            <p className="price">
                <span>
                    {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </span>
                원
            </p>
            <p className="cart_btn">
                {carts.find((item) => item.id === id) ? (
                    <MainButtonStyle
                        style={{ width: '160px', fontSize: '14px' }}
                        onClick={() => dispatch(cartActions.removeCart(id))}
                    >
                        장바구니 취소
                    </MainButtonStyle>
                ) : (
                    <SmallButtonStyle
                        style={{ width: '160px', fontSize: '14px' }}
                        onClick={() => dispatch(cartActions.addCart(product))}
                    >
                        장바구니 담기
                    </SmallButtonStyle>
                )}
            </p>
            <p className="desc">{description}</p>
        </article>
    );
};

export default ProductItem;
