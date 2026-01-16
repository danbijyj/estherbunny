import { BookStyle } from './style';
import Spinner from '../../components/spinner';
import BookList from '../../components/book/BookList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { booksActions } from '../../store/modules/booksSlice';
import { getNews } from '../../store/modules/getAsync';

const Book = () => {
    const dispatch = useDispatch();
    const { books, pageBooks, page, viewloading } = useSelector(
        (state) => state.books
    );
    useEffect(() => {
        dispatch(getNews());
        dispatch(booksActions.startPage());
    }, []);

    useEffect(() => {
        dispatch(booksActions.setLoading(true));
        const timer = setTimeout(() => {
            dispatch(booksActions.loadData());
        }, 500);
        return () => clearTimeout(timer);
    }, [page]);

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } =
                document.documentElement;
            if (scrollTop + clientHeight >= scrollHeight - 10 && !viewloading) {
                dispatch(booksActions.setPage(page + 1));
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [dispatch, viewloading, page]);

    return (
        <BookStyle>
            <div className="inner">
                <h2>News</h2>
                <BookList pageBooks={pageBooks} />
                {viewloading && <Spinner />}
            </div>
        </BookStyle>
    );
};

export default Book;
