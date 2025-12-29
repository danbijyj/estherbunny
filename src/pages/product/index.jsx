import ProductSearch from '../../components/product/ProductSearch';
import { ProductStyle } from './style';
import ProductList from '../../components/product/ProductList';

const Product = () => {
    return (
        <ProductStyle>
            <div className="inner">
                <h2>ALL</h2>
                <ProductSearch />
                <ProductList />
            </div>
        </ProductStyle>
    );
};

export default Product;
