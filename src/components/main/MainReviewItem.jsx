import { FaStar } from 'react-icons/fa';

const MainReviewItem = ({ review }) => {
    return (
        <div className="review_item">
            <img src={review.img} alt={review.content} />
            <p>{review.content}</p>
            <div className="meta">
                <span className="rate">
                    <FaStar /> {review.rating}
                </span>
                <span className="user">{review.user}</span>
                <span className="date">{review.date}</span>
            </div>
        </div>
    );
};

export default MainReviewItem;
