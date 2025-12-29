import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import NoticeList from '../../components/notice/NoticeList';
import Pagination from '../../components/pagination';
import { NoticeStyle } from './style';
import { pagenationActions } from '../../store/modules/pagenationSlice';

const Notice = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        if (location.state?.page) {
            dispatch(pagenationActions.goToPage(location.state.page));
        }
    }, [location.state, dispatch]);

    return (
        <NoticeStyle>
            <div className="inner">
                <h2>공지사항</h2>
                <NoticeList />
                <Pagination />
            </div>
        </NoticeStyle>
    );
};

export default Notice;
