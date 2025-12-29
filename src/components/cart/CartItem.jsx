import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/modules/cartSlice';
import { CgRemove, CgAdd, CgClose } from 'react-icons/cg';

const CartItem = ({ cart }) => {
    const { id, image, quantity, itemtotal, title } = cart;
    const dispatch = useDispatch();
    return (
        <article>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <div>
                <span>
                    <CgRemove
                        onClick={() =>
                            dispatch(cartActions.decreaseQuantity(id))
                        }
                    />
                </span>
                <strong>{quantity}</strong>
                <span>
                    <CgAdd
                        onClick={() =>
                            dispatch(cartActions.increaseQuantity(id))
                        }
                    />
                </span>
            </div>
            <span className="price">
                {(itemtotal ?? 0)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                원
            </span>
            <CgClose
                className="remove"
                onClick={() => dispatch(cartActions.removeCart(id))}
            />
        </article>
    );
};

export default CartItem;
