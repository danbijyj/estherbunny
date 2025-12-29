import { BookBox } from './style';

const BookItem = ({ book }) => {
    const { id, title, imgUrl } = book;
    return (
        <BookBox>
            <div>
                <h3>
                    <span>no. {id}</span>
                    <strong className="title">{title}</strong>
                </h3>
                <p>
                    <img src={imgUrl} alt={title} />
                </p>
            </div>
        </BookBox>
    );
};

export default BookItem;
