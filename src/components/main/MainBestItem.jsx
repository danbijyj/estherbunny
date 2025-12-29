import { FaStar } from 'react-icons/fa';

const MainBestItem = ({ product }) => {
    const {
        id,
        image,
        title,
        price,
        description,
        category,
        rating,
        quantity,
        itemtotal,
    } = product;

    return (
        <article className="best_item">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p className="price">
                <span>
                    {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </span>
                원
            </p>
            <p className="rate">
                <span>
                    <FaStar />
                </span>
                {rating.rate}
            </p>
        </article>
    );
};

export default MainBestItem;
