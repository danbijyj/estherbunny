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
        dispatch(getNews()); // 데이터 가져오기
        dispatch(booksActions.startPage()); // 페이지 초기화
    }, []);

    // 페이지 변경될 때 로딩 후 데이터 불러오기
    useEffect(() => {
        dispatch(booksActions.setLoading(true));
        const timer = setTimeout(() => {
            dispatch(booksActions.loadData());
        }, 500);
        return () => clearTimeout(timer);
    }, [page]);

    // 무한 스크롤 이벤트
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
