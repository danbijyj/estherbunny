import Masonry from 'react-masonry-css';
import BookItem from './BookItem';

const BookList = ({ pageBooks }) => {
    return (
        <Masonry breakpointCols={3} className="grid" columnClassName="column">
            {pageBooks.map((book) => (
                <BookItem key={book.id} book={book} />
            ))}
        </Masonry>
    );
};

export default BookList;
