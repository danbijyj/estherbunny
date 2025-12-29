import { useDispatch, useSelector } from 'react-redux';
import { PaginationStyle } from './style';
import { pagenationActions } from '../../store/modules/pagenationSlice';

const Pagination = () => {
    const { totalPages, currentPage } = useSelector(
        (state) => state.pagenation
    );
    const pageArray = [...Array(totalPages)].map((_, i) => i + 1);
    const dispatch = useDispatch();
    return (
        <PaginationStyle>
            <div>
                <button
                    onClick={() => dispatch(pagenationActions.goToFirstPage())}
                >{`<<`}</button>
                <button
                    onClick={() => dispatch(pagenationActions.prevPage())}
                >{`<`}</button>

                {pageArray.map((item) => (
                    <button
                        key={item}
                        className={currentPage === item ? 'on' : ''}
                        onClick={() =>
                            dispatch(pagenationActions.goToPage(item))
                        }
                    >
                        {item}
                    </button>
                ))}

                <button
                    onClick={() => dispatch(pagenationActions.nextPage())}
                >{`>`}</button>
                <button
                    onClick={() => dispatch(pagenationActions.goToLastPage())}
                >{`>>`}</button>
            </div>
        </PaginationStyle>
    );
};

export default Pagination;
