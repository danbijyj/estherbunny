import { ProductListWrap } from './style';
import ProductItem from './ProductItem';
import { useSelector } from 'react-redux';

const ProductList = () => {
    const { products } = useSelector((state) => state.cart);
    return (
        <ProductListWrap className="cart-box">
            {products.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </ProductListWrap>
    );
};

export default ProductList;
