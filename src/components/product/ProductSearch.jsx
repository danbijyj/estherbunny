import { ProductSearchWrap } from './style';
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
        setText('');
    };

    const onSort = (e) => {
        const { value } = e.target;
        if (value === '') {
            onReset();
            return;
        }
        dispatch(cartActions.sortCart(value));
    };

    const onReset = (e) => {
        e?.preventDefault();
        dispatch(cartActions.resetCart());
        setText('');
    };

    const changeInput = (e) => {
        setText(e.target.value);
    };

    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            dispatch(cartActions.searchCart(text));
            setText('');
        }
    };

    return (
        <ProductSearchWrap>
            <form onSubmit={onSubmit}>
                <p>
                    <select onChange={onSort}>
                        <option value="">상품 정렬</option>
                        <option value="title">제품명순</option>
                        <option value="priceAsc">낮은가격순</option>
                        <option value="priceDesc">높은가격순</option>
                        <option value="category">카테고리순</option>
                    </select>
                    <SmallButtonStyle onClick={onReset}>
                        초기화
                    </SmallButtonStyle>
                </p>
                <p>
                    <input
                        type="text"
                        value={text}
                        onChange={changeInput}
                        onKeyDown={onKeyDown}
                        placeholder="제품을 검색 하세요."
                    />
                    <MainButtonStyle type="submit" text="검색">
                        검색
                    </MainButtonStyle>
                    <SmallButtonStyle onClick={onReset}>
                        초기화
                    </SmallButtonStyle>
                </p>
            </form>
        </ProductSearchWrap>
    );
};

export default ProductSearch;
