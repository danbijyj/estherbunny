import { ProductSearchWrap } from './style';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { cartActions } from '../../store/modules/cartSlice';
import { MainButtonStyle, SmallButtonStyle } from '../../ui/style';

const ProductSearch = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(cartActions.searchCart(text));
    };

    const onSort = (e) => {
        e.preventDefault();
        const { value } = e.target;
        dispatch(cartActions.sortCart(value));
    };

    const onReset = (e) => {
        e.preventDefault();
        dispatch(cartActions.resetCart());
    };

    const changeInput = (e) => {
        const { value } = e.target;
        setText(value);
    };

    return (
        <ProductSearchWrap>
            <form onSubmit={onSubmit}>
                <p>
                    <select onChange={onSort}>
                        <option value="">상품 정렬</option>
                        <option value="title">제품명순</option>
                        <option value="price">가격순</option>
                        <option value="category">카테고리순</option>
                    </select>
                    <SmallButtonStyle
                        style={{ width: '80px', fontSize: '14px' }}
                        onClick={onReset}
                    >
                        초기화
                    </SmallButtonStyle>
                </p>
                <p>
                    <input
                        type="text"
                        name="text"
                        id=""
                        onChange={changeInput}
                        placeholder="제품을 검색 하세요."
                    />
                    <MainButtonStyle
                        type="submit"
                        text="검색"
                        style={{ width: '80px', fontSize: '14px' }}
                    >
                        검색
                    </MainButtonStyle>
                </p>
            </form>
        </ProductSearchWrap>
    );
};

export default ProductSearch;
